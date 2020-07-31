import gql from 'graphql-tag';

export const EPISODE_INDEX = gql`
    query episodeIndex($page: Int) {
        episodes(page: $page) {
            results {
                id
                name
                episode
            },
            info {
                next
            }
        }
    }
`;