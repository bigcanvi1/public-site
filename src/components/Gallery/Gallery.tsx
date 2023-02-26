import * as React from "react";
import { GalleryImages, GalleryImagesProps } from "./GalleryImages";
import { GalleryHero } from "./GalleryHero";
import { Layout } from "../Layout";

export interface GalleryProps extends GalleryImagesProps {}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ galleries }) => {
    return (
        <Layout>
            <GalleryHero />
            <div className="col-12 centered collapse-mobile">
                <GalleryImages galleries={galleries} />
            </div>
        </Layout>
    );
};
