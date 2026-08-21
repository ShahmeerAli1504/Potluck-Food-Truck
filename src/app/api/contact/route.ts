import { NextResponse } from 'next/server';
import { sendNotificationEmail, ContactFormPayload } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, message)' },
        { status: 400 }
      );
    }

    const payload: ContactFormPayload = {
      type: 'contact',
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject || 'General Inquiry').trim(),
      message: String(message).trim(),
    };

    const result = await sendNotificationEmail(payload);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully.',
      details: result,
    });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}
