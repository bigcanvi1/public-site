export const addBookingFn = async (booking: {}) => {
    return fetch("/api/bookings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
    }).then((res) => res.json());
};
