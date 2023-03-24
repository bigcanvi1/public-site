import * as React from "react";
import { NAVIGATION } from "../../../constant";
import classes from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/assets/icons";

export const Header: React.FunctionComponent = () => {
    const [isOpenHamburger, setIsOpenHamBurger] = React.useState(false);
    const toggleHamburger = () => {
        setIsOpenHamBurger((prevState) => !prevState);
    };

    return (
        <header className={classes.Header}>
            <div className={`col-12 centered collapse-mobile ${classes.MastHead}`}>
                <div className={classes.Logo}>
                    <Link href="/" aria-label="big canvi" title="big canvi">
                        <Logo />
                    </Link>
                </div>

                <button onClick={toggleHamburger} className={[classes.FacadeButton, `${isOpenHamburger ? classes.FacadeButtonOpen : ""}`].join(" ")}>
                    <div role="button" aria-label="menu" className={[classes.main_navigation__hamburger, `${isOpenHamburger ? classes.hamOpen : ""}`].join(" ")}>
                        &nbsp;
                    </div>
                </button>

                <nav className={[classes.Nav, isOpenHamburger ? classes.open : ""].join(" ")}>
                    <ul>
                        {NAVIGATION.map((item) => (
                            <li key={item.path} onClick={toggleHamburger}>
                                <Link href={item.path}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
