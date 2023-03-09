export const getBookings = async () => {
    return fetch("/api/get-bookings").then((res) => res.json());
};
