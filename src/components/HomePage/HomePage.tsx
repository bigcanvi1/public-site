import * as React from "react";
import { Layout, LayoutProps } from "../Layout";
import { HeroSection } from "./HeroSection";
import { Steps } from "./Steps";
import { Reviews } from "./Reviews";
import { Gallery, GalleryProps } from "./Gallery";

export interface HomePageProps extends GalleryProps, LayoutProps {}

export const HomePage: React.FunctionComponent<HomePageProps> = ({ galleries, contacts }) => {
    return (
        <Layout contacts={contacts}>
            <HeroSection />
            <Steps />
            <Gallery galleries={galleries} />
            <Reviews />
        </Layout>
    );
};
