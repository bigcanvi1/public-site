import * as React from "react";
import classes from "./styled.module.scss";
import { PRICING_ITEMS } from "./constant";
import { PricingItem } from "./PricingItem";
import { FIELDS } from "../constant";
import { useField } from "formik";

export interface PricingProps {}

export const Pricing: React.FunctionComponent<PricingProps> = () => {
    const [field, _, { setValue }] = useField(FIELDS.plan);

    const handleChange = (e: React.SyntheticEvent<HTMLDivElement>) => {
        // get the value of the radio button from data set
        const value = e.currentTarget.dataset.value;

        setValue(value, true);
    };

    return (
        <div className={classes.Pricing}>
            {PRICING_ITEMS.map((item, index) => {
                const isChecked = item.value === field.value;

                return (
                    <PricingItem
                        key={`${item.type}
                -index`}
                        {...item}
                        isChecked={isChecked}
                        handleChange={handleChange}
                    />
                );
            })}
        </div>
    );
};
