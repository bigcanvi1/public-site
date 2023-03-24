import * as React from "react";
import classes from "./styled.module.scss";

export interface GalleryHeroProps {}

export const GalleryHero: React.FunctionComponent<GalleryHeroProps> = () => {
    return (
        <div className="col-12 collapse-mobile centered">
            <div className={classes.Hero}>
                <h1>Gallery</h1>
            </div>
        </div>
    );
};
