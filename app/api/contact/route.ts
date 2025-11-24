import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter - You'll need to configure this with actual email credentials
    // For Gmail, you'll need to enable "Less secure app access" or use App Passwords
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Add to .env.local
        pass: process.env.EMAIL_PASSWORD, // Add to .env.local
      },
    });

    // Email to clinic
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "shadowtitan2007@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #14B8A6 0%, #10B981 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #14B8A6; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #14B8A6; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>FIT CARDIAC DIAGNOSTIC CENTRE</p>
              </div>
                <div class="field">k
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                ${phone
          ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                `
          : ""
        }
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This message was sent from the FIT CARDIAC DIAGNOSTIC CENTRE website contact form</p>
                <p>3530 Derry Road East (#110), Mississauga, ON, L4T 4E3</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
