import { gql } from "graphql-request";

export const GALLERY_GQL = gql`
    query Galleries {
        galleries {
            id
            entry {
                id
                url
            }
            alt
        }
    }
`;
