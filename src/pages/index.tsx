import React from 'react';
import next, { GetServerSideProps } from 'next';
import { resolveBySlug } from '~/lib/contentful/slug-resolver';
import { Page } from '~/types/contentful';
import DefaultLayout from '~/src/layout';
import { initializeApollo } from '~/lib/apolloClient';
import { CHARACTER_INDEX } from '~/src/graphql/characters/characterIndex.query';
import { LOCATION_INDEX } from '../graphql/locations/locationIndex.query';
import { useQuery, ApolloQueryResult } from '@apollo/client';
import { LocationOverview, LocationOverviewQueryResult, LocationOverviewItem } from '~/types/rmapi/location/overview';
import { EPISODE_INDEX } from '../graphql/episodes/episodeIndex.query';
import { EpisodeOverviewQueryResult, EpisodeOverview } from '~/types/rmapi/episode/overview';

type Props = {
    page: Page;
    characters: unknown;
};

function HomePage({ page, characters }: Props): JSX.Element {
    return (
        <>
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
        const { data: locationOverview }: ApolloQueryResult<LocationOverviewQueryResult> = await apolloClient.query<LocationOverviewQueryResult>({
            query: LOCATION_INDEX,
            variables: { page: nextLocationPage }
        })
        const results = locationOverview?.locations.results;

        locations = results ? [...locations, ...results] : locations;
        nextLocationPage = locationOverview?.locations.info.next
    }

    // Determine unique dimensions based on location data
    const dimensions = [...new Set(locations.map(
        (location: LocationOverviewItem) => location.dimension
    ))];

    //TODO: Abstract and put data behind caching layer
    let nextEpisodePage: EpisodeOverviewQueryResult['episodes']['info']['next'] = 1;
    let episodes: EpisodeOverview = [];

    // Keep querying server until there is no next page to build index
    while (nextEpisodePage) {
        const { data: EpisodeOverview }: ApolloQueryResult<EpisodeOverviewQueryResult> = await apolloClient.query<EpisodeOverviewQueryResult>({
            query: EPISODE_INDEX,
            variables: { page: nextEpisodePage }
        })
        const results = EpisodeOverview?.episodes.results;

        episodes = results ? [...episodes, ...results] : episodes;
        nextEpisodePage = EpisodeOverview?.episodes.info.next
    }

    return {
        props: {
            page,
            locations,
            dimensions,
            episodes
        },
    };
};

HomePage.Layout = DefaultLayout;

export default HomePage;
