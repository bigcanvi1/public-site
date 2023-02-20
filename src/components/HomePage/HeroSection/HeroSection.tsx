import * as React from "react";
import Image from "next/image";
import classes from "./HeroSection.module.scss";

export interface HeroSectionProps {}

export const HeroSection: React.FunctionComponent<HeroSectionProps> = () => {
    return (
        <div className={classes.HeroSection}>
            <div className="col-12 centered collapse-mobile">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero.png" alt="hero image" className={classes.HeroSectionImage} />
            </div>

            <div className={`col-7 centered collapse-mobile ${classes.HeroTexts}`}>
                <h1>
                    Your favourite Dublin <span>Photographer</span>
                </h1>
                <p>Book your photoshoots with us.</p>
            </div>
            <div className={classes.CTA}>
                <button className={"btn btn-primary"}>Book Now</button>
            </div>
        </div>
    );
};
