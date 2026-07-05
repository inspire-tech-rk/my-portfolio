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

    // Save in MongoDB
    const contact = await Contact.create({
      fullName,
      email,
      message,
    });

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
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
    next(error);
  }
};