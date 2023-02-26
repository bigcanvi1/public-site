/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import classes from "./styled.module.scss";
import isEmpty from "lodash/isEmpty";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export interface GalleryProps {
    galleries: Array<{
        id: string;
        entry: {
            id: string;
            url: string;
        };
        alt: string;
    }>;
}

export const Gallery: React.FunctionComponent<GalleryProps> = ({ galleries }) => {
    if (isEmpty(galleries)) return null;
    // filter falsey and max of 12 images
    const filteredGalleries = galleries.filter((gallery) => gallery.entry).slice(0, 12);

    return (
        <div className="col-12 centered collapse-mobile">
            {/* <div className={classes.Gallery}> */}
            <div className={classes.MansoryLayout}>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 650: 3, 900: 4 }}>
                    <Masonry gutter="30px">
                        {filteredGalleries.map((gallery) => (
                            <div key={gallery.id} className={classes.MasonryItem}>
                                <img src={gallery.entry?.url} alt={gallery.alt} />
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <div className={classes.CTA}>
                <button className="btn btn-secondary">View Gallery</button>
            </div>
            {/* </div> */}
        </div>
    );
};
