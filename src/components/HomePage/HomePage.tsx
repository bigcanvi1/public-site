import * as React from "react";
import { Layout, LayoutProps } from "../Layout";
import { HeroSection } from "./HeroSection";
import { Steps } from "./Steps";
import { Reviews, ReviewsProps } from "./Reviews";
import { GalleryProps } from "./Gallery";
import dynamic from "next/dynamic";
const Gallery = dynamic(() => import("./Gallery/Gallery"), { ssr: false });

export interface HomePageProps extends GalleryProps, LayoutProps, ReviewsProps {}

export const HomePage: React.FunctionComponent<HomePageProps> = ({ galleries, contacts, reviews }) => {
    return (
        <Layout contacts={contacts}>
            <HeroSection />
            <Steps />
            <Gallery galleries={galleries} />
            <Reviews reviews={reviews} />
        </Layout>
    );
};
