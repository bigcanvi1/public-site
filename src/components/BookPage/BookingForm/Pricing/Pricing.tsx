import * as React from "react";
import classes from "./styled.module.scss";
import { PRICING_ITEMS } from "./constant";
import { PricingItem } from "./PricingItem";
export interface PricingProps {}

export const Pricing: React.FunctionComponent<PricingProps> = () => {
    return (
        <div className={classes.Pricing}>
            {PRICING_ITEMS.map((item, index) => {
                return (
                    <PricingItem
                        key={`${item.type}
                -index`}
                        {...item}
                        value={PRICING_ITEMS[1].type}
                    />
                );
            })}
        </div>
    );
};
