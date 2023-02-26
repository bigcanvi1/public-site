import * as React from "react";
import { Layout } from "../Layout";
import { HeroSection } from "./HeroSection";
import { Steps } from "./Steps";
import { Reviews } from "./Reviews";
import { Gallery, GalleryProps } from "./Gallery";

export interface HomePageProps extends GalleryProps {}

export const HomePage: React.FunctionComponent<HomePageProps> = ({ galleries }) => {
    return (
        <Layout>
            <HeroSection />
            <Steps />
            <Gallery galleries={galleries} />
            <Reviews />
        </Layout>
    );
};
