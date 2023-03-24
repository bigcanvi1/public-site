import { gql } from "graphql-request";

export const GALLERY_GQL = gql`
    query Galleries {
        homepageGalleriesConnection {
            edges {
                node {
                    id
                    entry {
                        id
                        url
                    }
                }
            }
        }
    }
`;

export const GALLERY_PAGE_GQL = gql`
    query Galleries($first: Int, $skip: Int, $stage: Stage!, $where: GalleryWhereInput, $orderBy: GalleryOrderByInput) {
        page: galleriesConnection(first: $first, skip: $skip, stage: $stage, where: $where, orderBy: $orderBy) {
            edges {
                node {
                    id
                    alt
                    createdAt
                    entry {
                        id
                        fileName
                        url
                    }
                }
            }
            aggregate {
                count
            }
        }
    }
`;
