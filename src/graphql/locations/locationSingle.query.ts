import gql from 'graphql-tag';

export const LOCATION_SINGLE = gql`
    query locationSingle($id: ID) {
        location(id: $id) {
            name
            dimension
            residents {
                name
                image
            }
        }
    }
`;
