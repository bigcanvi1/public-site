import * as React from "react";
import { TextField } from "../TextField";
import { Clock } from "@/assets/icons";
import { Dropdown } from "@nextui-org/react";
import isEmpty from "lodash/isEmpty";
import { ITEM_CSS, DISABLED_ITEM_CSS } from "./constant";
import { FIELDS, INITIAL_VALUES } from "../constant";
import { useField, useFormikContext } from "formik";
import { useGetAllBookings } from "@/hooks";
import { DISABLED_EMPTY_KEY, TIMES, getDayOfWeek } from "./constant";

export interface TimeSelectorProps {}

type CollectionElement<T> = T extends (infer U)[] ? U : never;

export const TimeSelector: React.FunctionComponent<TimeSelectorProps> = () => {
    const [field, _, { setValue }] = useField(FIELDS.booking_time);
    const { values } = useFormikContext<typeof INITIAL_VALUES>();

    const { data: bookings } = useGetAllBookings();

    const selectedDayValue = values?.[FIELDS.booking_date];
    const bookedTimesForSelectedDay = bookings?.filter((booking) => selectedDayValue?.startsWith(booking?.booking_date))?.map((booking) => booking?.booking_time);

    /// get the day of the week from the date selector
    const selectedDay = getDayOfWeek(selectedDayValue) as keyof typeof TIMES;

    const availableTimes: Array<string> = TIMES[selectedDay]?.filter((time) => !bookedTimesForSelectedDay?.includes(time));

    const isFalsey = isEmpty(selectedDayValue) || isEmpty(availableTimes);
    const disabledKeys = [DISABLED_EMPTY_KEY];

    const parsedKeys = isFalsey ? disabledKeys : availableTimes;

    const handleSelect = (key: React.Key) => {
        setValue(key, true);
    };

    return (
        <Dropdown placement="top-left">
            <Dropdown.Trigger>
                <TextField label="" placeholder="00:00 PM" contentLeft={<Clock />} value={field.value} aria-labelledby="time" aria-label="time" />
            </Dropdown.Trigger>
            <Dropdown.Menu aria-label="Select Time" css={{ borderRadius: "8px", boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)", border: "1px solid #EAECF0" }} disabledKeys={disabledKeys} onAction={handleSelect}>
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
