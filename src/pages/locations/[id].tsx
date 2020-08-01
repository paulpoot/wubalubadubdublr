import React from 'react';
import { GetServerSideProps } from 'next';
import { resolveBySlug } from '~/lib/contentful/slug-resolver';
import { Page } from '~/types/contentful';
import DefaultLayout from '~/src/layout';
import { initializeApollo } from '~/lib/apolloClient';
import { ApolloQueryResult } from '@apollo/client';
import Masthead from '~/src/components/molecules/Masthead';
import { RichText } from '~/src/blocks/rich-text';
import Container from '~/src/components/templates/Container';
import Button from '~/src/components/atoms/Button';
import { injectString } from '~/lib/utils/template';
import CharacterGrid from '~/src/components/molecules/CharacterGrid';
import { LocationSingle, LocationSingleQueryResult } from '~/types/rmapi/location/single';
import { LOCATION_SINGLE } from '~/src/graphql/locations/locationSingle.query';

type Props = {
    page: Page;
    location: LocationSingle;
};

function LocationPage({ page, location }: Props): JSX.Element {
    return (
        <>
            <Masthead>
                <RichText document={page.content} />
            </Masthead>

            <Container>
                <Button text={page.microcopy['common.backToHomePage']} url="/" />
                <h1>
                    <small>{location.dimension}</small> {location.name}
                </h1>
                <CharacterGrid characters={location.residents} />
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    let page = await resolveBySlug('location/id');
    const apolloClient = initializeApollo();

    const { data: location }: ApolloQueryResult<LocationSingleQueryResult> = await apolloClient.query<
        LocationSingleQueryResult
    >({
        query: LOCATION_SINGLE,
        variables: { id },
    });

    page = {
        ...page,
        title: injectString(page.title, { title: `${location?.location.name}, ${location?.location.dimension}` }),
    };

    return {
        props: {
            page,
            location: location?.location,
        },
    };
};

LocationPage.Layout = DefaultLayout;

export default LocationPage;
