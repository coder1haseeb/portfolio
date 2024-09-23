import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    console.log(" ---------------- Entering server side ----------------");
    console.log("Body for server side", body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'coder.haseeb@gmail.com',
        pass: process.env.GOOGLE_PASSWORD // Make sure to handle this securely
      }
    });

    const mailOptions = {
      from: 'query@haseeb@gmail.com',
      to: 'coder.haseeb@gmail.com', // Send email to yourself
      subject: 'New message from your portfolio!',
      html: `
        <div style="background: linear-gradient(to right, #f9f9f9, #e8e8e8); padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">New Contact Request</h2>
          <p style="font-size: 16px; color: #555;">You have received a new message through your portfolio:</p>
          <ul style="font-size: 14px; color: #555;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
          </ul>
          <blockquote style="font-size: 14px; color: #777; padding: 15px; border-left: 5px solid #2272FF;">
            ${message}
          </blockquote>
          <hr style="border-top: 1px solid #ddd;" />
          <p style="font-size: 14px; color: #888;">Make sure to reply to the sender at <a href="mailto:${email}" style="color: #2272FF;">${email}</a>.</p>
          <p style="font-size: 12px; color: #bbb;">Best Regards, <br />Coder Haseeb’s Portfolio</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      message: "Something went wrong",
      status: 500,
    });
  }
};
