import { AboutPage, AboutPageProps } from "@/components";
import { graphcms } from "@/constant";
import { CONTACT_GQL, ABOUT_GQL } from "@/utils";

export async function getStaticProps() {
    const { contactLinks } = await graphcms.request(CONTACT_GQL);
    const { aboutContents } = await graphcms.request(ABOUT_GQL);

    return {
        props: {
            contacts: contactLinks,
            imgUrl: aboutContents[0].image.url,
        },
    };
}

const About = ({ contacts, imgUrl }: AboutPageProps) => {
    return <AboutPage contacts={contacts} imgUrl={imgUrl} />;
};

export default About;
