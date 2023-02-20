import * as React from "react";
import { NAVIGATION } from "../../../constant";
import classes from "./Header.module.scss";
import Link from "next/link";

export const Header: React.FunctionComponent = () => {
    return (
        <header>
            <div className={`col-12 centered collapse-mobile ${classes.MastHead}`}>
                <div className="logo">Logo</div>

                <nav className={classes.Nav}>
                    <ul>
                        {NAVIGATION.map((item) => (
                            <li key={item.path}>
                                <Link href={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
