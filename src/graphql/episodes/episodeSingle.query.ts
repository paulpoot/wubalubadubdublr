import gql from 'graphql-tag';

export const EPISODE_SINGLE = gql`
    query episodeSingle($id: ID) {
        episode(id: $id) {
            name
            episode
            characters {
                id
                name
                image
            }
        }
    }
`;
