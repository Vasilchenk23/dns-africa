import nodemailer from 'nodemailer';

export async function POST(req) {
  const { fullName, email, question } = await req.json();

  if (!fullName || !email || !question) {
    return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL, 
      subject: `🛒 New message from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #007BFF;">🛍️ New Inquiry from Customer</h2>
          <p><strong>Full Name:</strong> ${fullName} 👤</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Question:</strong> ${question}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email or Telegram message:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email or Telegram message' }), { status: 500 });
  }
}
