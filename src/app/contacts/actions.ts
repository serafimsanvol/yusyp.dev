'use server';
import nodemailer from 'nodemailer';
import { ContactFormData } from './Form';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (form: ContactFormData) => {
  const userInfo = Object.entries(form)
    .map(([key, value]) => `<p>${key}: ${value}</p>`)
    .join('');

  const info = await transporter.sendMail({
    from: '"Contact Form" <info@yusyp.dev>', // sender address
    to: process.env.RECIPIENT_EMAIL, // list of receivers
    subject: `Contact Form Submission from: ${form.name}`, // Subject line
    html: userInfo, // html body
  });

  console.log('Message sent: %s', info.messageId);
};
