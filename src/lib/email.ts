import nodemailer from 'nodemailer';

export interface ContactFormPayload {
  type: 'contact';
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface CateringFormPayload {
  type: 'catering';
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: number;
  location?: string;
  details?: string;
}

export type EmailPayload = ContactFormPayload | CateringFormPayload;

export const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'griffin@potlucknv.com';

export async function sendNotificationEmail(payload: EmailPayload) {
  const isCatering = payload.type === 'catering';

  const subject = isCatering
    ? `🌮 New Catering Request: ${payload.name} (${payload.guestCount} guests)`
    : `📩 New Contact Form Message: ${payload.subject || 'General Inquiry'} from ${payload.name}`;

  const plainText = isCatering
    ? `NEW CATERING REQUEST
---------------------
Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Event Date: ${payload.eventDate}
Event Type: ${payload.eventType}
Guest Count: ${payload.guestCount}
Location/Venue: ${payload.location || 'N/A'}
Notes/Details: ${payload.details || 'N/A'}

Forwarded to: ${RECIPIENT_EMAIL}`
    : `NEW CONTACT FORM SUBMISSION
---------------------------
Name: ${payload.name}
Email: ${payload.email}
Subject: ${payload.subject}
Message:
${payload.message}

Forwarded to: ${RECIPIENT_EMAIL}`;

  const htmlContent = isCatering
    ? `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; color: #111;">
        <div style="background-color: #E53935; padding: 24px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">Potluck Food Truck</h1>
          <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.95; font-weight: bold;">New Catering Quote Request</p>
        </div>
        <div style="padding: 24px; background-color: #fafafa;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Client Name:</td><td style="padding: 8px 0; font-size: 16px; font-weight: bold; color: #111;">${escapeHtml(payload.name)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(payload.email)}" style="color: #E53935; font-weight: bold;">${escapeHtml(payload.email)}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(payload.phone)}" style="color: #111; font-weight: bold;">${escapeHtml(payload.phone)}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Event Date:</td><td style="padding: 8px 0; font-weight: bold; color: #E53935;">${escapeHtml(payload.eventDate)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Event Type:</td><td style="padding: 8px 0;">${escapeHtml(payload.eventType)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Guest Count:</td><td style="padding: 8px 0; font-weight: bold;">${payload.guestCount} guests</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Location / Venue:</td><td style="padding: 8px 0;">${escapeHtml(payload.location || 'Not specified')}</td></tr>
          </table>
          ${
            payload.details
              ? `
            <div style="margin-top: 20px; padding: 16px; background-color: white; border-radius: 8px; border: 1px solid #e0e0e0;">
              <p style="margin: 0 0 8px 0; font-weight: bold; color: #555;">Additional Details / Requests:</p>
              <p style="margin: 0; white-space: pre-wrap; color: #333; line-height: 1.5;">${escapeHtml(payload.details)}</p>
            </div>
          `
              : ''
          }
        </div>
        <div style="padding: 16px; text-align: center; background-color: #111; color: #999; font-size: 12px;">
          This inquiry was submitted from the Potluck website and sent directly to <strong>${RECIPIENT_EMAIL}</strong>.
        </div>
      </div>
    `
    : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; color: #111;">
        <div style="background-color: #111; padding: 24px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">Potluck Food Truck</h1>
          <p style="margin: 6px 0 0 0; font-size: 14px; color: #F5A623; font-weight: bold;">New Contact Form Submission</p>
        </div>
        <div style="padding: 24px; background-color: #fafafa;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 120px; color: #555;">From:</td><td style="padding: 8px 0; font-weight: bold; color: #111;">${escapeHtml(payload.name)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(payload.email)}" style="color: #E53935; font-weight: bold;">${escapeHtml(payload.email)}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td><td style="padding: 8px 0; font-weight: bold; color: #E53935;">${escapeHtml(payload.subject)}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: white; border-radius: 8px; border: 1px solid #e0e0e0;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #555;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #333; line-height: 1.5;">${escapeHtml(payload.message)}</p>
          </div>
        </div>
        <div style="padding: 16px; text-align: center; background-color: #111; color: #999; font-size: 12px;">
          This message was submitted from the Potluck contact form and sent directly to <strong>${RECIPIENT_EMAIL}</strong>.
        </div>
      </div>
    `;

  // 1. SMTP using Nodemailer
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true';

  if (smtpHost && smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `Potluck Food Truck <${smtpUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: payload.email,
      subject,
      text: plainText,
      html: htmlContent,
    });

    return { success: true, method: 'smtp', recipient: RECIPIENT_EMAIL };
  }

  // 2. Resend API
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'Potluck Web Form <onboarding@resend.dev>',
        to: [RECIPIENT_EMAIL],
        reply_to: payload.email,
        subject,
        text: plainText,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Resend API error: ${errText}`);
    }

    return { success: true, method: 'resend', recipient: RECIPIENT_EMAIL };
  }

  // 3. Fallback / Development logging
  console.log('====================================================');
  console.log(`[FORM SUBMISSION FORWARDED TO: ${RECIPIENT_EMAIL}]`);
  console.log(`Subject: ${subject}`);
  console.log(plainText);
  console.log('====================================================');
  console.log('To send live emails, configure SMTP_HOST, SMTP_USER, SMTP_PASS (or RESEND_API_KEY) in .env.local or Vercel Environment Variables.');

  return { success: true, method: 'simulated', recipient: RECIPIENT_EMAIL };
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
