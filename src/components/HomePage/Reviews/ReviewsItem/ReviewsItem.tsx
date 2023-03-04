import * as React from "react";
import classes from "./styled.module.scss";

export interface ReviewsItemProps {}
const rating = (stars: number) => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);

export const ReviewsItem: React.FunctionComponent<ReviewsItemProps> = () => {
    return (
        <div className={classes.ReviewItem}>
            {/* check for rating > 5 */}
            <div className={classes.ReviewItem__Stars}>{rating(5)}</div>
            <p className={classes.ReviewItem__Text}>I love this software. I&apos;m a software engineer, and I&apos;m interested in applyin.</p>
            <div className={classes.ReviewItem__Author}>Lorem Ipsum</div>
        </div>
    );
};
