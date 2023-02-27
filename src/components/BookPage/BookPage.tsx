import * as React from "react";
import { Layout } from "../Layout";
import { PageHero } from "../PageHero";
import classes from "./styled.module.scss";
import { BookingForm } from "./BookingForm";

export interface BookPageProps {}

export const BookPage: React.FunctionComponent<BookPageProps> = () => {
    return (
        <Layout>
            <PageHero title="Booking" className={classes.BookHero} />

            <div className={classes.BookHeroImage}>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/book-hero.png" alt="Book" />
            </div>
            <div className="col-12 centered collapse-mobile">
                <BookingForm />
            </div>
        </Layout>
    );
};
