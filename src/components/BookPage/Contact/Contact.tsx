import * as React from "react";
import classes from "./styled.module.scss";
import { COMMON_EXTERNAL_LINK_PROPS } from "@/constant";

const ICON_MAP = {
    EMAIL: "/images/insta-icon.png",
    INSTA: "/images/insta-icon.png",
    TWITTER: "/images/twitter-icon.png",
} as const;

export interface ContactProps {
    contacts: Array<{ id: string; url: string; type: keyof typeof ICON_MAP }>;
}

export const Contact: React.FunctionComponent<ContactProps> = ({ contacts }) => {
    // make it a link
    return (
        <div className={classes.Contact}>
            {contacts.map(({ id, url, type }) => {
                const iconUrl = ICON_MAP[type];

                return (
                    <a href={url} key={type + url} {...COMMON_EXTERNAL_LINK_PROPS}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={iconUrl} alt={type} />
                        <span>{url}</span>
                    </a>
                );
            })}
        </div>
    );
};
