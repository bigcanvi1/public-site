import { PricingItemProps } from "./PricingItem";

export const PLANS = {
    BASIC: "BASIC",
    PREMIUM: "PREMIUM",
} as const;

export const PRICING_ITEMS: Array<Omit<PricingItemProps, "handleChange" | "isChecked">> = [
    {
        type: "Premium",
        price: 400,
        perks: ["2 hrs", "Studio Shoot / Any Dublin Location", "All Pro Retouched of selected Images"],
        value: PLANS.PREMIUM,
    },
    {
        type: "Basic",
        price: 200,
        perks: ["2 hrs", "Studio Shoot", "8 Pro Retouched selected Images"],
        value: PLANS.BASIC,
    },
];
