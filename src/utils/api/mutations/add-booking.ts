import { supabase } from "@/constant";

export const addBookingFn = async (booking: {}) => {
    const { error: errorObj, status } = await supabase.from("DB_PROJECTS_KEY").upsert(booking);
    console.log("🚀 ~ file: add-booking.ts:4 ~ addBookingFn ~ { error: errorObj, status }:", { error: errorObj, status });
};
