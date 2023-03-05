import * as React from "react";
import { TextField } from "../TextField";
import { Clock } from "@/assets/icons";
import { Dropdown, Spacer } from "@nextui-org/react";
import isEmpty from "lodash/isEmpty";
import { ITEM_CSS, DISABLED_ITEM_CSS } from "./constant";
export interface TimeSelectorProps {}

const DISABLED_EMPTY_KEY = "disabled-empty-key";
const TIMES = {
    // every 2hrs from 5 -9pm with 1hr break
    FRI: ["5:00 pm", "7:00 pm", "9:00 pm"],
    // every 2hrs from 9am - 8pm with 1hr break
    SAT_SUN: ["9:00 am", "11:00 am", "1:00 pm", "3:00 pm", "5:00 pm", "7:00 pm"],
};

type CollectionElement<T> = T extends (infer U)[] ? U : never;

export const TimeSelector: React.FunctionComponent<TimeSelectorProps> = () => {
    const selectedDayValue = null;
    // need to get the day from the date selector
    // call api to get days already booked
    // filter out the times that are already booked
    const availableTimes: Array<string> = [...TIMES.SAT_SUN];

    const isFalsey = isEmpty(selectedDayValue) || isEmpty(availableTimes);
    const disabledKeys = [DISABLED_EMPTY_KEY];

    const parsedKeys = isFalsey ? disabledKeys : availableTimes;

    return (
        <Dropdown placement="top-left">
            <Dropdown.Trigger>
                <TextField label="" placeholder="00:00 PM" contentLeft={<Clock />} value="" aria-labelledby="time" aria-label="time" />
            </Dropdown.Trigger>
            <Dropdown.Menu aria-label="Select Time" css={{ borderRadius: "8px", boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)", border: "1px solid #EAECF0" }} disabledKeys={disabledKeys}>
                {
                    parsedKeys.map((time) => {
                        const disabled = time === DISABLED_EMPTY_KEY;
                        const label = disabled ? "No available times for selected date" : time;

                        return (
                            <Dropdown.Item key={time} css={disabled ? DISABLED_ITEM_CSS : ITEM_CSS}>
                                {label}
                            </Dropdown.Item>
                        );
                    }) as unknown as CollectionElement<object>
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};
