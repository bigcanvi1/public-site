import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
    const { replace } = useRouter();

    useEffect(() => {
        replace("/");
    }, [replace]);

    return null;
}
