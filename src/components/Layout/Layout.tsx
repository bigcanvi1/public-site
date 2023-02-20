import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import classes from "./Layout.module.scss";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <main className={classes.Main}>
            <Header />

            <div className="col-12 centered collapse-mobile">{children}</div>

            <Footer />
        </main>
    );
};
