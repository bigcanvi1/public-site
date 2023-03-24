import * as React from "react";
import classes from "./Footer.module.scss";
import { COMMON_EXTERNAL_LINK_PROPS } from "@/constant";
import { Twitter, Facebook, LinkedIn, Mail, Insta } from "@/assets/icons";
import { useRouter } from "next/router";

const ICON_MAP = {
    EMAIL: Mail,
    INSTA: Insta,
    TWITTER: Twitter,
    LINKED_IN: LinkedIn,
    FACEBOOK: Facebook,
} as const;

export interface FooterProps {
    contacts: Array<{ id: string; url: string; type: keyof typeof ICON_MAP }>;
}

export const Footer: React.FunctionComponent<FooterProps> = ({ contacts }) => {
    const router = useRouter();

    const date = new Date();
    const year = date.getFullYear();

    const showDarkFooter = router.pathname === "/" || router.pathname === "/gallery";

    return (
        <footer className={[classes.Footer, showDarkFooter ? classes.Dark : ""].join(" ")}>
            <div className={`col-12 centred collapse-mobile`}>
                <div className={classes.FooterWrapper}>
                    <p>Big Canvi {year}</p>

                    <div className={classes.Contacts}>
                        {contacts.map(({ id, url, type }) => {
                            const Icon = ICON_MAP[type];
                            return (
                                <a key={id} href={url} {...COMMON_EXTERNAL_LINK_PROPS} aria-label={type}>
                                    <Icon className={type === "EMAIL" ? classes.mail : ""} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};
