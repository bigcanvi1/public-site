import * as React from "react";
import { Header } from "./Header";
import { Footer, FooterProps } from "./Footer";
import classes from "./Layout.module.scss";

export interface LayoutProps extends FooterProps {
    children?: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children, contacts }) => {
    return (
        <main className={classes.Main}>
            <Header />

            {children}

            <Footer contacts={contacts} />
        </main>
    );
};
