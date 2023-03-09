import * as yup from "yup";
import { PLANS } from "./Pricing/constant";
import { IBooking } from "@/types";

const FIELDS = {
    booking_time: "booking_time",
    booking_date: "booking_date",
    first_name: "first_name",
    last_name: "last_name",
    email: "email",
    plan: "plan",
} as const;

const SCHEMA = yup.object().shape({
    [FIELDS.booking_time]: yup.string().required("Please select a time"),
    [FIELDS.booking_date]: yup.string().required("Please select a date"),
    [FIELDS.first_name]: yup.string().required("Please enter your first name"),
    [FIELDS.last_name]: yup.string().required("Please enter your last name"),
    [FIELDS.email]: yup.string().email("Please enter a valid email").required("Please enter your email"),
    [FIELDS.plan]: yup.string().required("Please select a plan"),
});

const INITIAL_VALUES: IBooking = {
    [FIELDS.booking_time]: "",
    [FIELDS.booking_date]: "",
    [FIELDS.first_name]: "",
    [FIELDS.last_name]: "",
    [FIELDS.email]: "",
    [FIELDS.plan]: PLANS.BASIC,
};

export { FIELDS, SCHEMA, INITIAL_VALUES };
