import * as React from "react";
import classes from "./Steps.module.scss";
import { STEPS } from "./steps-data";
import { StepItem } from "./step_item";
export interface StepsProps {}

export const Steps: React.FunctionComponent<StepsProps> = () => {
    return (
        <div className={classes.Steps}>
            <div className="col-11 centered collapse-mobile">
                <h2 className={classes.Quote}>
                    “For me, the camera is a sketch book,
                    <br /> an instrument of intuition and spontaneity.”
                </h2>
                <p className={classes.Quote__Author}>Henri Cartier-Bresson</p>
            </div>
            <div className="col-12 centered collapse-mobile">
                <div className={classes.Steps__Items}>
                    {STEPS.map((step, index) => {
                        return <StepItem key={index} Icon={step.Icon} title={step.title} description={step.description} />;
                    })}
                </div>
            </div>
        </div>
    );
};
