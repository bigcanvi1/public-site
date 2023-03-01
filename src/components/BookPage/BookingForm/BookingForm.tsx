import * as React from "react";
import classes from "./styled.module.scss";
import { Input, Spacer } from "@nextui-org/react";
import { TextField } from "./TextField";

export interface BookingFormProps {}

export const BookingForm: React.FunctionComponent<BookingFormProps> = () => {
    return (
        <div className={classes.BookingForm}>
            <div className={classes.FormWrapper}>
                <TextField />
                <Spacer y={2.5} />
                <TextField />
                <Spacer y={2.5} />
                <TextField />
            </div>
            <div className={classes.Buttons}>
                <button className="btn btn-primary">Book</button>
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </div>
    );
};
