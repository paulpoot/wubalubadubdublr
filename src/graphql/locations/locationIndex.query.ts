import gql from 'graphql-tag';

export const LOCATION_INDEX = gql`
    query locationIndex($page: Int) {
        locations(page: $page) {
            results {
                id
                name
                dimension
            }
            info {
                next
            }
        }
    }
`;
