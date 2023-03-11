// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
const Mailjet = require("node-mailjet");
import { IBooking } from "@/types";

const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC,
    apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

const mailjetReg = (values: IBooking) => {
    return mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: {
                    Email: "bigcanvi@gmail.com",
                    Name: "Big Canvi",
                },
                To: [
                    {
                        Email: values.email,
                        Name: `${values.first_name} ${values.last_name}`,
                    },
                ],
                CC: [
                    {
                        Email: "bigcanvi@gmail.com",
                        Name: "Big Canvi",
                    },
                ],
                TemplateID: 4648173,
                TemplateLanguage: true,
                Subject: "Your booking with Big Canvi",
                Variables: {
                    full_name: `${values.first_name} ${values.last_name}`,
                    date: values.booking_date?.split("T")[0],
                    time: values.booking_time,
                    plan: values.plan,
                },
            },
        ],
    });
};

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
    const data = req.body;

    try {
        const result = await supabase.from("books").upsert(data);

        const mailRes = await mailjetReg(data);

        if (mailRes.response.statusText?.toLowerCase() === "ok" && result?.statusText?.toLowerCase() === "created") {
            res.status(200).json(result);
            return;
        }

        console.log("🚀 ~ file: bookings.ts:58 ~ handler ~ mailRes:", result, mailRes);

        res.status(200).json({
            statusText: "ERROR",
        });
    } catch (e) {
        console.log("🚀 ~ file: bookings.ts:15 ~ handler ~ e:", e);

        res.status(200).json({ code: 500, message: "Something went wrong", statusText: "ERROR" });
    }
}
