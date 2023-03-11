import { gql } from "graphql-request";

export const ABOUT_GQL = gql`
    query About {
        aboutContents(where: { id: "clf3s9fqccqvr0bl2akepyiwf" }) {
            id
            image {
                url(transformation: { image: { resize: { fit: clip, width: 400 } } })
                id
            }
        }
    }
`;
