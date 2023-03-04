import * as React from "react";
import Image from "next/image";
import classes from "./HeroSection.module.scss";
import Link from "next/link";
import { UI_ROUTES } from "@/constant";

export interface HeroSectionProps {}

export const HeroSection: React.FunctionComponent<HeroSectionProps> = () => {
    return (
        <div className={classes.HeroSection}>
            <div className={classes.HeroSectionImage}>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hero.png" alt="hero image" />
            </div>

            <div className={classes.HeroTexts}>
                <h1>
                    Your favourite Dublin <span>Photographer</span>
                </h1>
                <p>Book your photoshoots with us.</p>
                <div className={classes.CTA}>
                    <Link href={UI_ROUTES.BOOK} className={"btn btn-primary"}>
                        Book Now
                    </Link>
                    <Link href={UI_ROUTES.GALLERY} className={"btn btn-secondary"}>
                        View Gallery
                    </Link>
                </div>
            </div>
        </div>
    );
};
