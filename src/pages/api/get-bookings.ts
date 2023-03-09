// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse<unknown>) {
    const data = req.body;

    try {
        const result = await supabase.from("books").select("booking_date, booking_time").gte("booking_date", new Date().toISOString());

        res.status(200).json(result);
    } catch (e) {
        console.log("🚀 ~ file: bookings.ts:15 ~ handler ~ e:", e);

        res.status(200).json({ code: 500, message: "Something went wrong" });
    }
}
