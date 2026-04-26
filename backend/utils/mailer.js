import nodemailer from 'nodemailer';
export const sendResetEmail = async ({ to, token }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
  const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: 'Nutrizio password reset',
    text: `Reset your password: ${resetLink}`
  });
};
