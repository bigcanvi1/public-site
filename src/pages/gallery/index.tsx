import { Gallery, GalleryProps } from "@/components";
import { graphcms } from "@/constant";
import { GALLERY_GQL } from "@/utils";

export async function getStaticProps() {
    const { galleries } = await graphcms.request(GALLERY_GQL);

    return {
        props: {
            galleries,
        },
    };
}

const GalleryPage = ({ galleries }: GalleryProps) => {
    return <Gallery galleries={galleries} />;
};

export default GalleryPage;
