import * as React from "react";

export interface PricingProps {}

export const Pricing: React.FunctionComponent<PricingProps> = () => {
    return (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="40" height="40" rx="20" fill="#FDF9F4" />
            <path d="M14.6665 25.0833L22.9998 29.25L31.3332 25.0833M22.9998 16.75L14.6665 20.9167L22.9998 25.0833L31.3332 20.9167L22.9998 16.75Z" stroke="#E8B979" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FDF9F4" strokeWidth="6" />
        </svg>
    );
};
