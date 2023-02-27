import * as React from "react";
import classes from "./styled.module.scss";

export interface PageHeroProps {
    title: string;
    className?: string;
}

export const PageHero: React.FunctionComponent<PageHeroProps> = ({ title, className }) => {
    return (
        <div className={`${classes.PageHero} ${className || ""}`}>
            <div className="col-12 centered collapse-mobile">
                <h1>{title}</h1>
            </div>
        </div>
    );
};
