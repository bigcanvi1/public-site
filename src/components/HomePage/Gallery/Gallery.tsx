import * as React from "react";
import classes from "./styled.module.scss";
export interface GalleryProps {}

export const Gallery: React.FunctionComponent<GalleryProps> = () => {
    return (
        <div className="col-12 centered collapse-mobile">
            <div className={classes.Gallery}>
                <div className={classes.MansoryLayout}>
                    <h3>WIP- Mansory Layout</h3>
                </div>
                <div className={classes.CTA}>
                    <button className="btn btn-secondary">View Gallery</button>
                </div>
            </div>
        </div>
    );
};
