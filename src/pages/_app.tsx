import type { AppProps } from "next/app";
import Head from "next/head";
import { Manrope } from "@next/font/google";
const font = Manrope({ subsets: ["latin"] });

import "../scss/master.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Big Canvi</title>
                <meta name="description" content="Big Canvi" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={font.className}>
                <Component {...pageProps} />
            </div>
        </>
    );
}
