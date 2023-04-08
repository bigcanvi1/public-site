/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import classes from "./styled.module.scss";

export interface GalleryImagesProps {
    galleries: Array<{
        id: string;
        entry: {
            id: string;
            url: string;
        };
        alt: string;
    }>;

    columnsCountBreakPoints?: {
        [key: number]: number;
    };

    gutter?: string;
}

export const GalleryImages: React.FunctionComponent<GalleryImagesProps> = ({ galleries, columnsCountBreakPoints, gutter }) => {
    return (
        <div className={classes.MansoryLayout}>
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints ?? { 350: 1, 500: 2, 650: 2, 900: 4 }}>
                <Masonry gutter={gutter ?? "30px"}>
                    {galleries.map((gallery) => (
                        <div key={gallery.id} className={classes.MasonryItem}>
                            <img src={gallery.entry?.url} alt={gallery.alt} />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};
