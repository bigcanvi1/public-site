import * as React from "react";
import { GalleryImages, GalleryImagesProps } from "./GalleryImages";
import { GalleryHero } from "./GalleryHero";

import { Layout, LayoutProps } from "../Layout";
import { PageHero } from "../PageHero";

export interface GalleryProps extends GalleryImagesProps, LayoutProps {}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ galleries, contacts }) => {
    return (
        <Layout contacts={contacts}>
            <div
                style={{
                    backgroundColor: "#0e0f0f",
                    backgroundImage: "url(/images/gallery-footer-bg.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "105% 102%",
                }}
            >
                <GalleryHero />

                <div className="col-12 centered collapse-mobile">
                    <GalleryImages galleries={galleries} columnsCountBreakPoints={{ 350: 1, 500: 1, 650: 2, 900: 2 }} gutter={"56px"} />
                </div>
            </div>
        </Layout>
    );
};
