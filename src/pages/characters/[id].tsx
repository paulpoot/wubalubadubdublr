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
import { CharacterSingleQueryResult, CharacterSingle } from '~/types/rmapi/character/single';
import { CHARACTER_SINGLE } from '~/src/graphql/characters/characterSingle.query';
import CharacterPassport from '~/src/components/molecules/CharacterPassport/CharacterPassport';
import LinkList from '~/src/components/molecules/LinkList';
import { EpisodeOverview } from '~/types/rmapi/episode/overview';
import { LinkListItem } from '~/src/components/molecules/LinkList/LinkList';

type Props = {
    page: Page;
    character: CharacterSingle;
};

const mapEpisodes = (episodes: EpisodeOverview): LinkListItem[] =>
    episodes.map((episode) => ({ text: `${episode.episode} - ${episode.name}`, url: `/episodes/${episode.id}` }));

function CharacterPage({ page, character }: Props): JSX.Element {
    return (
        <>
            <Masthead>
                <RichText document={page.content} />
            </Masthead>

            <Container>
                <Button text={page.microcopy['common.backToHomePage']} url="/" />
                <CharacterPassport
                    character={character}
                    statusLabel={page.microcopy['characters.statusLabel']}
                    speciesLabel={page.microcopy['characters.speciesLabel']}
                    typeLabel={page.microcopy['characters.typeLabel']}
                    genderLabel={page.microcopy['characters.genderLabel']}
                    originLabel={page.microcopy['characters.originLabel']}
                    locationLabel={page.microcopy['characters.locationLabel']}
                />

                <LinkList title={page.microcopy['characters.episodeLabel']} items={mapEpisodes(character.episode)} />
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    let page = await resolveBySlug('characters/id');
    const apolloClient = initializeApollo();

    const { data: character }: ApolloQueryResult<CharacterSingleQueryResult> = await apolloClient.query<
        CharacterSingleQueryResult
    >({
        query: CHARACTER_SINGLE,
        variables: { id },
    });

    page = {
        ...page,
        title: injectString(page.title, { title: `${character?.character.name}` }),
    };

    return {
        props: {
            page,
            character: character?.character,
        },
    };
};

CharacterPage.Layout = DefaultLayout;

export default CharacterPage;
