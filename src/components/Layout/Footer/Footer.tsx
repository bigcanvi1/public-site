import * as React from "react";
import classes from "./Footer.module.scss";
import { COMMON_EXTERNAL_LINK_PROPS } from "@/constant";
import { Twitter, Facebook, LinkedIn, Mail, Insta } from "@/assets/icons";

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
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className={`col-12 centred collapse-mobile`}>
                <div className={classes.Footer}>
                    <p>Big Canvi {year}</p>

                    <div className={classes.Contacts}>
                        {contacts.map(({ id, url, type }) => {
                            const Icon = ICON_MAP[type];
                            return (
                                <a key={id} href={url} {...COMMON_EXTERNAL_LINK_PROPS} aria-label={type}>
                                    <Icon />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};
