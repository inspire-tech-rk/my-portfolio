import Contact from "../models/Contact.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const createContactMessage = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({ fullName, email, message });

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Portfolio Contact Message from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
    console.log("Contact controller error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Email sending failed",
    });
  }
};