import * as React from "react";
import { Layout } from "../Layout";
import { HeroSection } from "./HeroSection";

export const HomePage: React.FunctionComponent = () => {
    return (
        <Layout>
            <HeroSection />
        </Layout>
    );
};
