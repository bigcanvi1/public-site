import * as React from "react";
import { Layout, LayoutProps } from "../Layout";
import { PageHero } from "../PageHero";
import classes from "./styled.module.scss";
import { BookingForm } from "./BookingForm";
import { SuccessState } from "./SuccessState";
export interface BookPageProps extends LayoutProps {}

export const BookPage: React.FunctionComponent<BookPageProps> = ({ contacts }) => {
    const [isSuccess, setIsSuccess] = React.useState(false);
    const toggleSuccess = () => setIsSuccess((prevState) => !prevState);

    return (
        <Layout contacts={contacts}>
            <div className={classes.BookWrapper}>
                <PageHero title="Booking" />

                <div className={classes.Wrapper}>
                    <div className="col-6 centered collapse-mobile">{isSuccess ? <SuccessState toggleSuccessState={toggleSuccess} /> : <BookingForm toggleSuccessState={toggleSuccess} />}</div>
                </div>
            </div>
        </Layout>
    );
};
