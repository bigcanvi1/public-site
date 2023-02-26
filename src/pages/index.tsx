import { HomePage, HomePageProps } from "@/components";
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

const Homepage = ({ galleries }: HomePageProps) => {
    return <HomePage galleries={galleries} />;
};

export default Homepage;
