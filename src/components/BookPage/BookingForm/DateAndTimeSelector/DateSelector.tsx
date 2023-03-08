import * as React from "react";
import { Calendar } from "@/assets/icons";
import { TextField } from "../TextField";
import { DayPicker } from "react-day-picker";
import { Popover } from "@nextui-org/react";
import { addMonths, startOfMonth, formatRelative } from "date-fns";
import { getDisabledMondaysToThursdays } from "./get-static-diabled-days";
import { FIELDS } from "../constant";
import { useField } from "formik";

export interface DateSelectorProps {}

export const DateSelector: React.FunctionComponent<DateSelectorProps> = () => {
    const [field, _, { setValue }] = useField(FIELDS.booking_date);

    const [selected, setSelected] = React.useState<Date>();
    console.log();
    // need to check the data from backend and disable the days that are already booked if all times are booked

    const disabledDays = [
        ...getDisabledMondaysToThursdays(),
        // disable previous days and today
        { from: startOfMonth(new Date()), to: new Date() },
        // disabling mon to thurs
    ];

    // get current year
    const date = new Date();
    const fromYear = date.getFullYear();
    const toYear = fromYear + 1;
    // det current month
    const fromMonth = date;
    const toMonth = addMonths(date, 2);

    const handleSelect = (date?: Date) => {
        setSelected(date);
        const formatDate = date?.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
        setValue(formatDate, true);
        const timeElement = document.getElementById("date-trigger");
        // click on date element to open dropdown
        timeElement?.click();
    };

    return (
        <Popover>
            <Popover.Trigger>
                <TextField label="" placeholder="DD / MM / YYYY" contentLeft={<Calendar />} value={field.value} aria-labelledby="date" aria-label="date" id="date-trigger" />
            </Popover.Trigger>

            <Popover.Content aria-label="Select Time" css={{ borderRadius: "8px", boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)", border: "1px solid #EAECF0" }}>
                <div className="DayPicker">
                    <DayPicker mode="single" disabled={disabledDays} fromYear={fromYear} toYear={toYear} fromMonth={fromMonth} toMonth={toMonth} selected={selected} onSelect={handleSelect} weekStartsOn={1} />
                </div>
            </Popover.Content>
        </Popover>
    );
};
