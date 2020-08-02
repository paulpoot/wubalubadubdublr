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
import { DIMENSION_SINGLE } from '~/src/graphql/dimensions/dimensionSingle.query';
import { DimensionSingleQueryResult, DimensionSingle } from '~/types/rmapi/dimension/single';

type Props = {
    page: Page;
    dimension: DimensionSingle;
};

function DimensionPage({ page, dimension }: Props): JSX.Element {
    return (
        <>
            <Masthead>
                <RichText document={page.content} />
            </Masthead>

            <Container>
                <Button text={page.microcopy['common.backToHomePage']} url="/" />
                <h1>{dimension[0].dimension}</h1>
                {dimension.map((location) => (
                    <>
                        <h2>{location.name}</h2>
                        <CharacterGrid
                            characters={location.residents}
                            noCharactersFound={page.microcopy['characters.noneFound']}
                        />
                    </>
                ))}
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { name } = context.query;

    let page = await resolveBySlug('dimension/name');
    const apolloClient = initializeApollo();

    const { data: dimension }: ApolloQueryResult<DimensionSingleQueryResult> = await apolloClient.query<
        DimensionSingleQueryResult
    >({
        query: DIMENSION_SINGLE,
        variables: { dimension: name },
    });

    page = {
        ...page,
        title: injectString(page.title, { title: `${dimension?.locations.results[0].dimension}` }),
    };

    return {
        props: {
            page,
            dimension: dimension?.locations.results,
        },
    };
};

DimensionPage.Layout = DefaultLayout;

export default DimensionPage;
