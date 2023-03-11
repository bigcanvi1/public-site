/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Layout, LayoutProps } from "../Layout";
import { PageHero } from "../PageHero";
import classes from "./styled.module.scss";

export interface AboutPageProps extends LayoutProps {
    imgUrl: string;
}

export const AboutPage: React.FunctionComponent<AboutPageProps> = ({ contacts, imgUrl }) => {
    return (
        <Layout contacts={contacts}>
            <PageHero title="About" />
            <div className="col-12 centered collapse-mobile">
                <div className={classes.About}>
                    <div className={classes.AboutText}>
                        <h2>“I am a loyalist! same way I love Nike sneakers and wears, is the same way i tune my vision with a canon lens ”</h2>
                        <p>Canon Boy</p>
                    </div>
                    <div>
                        <img src={imgUrl} alt="About" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};
