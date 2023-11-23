import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_Q5w7XEgd_8CRWrjyCeroo9y5x6jqxAzqx');

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["mougrind@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "",
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}