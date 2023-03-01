import { gql } from "graphql-request";

export const GALLERY_GQL = gql`
    query Galleries {
        galleries {
            id
            entry {
                id
                url(transformation: { image: { resize: { fit: clip, width: 400 } } })
            }
            alt
        }
    }
`;
