import { HomePage, HomePageProps, GalleryProps } from "@/components";
import { graphcms } from "@/constant";
import { GALLERY_GQL, CONTACT_GQL } from "@/utils";

export async function getStaticProps() {
    const { page } = await graphcms.request(GALLERY_GQL, { first: 1000, skip: 0, stage: "PUBLISHED" });
    const { contactLinks } = await graphcms.request(CONTACT_GQL);
    return {
        props: {
            galleries: page.edges.map((edge: { node: GalleryProps["galleries"][0] }) => edge.node),
            contacts: contactLinks,
        },
    };
}

const Homepage = ({ galleries, contacts }: HomePageProps) => {
    return <HomePage galleries={galleries} contacts={contacts} />;
};

export default Homepage;
