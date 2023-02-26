import * as React from "react";
import { ReviewsItem } from "./ReviewsItem";
import classes from "./styled.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export interface ReviewsProps {}

export const Reviews: React.FunctionComponent<ReviewsProps> = () => {
    return (
        <div className="col-12 centered collapse-mobile reviews">
            {/* <div className={classes.Reviews}> */}
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={100}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className={classes.Reviews}
            >
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewsItem />
                </SwiperSlide>
            </Swiper>
            {/* </div> */}
        </div>
    );
};
