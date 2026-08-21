import { NextResponse } from 'next/server';
import { sendNotificationEmail, CateringFormPayload } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, eventDate, eventType, guestCount, location, details } = body;

    if (!name || !email || !phone || !eventDate) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, phone, eventDate)' },
        { status: 400 }
      );
    }

    const payload: CateringFormPayload = {
      type: 'catering',
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      eventDate: String(eventDate).trim(),
      eventType: String(eventType || 'Corporate Event').trim(),
      guestCount: Number(guestCount) || 20,
      location: location ? String(location).trim() : '',
      details: details ? String(details).trim() : '',
    };

    const result = await sendNotificationEmail(payload);

    return NextResponse.json({
      success: true,
      message: 'Your catering inquiry has been submitted successfully.',
      details: result,
    });
  } catch (error: any) {
    console.error('Error handling catering form submission:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to submit catering inquiry' },
      { status: 500 }
    );
  }
}
