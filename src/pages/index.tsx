import { HomePage, HomePageProps, GalleryProps } from "@/components";
import { graphcms } from "@/constant";
import { GALLERY_GQL, CONTACT_GQL, REVIEWS_GQL } from "@/utils";

export async function getStaticProps() {
    const { homepageGalleriesConnection } = await graphcms.request<{
        homepageGalleriesConnection: {
            edges: {
                node: Array<GalleryProps["galleries"][0]>;
            }[];
        };
    }>(GALLERY_GQL, { first: 1000, skip: 0, stage: "PUBLISHED" });
    const { contactLinks } = await graphcms.request<{
        contactLinks: HomePageProps["contacts"];
    }>(CONTACT_GQL);
    const { reviews } = await graphcms.request<{ reviews: HomePageProps["reviews"] }>(REVIEWS_GQL);

    return {
        props: {
            galleries: homepageGalleriesConnection.edges.map((edge) => edge.node),
            contacts: contactLinks,
            reviews,
        },
    };
}

const Homepage = ({ galleries, contacts, reviews }: HomePageProps) => {
    return <HomePage galleries={galleries} contacts={contacts} reviews={reviews} />;
};

export default Homepage;
