import { getBookings } from "@/utils";
import * as React from "react";
import { IBooking } from "@/types";

export const useGetAllBookings = () => {
    const [data, setData] = React.useState<Array<IBooking>>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const triggerRef = React.useRef(false);

    const handleFetch = React.useCallback(() => {
        setLoading(true);
        getBookings()
            .then((res) => {
                if (res?.data) {
                    setData(res?.data);
                    return;
                }
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // prevent double fetch
    React.useEffect(() => {
        if (!triggerRef.current) {
            triggerRef.current = true;
            handleFetch();
        }
    }, [handleFetch]);

    // refetch every 3 minutes
    React.useEffect(() => {
        const interval = setInterval(() => {
            handleFetch();
        }, 180000); // 3 minutes = 180000
        return () => clearInterval(interval);
    }, [handleFetch]);

    return { data, loading, error };
};
