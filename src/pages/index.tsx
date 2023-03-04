import { HomePage, HomePageProps } from "@/components";
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

const Homepage = ({ galleries, contacts }: HomePageProps) => {
    return <HomePage galleries={galleries} contacts={contacts} />;
};

export default Homepage;
