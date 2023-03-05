import * as React from "react";
import classes from "../styled.module.scss";
import { TimeSelector } from "./TimeSelector";
import { DateSelector } from "./DateSelector";

export interface DateAndTimeSelectorProps {}

export const DateAndTimeSelector: React.FunctionComponent<DateAndTimeSelectorProps> = () => {
    // must select day before time
    return (
        <div className={classes.Flexable}>
            <DateSelector />
            <TimeSelector />
        </div>
    );
};
