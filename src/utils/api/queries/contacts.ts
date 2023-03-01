import { gql } from "graphql-request";

export const CONTACT_GQL = gql`
    query ContactLinks {
        contactLinks {
            url
            id
            type
        }
    }
`;
