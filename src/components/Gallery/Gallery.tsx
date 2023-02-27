import * as React from "react";
import { GalleryImages, GalleryImagesProps } from "./GalleryImages";

import { Layout } from "../Layout";
import { PageHero } from "../PageHero";

export interface GalleryProps extends GalleryImagesProps {}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ galleries }) => {
    return (
        <Layout>
            <PageHero title="Gallery" />
            <div className="col-12 centered collapse-mobile">
                <GalleryImages galleries={galleries} />
            </div>
        </Layout>
    );
};
