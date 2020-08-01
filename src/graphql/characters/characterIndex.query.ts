import gql from 'graphql-tag';

export const CHARACTER_INDEX = gql`
    query characterIndex {
        characters {
            results {
                id
                name
            }
        }
    }
`;
