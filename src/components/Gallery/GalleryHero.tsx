import * as React from "react";
import classes from "./styled.module.scss";

export interface GalleryHeroProps {}

export const GalleryHero: React.FunctionComponent<GalleryHeroProps> = () => {
    return (
        <div className={classes.GalleryHero}>
            <div className="col-12 centered collapse-mobile">
                <h1>Gallery</h1>
            </div>
        </div>
    );
};
