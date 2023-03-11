import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Manrope } from "@next/font/google";
import Router from "next/router";
import { PageLoader } from "../components/PageLoader";
import { NextUIProvider } from "@nextui-org/react";

import "../scss/master.scss";
import "react-day-picker/dist/style.css";

const font = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);

        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return (
        <>
            <Head>
                <title>Big Canvi</title>
                <meta name="description" content="Big Canvi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            {loading && <PageLoader />}
            <div className={`${font.className} app-wrapper`}>
                <NextUIProvider>
                    <Component {...pageProps} />
                </NextUIProvider>
            </div>
        </>
    );
}
