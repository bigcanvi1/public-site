import * as React from "react";
import classes from "./styled.module.scss";

export interface SuccessStateProps {
    toggleSuccessState: () => void;
}

export const SuccessState: React.FunctionComponent<SuccessStateProps> = ({ toggleSuccessState }) => {
    return (
        <div className="col-6 centered collapse-mobile">
            <div className={classes.ImgWrapper}>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/book-success.png" alt="success" />
            </div>
            <p className={classes.Title}>Thank you for booking with us!</p>
            <p className={classes.Subtitle}>You will receive an email from us.</p>

            <div className={classes.VerifyWrapper}>
                <p>Kindly Verify your details</p>
                <p>Make Payment</p>
            </div>

            <button type="button" onClick={toggleSuccessState} className={["btn btn-secondary", classes.Button].join(" ")}>
                Refresh
            </button>
        </div>
    );
};
