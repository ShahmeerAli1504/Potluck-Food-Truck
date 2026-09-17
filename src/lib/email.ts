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
    : `📩 New Contact Message: ${payload.subject || 'General Inquiry'} from ${payload.name}`;

  const plainText = isCatering
    ? `NEW CATERING QUOTE REQUEST
-----------------------------
Client Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Event Date: ${payload.eventDate}
Event Type: ${payload.eventType}
Guest Count: ${payload.guestCount} guests
Location/Venue: ${payload.location || 'Not specified'}
Special Notes/Details: ${payload.details || 'None provided'}

Reply directly: mailto:${payload.email}
Call client: tel:${payload.phone}

Forwarded to: ${RECIPIENT_EMAIL}`
    : `NEW CONTACT FORM MESSAGE
-------------------------
From: ${payload.name}
Email: ${payload.email}
Subject: ${payload.subject}

Message:
${payload.message}

Reply directly: mailto:${payload.email}

Forwarded to: ${RECIPIENT_EMAIL}`;

  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const htmlContent = isCatering
    ? `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Catering Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #09090b; padding: 30px 15px;">
    <tr>
      <td align="center">
        
        <!-- Main Email Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid #27272a;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #111113; padding: 32px 24px; text-align: center; border-bottom: 4px solid #E11D23;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <!-- Brand Title & Tagline -->
                    <span style="font-family: Arial, sans-serif; font-size: 26px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 2px; display: block; line-height: 1;">
                      POTLUCK
                    </span>
                    <span style="font-size: 12px; font-weight: 700; color: #F5A623; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-top: 4px;">
                      The Good Luck Truck &bull; Reno, NV
                    </span>

                    <!-- Category Badge -->
                    <div style="margin-top: 18px;">
                      <span style="background-color: #E11D23; color: #ffffff; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 16px; border-radius: 50px; display: inline-block;">
                        🌮 New Catering Quote Request
                      </span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action Buttons Bar -->
          <tr>
            <td style="background-color: #fafafa; padding: 16px 24px; border-bottom: 1px solid #f4f4f5; text-align: center;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(payload.email)}?subject=RE:%20Potluck%20Catering%20Quote%20Request%20(${escapeHtml(payload.eventDate)})" style="background-color: #E11D23; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 20px; border-radius: 8px; display: inline-block; margin: 4px 6px;">
                      ✉️ Reply to ${escapeHtml(payload.name.split(' ')[0])}
                    </a>
                    ${
                      payload.phone
                        ? `<a href="tel:${escapeHtml(payload.phone)}" style="background-color: #18181b; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 20px; border-radius: 8px; display: inline-block; margin: 4px 6px;">
                        📞 Call Client (${escapeHtml(payload.phone)})
                      </a>`
                        : ''
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Email Content Body -->
          <tr>
            <td style="padding: 28px 24px; background-color: #ffffff;">
              
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #3f3f46; line-height: 1.5;">
                You received a new catering inquiry submitted through <strong>potlucktruckreno.com</strong>:
              </p>

              <!-- Key Specs Highlight Box -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8f9fa; border-radius: 12px; border: 1px solid #e4e4e7; margin-bottom: 24px; overflow: hidden;">
                
                <!-- Client Name Row -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; width: 130px; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Client Name
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 16px; font-weight: 800; color: #09090b;">
                    ${escapeHtml(payload.name)}
                  </td>
                </tr>

                <!-- Event Date Row -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Event Date
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7;">
                    <span style="background-color: #fee2e2; color: #991b1b; font-size: 14px; font-weight: 800; padding: 4px 10px; border-radius: 6px; display: inline-block;">
                      📅 ${escapeHtml(payload.eventDate)}
                    </span>
                  </td>
                </tr>

                <!-- Guest Count Row -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Guest Count
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7;">
                    <span style="background-color: #fef3c7; color: #92400e; font-size: 14px; font-weight: 800; padding: 4px 10px; border-radius: 6px; display: inline-block;">
                      👥 ${payload.guestCount} Guests
                    </span>
                  </td>
                </tr>

                <!-- Event Type Row -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Event Type
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 14px; font-weight: 700; color: #18181b;">
                    🎉 ${escapeHtml(payload.eventType)}
                  </td>
                </tr>

                <!-- Location / Venue Row -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Location / Venue
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 14px; color: #27272a;">
                    📍 ${escapeHtml(payload.location || 'Not specified')}
                  </td>
                </tr>

                <!-- Phone Row -->
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Phone
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 14px; font-weight: 700; color: #09090b;">
                    <a href="tel:${escapeHtml(payload.phone)}" style="color: #09090b; text-decoration: underline;">
                      ${escapeHtml(payload.phone)}
                    </a>
                  </td>
                </tr>

                <!-- Email Row -->
                <tr>
                  <td style="padding: 14px 18px; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Email
                  </td>
                  <td style="padding: 14px 18px; font-size: 14px; font-weight: 700;">
                    <a href="mailto:${escapeHtml(payload.email)}" style="color: #E11D23; text-decoration: none;">
                      ${escapeHtml(payload.email)}
                    </a>
                  </td>
                </tr>

              </table>

              <!-- Additional Details Block -->
              ${
                payload.details
                  ? `
                <div style="background-color: #ffffff; border-left: 4px solid #E11D23; border: 1px solid #e4e4e7; border-left-width: 4px; border-radius: 8px; padding: 18px; margin-top: 20px;">
                  <span style="font-size: 11px; font-weight: 800; color: #71717a; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">
                    📝 Special Requests / Additional Details
                  </span>
                  <p style="margin: 0; font-size: 14px; color: #27272a; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(payload.details)}</p>
                </div>
              `
                  : ''
              }

            </td>
          </tr>

          <!-- Footer Bar -->
          <tr>
            <td style="background-color: #111113; padding: 20px 24px; text-align: center; border-top: 1px solid #27272a;">
              <p style="margin: 0 0 6px 0; font-size: 12px; color: #a1a1aa;">
                Submitted on <strong>${formattedDate}</strong> via <a href="https://potlucktruckreno.com" style="color: #F5A623; text-decoration: none;">potlucktruckreno.com</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #71717a;">
                Forwarded directly to <strong>${RECIPIENT_EMAIL}</strong>. You can hit 'Reply' in your email client to contact the customer directly.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`
    : `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #09090b; padding: 30px 15px;">
    <tr>
      <td align="center">
        
        <!-- Main Email Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); border: 1px solid #27272a;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #111113; padding: 32px 24px; text-align: center; border-bottom: 4px solid #F5A623;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <!-- Brand Title & Tagline -->
                    <span style="font-family: Arial, sans-serif; font-size: 26px; font-weight: 900; color: #ffffff; text-transform: uppercase; letter-spacing: 2px; display: block; line-height: 1;">
                      POTLUCK
                    </span>
                    <span style="font-size: 12px; font-weight: 700; color: #F5A623; text-transform: uppercase; letter-spacing: 1.5px; display: block; margin-top: 4px;">
                      The Good Luck Truck &bull; Reno, NV
                    </span>

                    <!-- Category Badge -->
                    <div style="margin-top: 18px;">
                      <span style="background-color: #F5A623; color: #111113; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 16px; border-radius: 50px; display: inline-block;">
                        📩 New Contact Form Submission
                      </span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action Buttons Bar -->
          <tr>
            <td style="background-color: #fafafa; padding: 16px 24px; border-bottom: 1px solid #f4f4f5; text-align: center;">
              <a href="mailto:${escapeHtml(payload.email)}?subject=RE:%20${encodeURIComponent(payload.subject)}" style="background-color: #18181b; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 24px; border-radius: 8px; display: inline-block;">
                ✉️ Reply to ${escapeHtml(payload.name)}
              </a>
            </td>
          </tr>

          <!-- Email Content Body -->
          <tr>
            <td style="padding: 28px 24px; background-color: #ffffff;">
              
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #3f3f46; line-height: 1.5;">
                You received a new contact message submitted through <strong>potlucktruckreno.com</strong>:
              </p>

              <!-- Sender Info Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8f9fa; border-radius: 12px; border: 1px solid #e4e4e7; margin-bottom: 24px; overflow: hidden;">
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; width: 110px; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    From Name
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 16px; font-weight: 800; color: #09090b;">
                    ${escapeHtml(payload.name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Email
                  </td>
                  <td style="padding: 14px 18px; border-bottom: 1px solid #e4e4e7; font-size: 14px; font-weight: 700;">
                    <a href="mailto:${escapeHtml(payload.email)}" style="color: #E11D23; text-decoration: none;">
                      ${escapeHtml(payload.email)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 14px 18px; font-size: 12px; font-weight: 800; color: #71717a; text-transform: uppercase;">
                    Subject
                  </td>
                  <td style="padding: 14px 18px; font-size: 14px; font-weight: 700; color: #09090b;">
                    ${escapeHtml(payload.subject)}
                  </td>
                </tr>
              </table>

              <!-- Message Body Box -->
              <div style="background-color: #ffffff; border-left: 4px solid #F5A623; border: 1px solid #e4e4e7; border-left-width: 4px; border-radius: 8px; padding: 20px; margin-top: 10px;">
                <span style="font-size: 11px; font-weight: 800; color: #71717a; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 10px;">
                  💬 Message Content
                </span>
                <p style="margin: 0; font-size: 15px; color: #18181b; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
              </div>

            </td>
          </tr>

          <!-- Footer Bar -->
          <tr>
            <td style="background-color: #111113; padding: 20px 24px; text-align: center; border-top: 1px solid #27272a;">
              <p style="margin: 0 0 6px 0; font-size: 12px; color: #a1a1aa;">
                Submitted on <strong>${formattedDate}</strong> via <a href="https://potlucktruckreno.com" style="color: #F5A623; text-decoration: none;">potlucktruckreno.com</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #71717a;">
                Forwarded directly to <strong>${RECIPIENT_EMAIL}</strong>. You can hit 'Reply' in your email client to answer the customer directly.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;

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
