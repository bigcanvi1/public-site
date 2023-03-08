import * as React from "react";
import { Input, InputProps } from "@nextui-org/react";
import { useField } from "formik";
import isEmpty from "lodash/isEmpty";

export interface TextFieldProps extends Omit<Partial<InputProps>, "contentLeft" | "bordered" | "fullWidth" | "animated" | "contentLeftStyling"> {
    label: string;
    placeholder: string;
    type?: string;
    contentLeft?: InputProps["contentLeft"];
    name?: string;
}

export const TextField = React.forwardRef<TextFieldProps, any>(({ label, placeholder, type, contentLeft, name, ...rest }, ref) => {
    const fieldHook = name ? useField : () => [];
    const [field, meta] = fieldHook(name ?? "");
    console.log("🚀 ~ file: TextField.tsx:17 ~ TextField ~ meta:", meta);

    return (
        <Input
            ref={ref}
            bordered
            label={label}
            placeholder={placeholder}
            fullWidth
            animated={false}
            type={type ?? "text"}
            contentLeft={contentLeft}
            contentLeftStyling={false}
            helperText={meta?.touched && meta?.error ? meta.error : ""}
            helperColor="error"
            {...(field || {})}
            {...rest}
            css={{
                fontFamily: "inherit",
                paddingTop: "12px",

                "& .nextui-input-block-label": {
                    fontSize: "14px",
                    fontWeight: "700",
                    paddingBottom: "16px",
                },
                "& .nextui-input-wrapper": {
                    height: "50px",
                    border: "1px solid #EAECF0",
                    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
                    outline: "none",
                    "& input": {
                        fontSize: "16px",
                        textAlign: "left",
                        paddingLeft: "8px",
                    },
                    borderRadius: "8px",
                },

                "& .nextui-input-wrapper--hover": {
                    borderColor: "#e8b979",
                    borderWidth: "1px",
                },
                "& .nextui-input-content--left": {
                    marginTop: "10px",
                    marginLeft: "10px",
                },

                "& .nextui-input-helper-text-container": {
                    transform: "translateY(24px)",

                    "& .nextui-input-helper-text": {
                        fontSize: "14px",
                    },
                },
            }}
        />
    );
});

TextField.displayName = "TextField";
