import * as React from "react";
import { ReviewsItem } from "./ReviewsItem";
import classes from "./styled.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export interface ReviewsProps {
    reviews: Array<{ id: string; quote: string; author: string }>;
}

export const Reviews: React.FunctionComponent<ReviewsProps> = ({ reviews }) => {
    return (
        <div className="col-12 centered collapse-mobile reviews overflow-visible">
            <div className={classes.Wrapper}>
                <h2 className={classes.Title}>Reviews</h2>

                <div className={classes.Reviews}>
                    {/* <Swiper
                slidesPerView={"auto"}
                spaceBetween={32}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className={classes.Reviews}
                centeredSlides={true}
            > */}

                    {reviews.map(({ id, quote, author }) => {
                        return (
                            // <SwiperSlide key={id}>
                            <ReviewsItem quote={quote} author={author} key={id} />
                            // </SwiperSlide>
                        );
                    })}

                    {/* </Swiper> */}
                </div>
            </div>
        </div>
    );
};
