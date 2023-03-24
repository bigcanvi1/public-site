import { gql } from "graphql-request";

export const REVIEWS_GQL = gql`
    query Reviews {
        reviews {
            id
            quote
            author
        }
    }
`;
