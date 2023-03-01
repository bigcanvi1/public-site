import * as React from "react";
import { Input } from "@nextui-org/react";

export interface TextFieldProps {}

export const TextField: React.FunctionComponent<TextFieldProps> = () => {
    return (
        <Input
            bordered
            label="Name"
            labelPlaceholder="Name"
            initialValue="NextUI"
            fullWidth
            css={{
                fontFamily: "inherit",
                paddingTop: "12px",

                "& .nextui-input-block-label": {
                    fontSize: "14px",
                    fontWeight: "700",
                },
                "& .nextui-input-wrapper": {
                    height: "50px",
                    border: "1px solid #C6C6C8",
                    boxShadow: "none",

                    "& input": {
                        fontSize: "16px",

                        paddingLeft: "8px",
                    },
                },

                "& .nextui-input-wrapper--hover": {
                    borderColor: "#616FE9",
                    borderWidth: "2px",
                },
            }}
        />
    );
};
