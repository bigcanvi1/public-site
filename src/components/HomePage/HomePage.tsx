import * as React from "react";
import { Layout } from "../Layout";
import { HeroSection } from "./HeroSection";
import { Steps } from "./Steps";
Steps;
export const HomePage: React.FunctionComponent = () => {
    return (
        <Layout>
            <HeroSection />
            <Steps />
        </Layout>
    );
};
