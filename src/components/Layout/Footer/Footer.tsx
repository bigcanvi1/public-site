import * as React from "react";
import classes from "./Footer.module.scss";
export interface FooterProps {}

export const Footer: React.FunctionComponent<FooterProps> = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={classes.Footer}>
            <div className={`col-12 centred collapse-mobile`}>
                <p>Kings Vision {year}</p>
            </div>
        </footer>
    );
};
