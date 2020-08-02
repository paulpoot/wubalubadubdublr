import React from 'react';
import { GetServerSideProps } from 'next';
import { resolveBySlug } from '~/lib/contentful/slug-resolver';
import { Page } from '~/types/contentful';
import DefaultLayout from '~/src/layout';
import { initializeApollo } from '~/lib/apolloClient';
import { LOCATION_INDEX } from '~/src/graphql/locations/locationIndex.query';
import { ApolloQueryResult } from '@apollo/client';
import { LocationOverview, LocationOverviewQueryResult, LocationOverviewItem } from '~/types/rmapi/location/overview';
import { EPISODE_INDEX } from '~/src/graphql/episodes/episodeIndex.query';
import { EpisodeOverviewQueryResult, EpisodeOverview } from '~/types/rmapi/episode/overview';
import Masthead from '~/src/components/molecules/Masthead';
import { RichText } from '~/src/blocks/rich-text';
import Container from '~/src/components/templates/Container';
import { DimensionOverview } from '~/types/rmapi/dimension/overview';
import LinkList from '~/src/components/molecules/LinkList';
import { LinkListItem } from '~/src/components/molecules/LinkList/LinkList';
import TriviaComponent from '~/src/components/molecules/Trivia';

type Props = {
    page: Page;
    locations: [];
    dimensions: DimensionOverview;
    episodes: [];
};

const mapDimensions = (dimensions: DimensionOverview): LinkListItem[] =>
    dimensions.sort().map((dimension) => ({ text: dimension, url: `/dimensions/${dimension}` }));
const mapLocations = (locations: LocationOverview): LinkListItem[] =>
    locations.map((location) => ({ text: location.name, url: `/locations/${location.id}` }));
const mapEpisodes = (episodes: EpisodeOverview): LinkListItem[] =>
    episodes.map((episode) => ({ text: `${episode.episode} - ${episode.name}`, url: `/episodes/${episode.id}` }));

function HomePage({ page, locations, dimensions, episodes }: Props): JSX.Element {
    return (
        <>
            <Masthead>
                <RichText document={page.content} />
            </Masthead>

            <Container>
                <LinkList title={page.microcopy['dimensions.title']} items={mapDimensions(dimensions)} />
                <LinkList title={page.microcopy['locations.title']} items={mapLocations(locations)} />
                <LinkList title={page.microcopy['episodes.title']} items={mapEpisodes(episodes)} />

                {page.trivia && (
                    <TriviaComponent titlePrefix={page.microcopy['trivia.titlePrefix']} factTitle={page.trivia.title}>
                        <RichText document={page.trivia.content} />
                    </TriviaComponent>
                )}
            </Container>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const page = await resolveBySlug('/');
    const apolloClient = initializeApollo();

    //TODO: Abstract and put data behind caching layer
    let nextLocationPage: LocationOverviewQueryResult['locations']['info']['next'] = 1;
    let locations: LocationOverview = [];

    // Keep querying server until there is no next page to build index
    while (nextLocationPage) {
        const { data: locationOverview }: ApolloQueryResult<LocationOverviewQueryResult> = await apolloClient.query<
            LocationOverviewQueryResult
        >({
            query: LOCATION_INDEX,
            variables: { page: nextLocationPage },
        });
        const results = locationOverview?.locations.results;

        locations = results ? [...locations, ...results] : locations;
        nextLocationPage = locationOverview?.locations.info.next;
    }

    // Determine unique dimensions based on location data
    const dimensions: DimensionOverview = [
        ...new Set(locations.map((location: LocationOverviewItem) => location.dimension)),
    ];

    //TODO: Abstract and put data behind caching layer
    let nextEpisodePage: EpisodeOverviewQueryResult['episodes']['info']['next'] = 1;
    let episodes: EpisodeOverview = [];

    // Keep querying server until there is no next page to build index
    while (nextEpisodePage) {
        const { data: EpisodeOverview }: ApolloQueryResult<EpisodeOverviewQueryResult> = await apolloClient.query<
            EpisodeOverviewQueryResult
        >({
            query: EPISODE_INDEX,
            variables: { page: nextEpisodePage },
        });
        const results = EpisodeOverview?.episodes.results;

        episodes = results ? [...episodes, ...results] : episodes;
        nextEpisodePage = EpisodeOverview?.episodes.info.next;
    }

    return {
        props: {
            page,
            locations,
            dimensions,
            episodes,
        },
    };
};

HomePage.Layout = DefaultLayout;

export default HomePage;
