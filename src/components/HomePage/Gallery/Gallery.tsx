/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import classes from "./styled.module.scss";
import isEmpty from "lodash/isEmpty";
import { GalleryImages, GalleryImagesProps } from "../../Gallery/GalleryImages";
import Link from "next/link";
import { UI_ROUTES } from "@/constant";
import { useMediaQuery } from "@/hooks";

export interface GalleryProps extends GalleryImagesProps {}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ galleries }) => {
    const isMobile = useMediaQuery("(max-width: 600px)");

    if (isEmpty(galleries)) return null;

    const max = isMobile ? 4 : 12;

    // filter falsey and max of 12 images
    const filteredGalleries = galleries.filter((gallery) => gallery.entry).slice(0, max);

    return (
        <div className="col-12 centered collapse-mobile">
            <div className={classes.Gallery}>
                <GalleryImages galleries={filteredGalleries} />
                <div className={classes.CTA}>
                    <Link href={UI_ROUTES.GALLERY} className="btn btn-secondary">
                        View Gallery
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
