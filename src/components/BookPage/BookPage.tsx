import * as React from "react";
import { Layout, LayoutProps } from "../Layout";
import { PageHero } from "../PageHero";
import classes from "./styled.module.scss";
import { BookingForm } from "./BookingForm";

export interface BookPageProps extends LayoutProps {}

export const BookPage: React.FunctionComponent<BookPageProps> = ({ contacts }) => {
    return (
        <Layout contacts={contacts}>
            <div className={classes.BookWrapper}>
                <PageHero title="Booking" />

                <div className="col-6 centered collapse-mobile">
                    <BookingForm />
                </div>
            </div>
        </Layout>
    );
};
