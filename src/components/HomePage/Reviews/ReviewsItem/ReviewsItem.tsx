import * as React from "react";
import classes from "./styled.module.scss";

export interface ReviewsItemProps {
    quote: string;
    author: string;
}

const STARS = [1, 2, 3, 4, 5];

export const ReviewsItem: React.FunctionComponent<ReviewsItemProps> = ({ quote, author }) => {
    return (
        <div className={classes.ReviewItem}>
            {/* check for rating > 5 */}
            <div className={classes.ReviewItem__Stars}>
                {STARS.map((star, index) => {
                    return (
                        <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg" key={star}>
                            <path d="M16.9679 3.57477L21.097 11.9399L30.3307 13.2896L23.6492 19.7973L25.2261 28.991L16.9679 24.648L8.70959 28.991L10.2864 19.7973L3.60498 13.2896L12.8387 11.9399L16.9679 3.57477Z" fill="#E8B979" />
                        </svg>
                    );
                })}
            </div>
            <p className={classes.ReviewItem__Text}>{quote}</p>
            <div className={classes.ReviewItem__Author}>{author}</div>
        </div>
    );
};
