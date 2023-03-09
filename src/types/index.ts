export interface IBooking {
    booking_time: string;
    booking_date: string;
    first_name: string;
    last_name: string;
    email: string;
    plan: "BASIC" | "PREMIUM";
}
