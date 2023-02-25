import * as React from "react";
import { ReviewsItem } from "./ReviewsItem";
import classes from "./styled.module.scss";

export interface ReviewsProps {}

export const Reviews: React.FunctionComponent<ReviewsProps> = () => {
    return (
        <div className="col-12 centered collapse-mobile">
            <div className={classes.Reviews}>
                <ReviewsItem />
                <ReviewsItem />
                <ReviewsItem />
                <ReviewsItem />
            </div>
        </div>
    );
};
