import { getDay } from "date-fns";

export const ITEM_CSS = {
    height: "$18",
    fontSize: "16px",
    marginBottom: "3px",
    color: "#e8b979",
    backgroundColor: "#fff",
    "&:hover": {
        backgroundColor: "rgba(232, 185, 121, 0.08)",
    },
};

export const DISABLED_ITEM_CSS = {
    ...ITEM_CSS,
    color: "#98a2b3",
    "&:hover": {
        backgroundColor: "f9fafb",
    },
    textAlign: "center",
    margin: "20px 0",
};

export const DISABLED_EMPTY_KEY = "disabled-empty-key";

const TIMES_KEYS = {
    FRI: "FRI",
    SAT_SUN: "SAT_SUN",
} as const;
export const TIMES = {
    // every 2hrs from 5 -9pm with 1hr break
    [TIMES_KEYS.FRI]: ["5:00 pm", "7:00 pm", "9:00 pm"],
    // every 2hrs from 9am - 8pm with 1hr break
    [TIMES_KEYS.SAT_SUN]: ["9:00 am", "11:00 am", "1:00 pm", "3:00 pm", "5:00 pm", "7:00 pm"],
};

export const getDayOfWeek = (date: string) => {
    const day = getDay(new Date(date));
    if (day === 5) {
        return TIMES_KEYS.FRI;
    }
    if (day === 6 || day === 0) {
        return TIMES_KEYS.SAT_SUN;
    }
};
