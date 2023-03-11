import * as React from "react";
import classes from "../styled.module.scss";
import { useFormikContext } from "formik";

export interface ButtonsProps {}

export const Buttons: React.FunctionComponent<ButtonsProps> = () => {
    const { isValid, isSubmitting } = useFormikContext();

    const disableSubmit = !isValid || isSubmitting;
    const disableCancel = isSubmitting;

    return (
        <div className={classes.Buttons}>
            <button className="btn btn-primary" type="submit" disabled={disableSubmit}>
                {isSubmitting ? "Booking.." : "Book Now"}
            </button>

            <button className="btn btn-secondary" type="reset" disabled={disableCancel}>
                Clear
            </button>
        </div>
    );
};
