import * as React from "react";

export interface ClockProps {}

export const Clock: React.FunctionComponent<ClockProps> = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V12H17M21.0036 4.57115L17.9395 2M6.06418 2L3 4.57115M12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" stroke="#E8B979" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};