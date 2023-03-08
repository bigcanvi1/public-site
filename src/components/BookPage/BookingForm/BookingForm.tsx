import * as React from "react";
import classes from "./styled.module.scss";
import { Spacer } from "@nextui-org/react";
import { TextField } from "./TextField";
import { DateAndTimeSelector } from "./DateAndTimeSelector";
import { Pricing } from "./Pricing";
import { Formik, Form } from "formik";
import { FIELDS, SCHEMA, INITIAL_VALUES } from "./constant";

export interface BookingFormProps {}

export const BookingForm: React.FunctionComponent<BookingFormProps> = () => {
    const handleSubmit = () => {};

    return (
        <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES} validationSchema={SCHEMA} validateOnMount={false} validateOnBlur>
            <Form>
                <div className={classes.FormWrapper}>
                    <div className={classes.Flexable}>
                        <TextField label="First Name" placeholder="First Name" name={FIELDS.first_name} />
                        <TextField label="Last Name" placeholder="Last Name" name={FIELDS.last_name} />
                    </div>

                    <Spacer y={1.4} />
                    <TextField label="Email" placeholder="Email" type="mail" name={FIELDS.email} />
                    <Spacer y={2.1} />
                    <Pricing />
                    <Spacer y={1.4} />
                    <DateAndTimeSelector />
                </div>
                <div className={classes.Buttons}>
                    <button className="btn btn-primary" type="submit">
                        Book Now
                    </button>
                    <button className="btn btn-secondary" type="reset">
                        Cancel
                    </button>
                </div>
            </Form>
        </Formik>
    );
};
