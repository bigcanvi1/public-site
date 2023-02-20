import * as React from "react";
import { NAVIGATION } from "../../../constant";
import classes from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Header: React.FunctionComponent = () => {
    return (
        <header className={classes.Header}>
            <div className={`col-12 centered collapse-mobile ${classes.MastHead}`}>
                <div className={classes.Logo}>
                    <Link href="/">
                        <Image src="/vercel.svg" alt="Logo" width={100} height={43} />
                    </Link>
                </div>

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
