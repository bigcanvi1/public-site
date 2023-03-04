import { PricingItemProps } from "./PricingItem";

export const PRICING_ITEMS: Array<PricingItemProps> = [
    {
        type: "Basic",
        price: 200,
        perks: ["2 hrs", "Studio Shoot", "8 Pro Retouched selected Images"],
    },
    {
        type: "Premium",
        price: 400,
        perks: ["2 hrs", "Studio Shoot / Any Dublin Location", "All Pro Retouched of selected Images"],
    },
];
