import { Gallery, GalleryProps } from "@/components";
import { graphcms } from "@/constant";
import { GALLERY_GQL, CONTACT_GQL } from "@/utils";

export async function getStaticProps() {
    const { galleries } = await graphcms.request(GALLERY_GQL);
    const { contactLinks } = await graphcms.request(CONTACT_GQL);

    return {
        props: {
            galleries,
            contacts: contactLinks,
        },
    };
}

const GalleryPage = ({ galleries, contacts }: GalleryProps) => {
    return <Gallery galleries={galleries} contacts={contacts} />;
};

export default GalleryPage;
