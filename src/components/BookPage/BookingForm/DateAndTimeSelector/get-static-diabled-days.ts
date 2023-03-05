import { toDate, getMonth, addMonths, startOfMonth } from "date-fns";

export const getDisabledMondaysToThursdays = () => {
    const date = new Date();
    const fromYear = date.getFullYear();

    // get current month
    const fromMonth = date;
    const toMonth = addMonths(date, 2);

    const disabledDays = [];

    for (let i = 0; i < 3; i++) {
        const month = getMonth(fromMonth) + i;
        const days = new Date(fromYear, month - 1, 0).getDate();

        for (let j = 1; j <= days; j++) {
            const day = new Date(fromYear, month, j);
            const dayOfWeek = day.getDay();

            if (dayOfWeek >= 1 && dayOfWeek <= 4) {
                disabledDays.push(day);
            }
        }
    }

    return disabledDays;
};
