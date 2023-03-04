import * as React from "react";
import { GalleryImages, GalleryImagesProps } from "./GalleryImages";

import { Layout, LayoutProps } from "../Layout";
import { PageHero } from "../PageHero";

export interface GalleryProps extends GalleryImagesProps, LayoutProps {}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ galleries, contacts }) => {
    return (
        <Layout contacts={contacts}>
            <PageHero title="Gallery" />
            <div className="col-12 centered collapse-mobile">
                <GalleryImages galleries={galleries} />
            </div>
        </Layout>
    );
};
