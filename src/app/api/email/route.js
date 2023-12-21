import { Resend } from "resend";

import ContactEmail from "@/emails/Contact.jsx";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { fName, lName, email, msg } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thank you for contacting us!",
      react: <ContactEmail firstName={fName} lastName={lName} message={msg} />,
    });

    return Response.json(data);
  } catch (e) {
    return Response.json({ e });
  }
}
