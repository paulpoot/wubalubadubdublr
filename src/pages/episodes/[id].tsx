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
import { EpisodeSingleQueryResult, EpisodeSingle } from '~/types/rmapi/episode/single';
import { EPISODE_SINGLE } from '~/src/graphql/episodes/episodeSingle.query';
import Button from '~/src/components/atoms/Button';
import { injectString } from '~/lib/utils/template';
import CharacterGrid from '~/src/components/molecules/CharacterGrid';

type Props = {
    page: Page;
    episode: EpisodeSingle;
};

function EpisodePage({ page, episode }: Props): JSX.Element {
    return (
        <>
            <Masthead>
                <RichText document={page.content} />
            </Masthead>

            <Container>
                <Button text={page.microcopy['common.backToHomePage']} url="/" />
                <h1>
                    <small>{episode.episode}</small> {episode.name}
                </h1>
                <CharacterGrid characters={episode.characters} />
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    let page = await resolveBySlug('episode/id');
    const apolloClient = initializeApollo();

    const { data: episode }: ApolloQueryResult<EpisodeSingleQueryResult> = await apolloClient.query<
        EpisodeSingleQueryResult
    >({
        query: EPISODE_SINGLE,
        variables: { id },
    });

    page = {
        ...page,
        title: injectString(page.title, { title: `${episode?.episode.episode} ${episode?.episode.name}` }),
    };

    return {
        props: {
            page,
            episode: episode?.episode,
        },
    };
};

EpisodePage.Layout = DefaultLayout;

export default EpisodePage;
