import * as React from "react";
import { Pricing } from "@/assets/icons";
import classes from "../styled.module.scss";

export interface PricingItemProps {
    type: string;
    price: number;
    perks: Array<string>;
    value?: string;
}

export const PricingItem: React.FunctionComponent<PricingItemProps> = ({ type, price, perks, value }) => {
    const isChecked = value === type;

    return (
        <div className={[classes.PricingItem, isChecked ? classes.PricingItem__Checked : ""].join(" ")}>
            <div className={classes.PricingItem__Header}>
                <div>
                    <Pricing /> <p>{type}</p>
                </div>
                <div className={classes.PricingItem__Check}>&nbsp;</div>
            </div>

            <div className={classes.PricingItem__Desc}>
                <p className={classes.PricingItem__Desc_Price}>€{price}</p>
                <div className={classes.PricingItem__Desc_Perks}>
                    {perks.map((perk, index) => {
                        return <p key={`${perk}-index`}>{perk}</p>;
                    })}
                </div>
            </div>
        </div>
    );
};
