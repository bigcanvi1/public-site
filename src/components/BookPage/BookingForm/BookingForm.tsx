import * as React from "react";
import classes from "./styled.module.scss";
import { Spacer } from "@nextui-org/react";
import { TextField } from "./TextField";
import { DateAndTimeSelector } from "./DateAndTimeSelector";
import { Pricing } from "./Pricing";
import { Formik, Form, FormikHelpers } from "formik";
import { FIELDS, SCHEMA, INITIAL_VALUES } from "./constant";
import { addBookingFn } from "@/utils";
import { IBooking } from "@/types";
import { Buttons } from "./Buttons";

export interface BookingFormProps {}

export const BookingForm: React.FunctionComponent<BookingFormProps> = () => {
    const handleSubmit = async (values: IBooking, actions: FormikHelpers<IBooking>) => {
        actions.setSubmitting(true);
        try {
            const res = await addBookingFn(values);
            if (res?.statusText?.toLowerCase() === "created") {
                // show success state
            }
        } catch (error) {
            // TODO: show error message
        } finally {
            actions.setSubmitting(false);
            actions.resetForm();
        }
    };

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
                <Buttons />
            </Form>
        </Formik>
    );
};
