/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import classes from "./styled.module.scss";
import isEmpty from "lodash/isEmpty";
import { GalleryImages, GalleryImagesProps } from "../../Gallery/GalleryImages";

export interface GalleryProps extends GalleryImagesProps {}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ galleries }) => {
    if (isEmpty(galleries)) return null;
    // filter falsey and max of 12 images
    const filteredGalleries = galleries.filter((gallery) => gallery.entry).slice(0, 12);

    return (
        <div className="col-12 centered collapse-mobile">
            {/* <div className={classes.Gallery}> */}
            <GalleryImages galleries={filteredGalleries} />
            <div className={classes.CTA}>
                <button className="btn btn-secondary">View Gallery</button>
            </div>
            {/* </div> */}
        </div>
    );
};
