import * as React from "react";
import classes from "./styled.module.scss";

export interface ReviewsItemProps {}
const rating = (stars: number) => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);

export const ReviewsItem: React.FunctionComponent<ReviewsItemProps> = () => {
    return (
        <div className={classes.ReviewItem}>
            {/* check for rating > 5 */}
            <div className={classes.ReviewItem__Stars}>{rating(5)}</div>
            <p className={classes.ReviewItem__Text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quis voluptates maxime eligendi vel pariatur minus. Ratione cumque nemo dolores velit enim aut. Hic earum fugiat aut eligendi exercitationem aliquid.</p>
            <div className={classes.ReviewItem__Author}>Lorem Ipsum</div>
        </div>
    );
};
