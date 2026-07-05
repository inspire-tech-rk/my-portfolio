import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

export const createContactMessage = async (req, res, next) => {
  try {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      fullName,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      contact,
    });

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL,
        replyTo: email,
        subject: `New Portfolio Message from ${fullName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><b>Name:</b> ${fullName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `,
      });

      console.log("Email sent successfully");
    } catch (emailError) {
      console.log("Email sending failed:", emailError.message);
    }
  } catch (error) {
    next(error);
  }
};