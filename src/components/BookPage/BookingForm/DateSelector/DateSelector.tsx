import * as React from "react";
import classes from "../styled.module.scss";
import { TextField } from "../TextField";
import { Clock, Calendar } from "@/assets/icons";
import { TimeSelector } from "./TimeSelector";

export interface DateSelectorProps {}

export const DateSelector: React.FunctionComponent<DateSelectorProps> = () => {
    // must select day before time
    return (
        <div className={classes.Flexable}>
            <TextField label="" placeholder="DD / MM / YYYY" contentLeft={<Calendar />} value="" aria-labelledby="date" aria-label="date" />

            <TimeSelector />
        </div>
    );
};
