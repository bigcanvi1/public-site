import { Gallery, GalleryProps } from "@/components";
import { graphcms } from "@/constant";
import { GALLERY_PAGE_GQL, CONTACT_GQL } from "@/utils";

export async function getStaticProps() {
    const { page } = await graphcms.request(GALLERY_PAGE_GQL, { first: 1000, skip: 0, stage: "PUBLISHED" });
    const { contactLinks } = await graphcms.request(CONTACT_GQL);

    return {
        props: {
            galleries: page.edges.map((edge: { node: GalleryProps["galleries"][0] }) => edge.node),
            contacts: contactLinks,
        },
    };
}

const GalleryPage = ({ galleries, contacts }: GalleryProps) => {
    return <Gallery galleries={galleries} contacts={contacts} />;
};

export default GalleryPage;
