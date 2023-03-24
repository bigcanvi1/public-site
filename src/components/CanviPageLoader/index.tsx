import * as React from "react";
import classes from "./styled.module.scss";
import { Logo } from "@/assets/icons";

export interface CanviPageLoaderProps {}

export const CanviPageLoader: React.FunctionComponent<CanviPageLoaderProps> = () => {
    return (
        <div className={classes.Loader}>
            <div className={classes.LogoContainer}>
                <Logo />
            </div>
        </div>
    );
};
