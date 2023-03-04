import * as React from "react";
import classes from "./styled.module.scss";
import { Spacer } from "@nextui-org/react";
import { TextField } from "./TextField";
import { DateSelector } from "./DateSelector";
import { Pricing } from "./Pricing";

export interface BookingFormProps {}

export const BookingForm: React.FunctionComponent<BookingFormProps> = () => {
    return (
        <>
            <div className={classes.FormWrapper}>
                <div className={classes.Flexable}>
                    <TextField label="First Name" placeholder="First Name" />
                    <TextField label="Last Name" placeholder="Last Name" />
                </div>

                <Spacer y={1.4} />
                <TextField label="Email" placeholder="Email" type="mail" />
                <Spacer y={2.1} />
                <Pricing />
                <Spacer y={1.4} />
                <DateSelector />
            </div>
            <div className={classes.Buttons}>
                <button className="btn btn-primary">Book Now</button>
                <button className="btn btn-secondary">Cancel</button>
            </div>
        </>
    );
};
