import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // Throws an immediate Error if process.env.RESEND_API_KEY is undefined at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const data = await request.json();
    const { name, firm, email, phone, inquiryType, message } = data;

    // Validate required fields
    if (!name || !firm || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Default to the vaelo.team@gmail.com address if a custom one isn't provided in env
    const sendTo = process.env.CONTACT_EMAIL_TO || 'vaelo.team@gmail.com';
    
    // IMPORTANT: On Resend's free tier, you can only send FROM onboarding@resend.dev
    // or a domain you have explicitly verified in their dashboard.
    // The domain vaelo.co.in has been verified.
    const sendFrom = 'hello@vaelo.co.in';

    const { data: emailData, error } = await resend.emails.send({
      from: `Vaelo Website <${sendFrom}>`,
      to: sendTo,
      subject: `New Vaelo Inquiry: ${inquiryType} from ${name}`,
      text: `
New inquiry from the Vaelo website contact form:

Name: ${name}
Firm: ${firm}
Email: ${email}
Phone: ${phone || 'Not provided'}
Inquiry Type: ${inquiryType}

Message:
${message}
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: emailData }, { status: 200 });
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while sending the message.' },
      { status: 500 }
    );
  }
}
