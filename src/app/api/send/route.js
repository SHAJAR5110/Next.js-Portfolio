import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail", // Gmail use karna easy hai
      auth: {
        user: process.env.EMAIL,    // your Gmail
        pass: process.env.PASSWORD, // App Password (not real Gmail password)
      },
    });

    // Send email
const info = await transporter.sendMail({
  from: `"Portfolio Contact" <${process.env.EMAIL}>`,
  to: process.env.EMAIL,            // tumhara inbox
  replyTo: body.email,              // user ka email (important)
  subject: body.subject,
  text: `Message: ${body.message}\n\nFrom: ${body.email}`, // plain text body
  html: `<p>${body.message}</p><p><b>From:</b> ${body.email}</p>`, // HTML body
});


    console.log("Message sent:", info.messageId);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
