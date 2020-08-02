import gql from 'graphql-tag';

export const CHARACTER_SINGLE = gql`
    query characterSingle($id: ID) {
        character(id: $id) {
            name
            status
            species
            type
            gender
            origin {
                id
                name
                dimension
            }
            location {
                id
                name
                dimension
            }
            image
            episode {
                id
                name
                episode
            }
        }
    }
`;
