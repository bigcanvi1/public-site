import * as React from "react";
import { Layout } from "../Layout";
import { HeroSection } from "./HeroSection";
import { Steps } from "./Steps";
import { Reviews } from "./Reviews";
import { Gallery } from "./Gallery";

export const HomePage: React.FunctionComponent = () => {
    return (
        <Layout>
            <HeroSection />
            <Steps />
            <Gallery />
            <Reviews />
        </Layout>
    );
};
