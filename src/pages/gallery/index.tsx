import { Gallery, GalleryProps } from "@/components";
import { graphcms } from "@/constant";
import { GALLERY_PAGE_GQL, CONTACT_GQL } from "@/utils";

export async function getStaticProps() {
    const { page } = await graphcms.request<{
        page: {
            edges: {
                node: Array<GalleryProps["galleries"][0]>;
            }[];
        };
    }>(GALLERY_PAGE_GQL, { first: 1000, skip: 0, stage: "PUBLISHED" });

    const { contactLinks } = await graphcms.request<{
        contactLinks: Array<GalleryProps["contacts"][0]>;
    }>(CONTACT_GQL);

    return {
        props: {
            galleries: page.edges.map((edge) => edge.node),
            contacts: contactLinks,
        },
    };
}

const GalleryPage = ({ galleries, contacts }: GalleryProps) => {
    return <Gallery galleries={galleries} contacts={contacts} />;
};

export default GalleryPage;
