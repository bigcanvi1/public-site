import { AboutPage, AboutPageProps } from "@/components";
import { graphcms } from "@/constant";
import { CONTACT_GQL } from "@/utils";

export async function getStaticProps() {
    const { contactLinks } = await graphcms.request(CONTACT_GQL);

    return {
        props: {
            contacts: contactLinks,
        },
    };
}

const About = ({ contacts }: AboutPageProps) => {
    return <AboutPage contacts={contacts} />;
};

export default About;
