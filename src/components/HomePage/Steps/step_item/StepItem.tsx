import * as React from "react";
import classes from "./StepItem.module.scss";

export interface StepItemProps {
    Icon: React.FunctionComponent;
    title: string;
    description: string;
}

export const StepItem: React.FunctionComponent<StepItemProps> = ({ Icon, title, description }) => {
    return (
        <div className={classes.StepItem}>
            <Icon />
            <p className={classes.StepItem__Title}>{title}</p>
            <p className={classes.StepItem__Desc}>{description}</p>
        </div>
    );
};
