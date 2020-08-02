import gql from 'graphql-tag';

export const DIMENSION_SINGLE = gql`
    query dimensionSingle($dimension: String, $page: Int) {
        locations(filter: { dimension: $dimension }, page: $page) {
            results {
                id
                name
                dimension
                residents {
                    id
                    name
                    image
                }
            }
            info {
                next
            }
        }
    }
`;
