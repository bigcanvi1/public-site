import * as React from "react";
import { Layout } from "../Layout";
import { PageHero } from "../PageHero";
import classes from "./styled.module.scss";
import { BookingForm } from "./BookingForm";
import { Contact, ContactProps } from "./Contact";

export interface BookPageProps extends ContactProps {}

export const BookPage: React.FunctionComponent<BookPageProps> = ({ contacts }) => {
    return (
        <Layout>
            <div className={classes.BookWrapper}>
                <PageHero title="Booking" className={classes.BookHero} />

                <div className={classes.BookHeroImage}>
                    {/*  eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/book-hero.png" alt="Book" />
                </div>
                <div className="col-12 centered collapse-mobile">
                    <div className={classes.StyledWrapper}>
                        <BookingForm />
                        <Contact contacts={contacts} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
