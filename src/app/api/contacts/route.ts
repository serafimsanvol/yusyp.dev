import getIP from '@/app/contacts/getIP';
import { NextResponse } from 'next/server';
import { checkLimit } from './helpers';
import { sendEmail } from '@/app/contacts/actions';

// submit contact form
export async function POST(request: Request) {
  const IP = getIP(request);
  const errorResponse = await checkLimit(IP);

  if (errorResponse) {
    return NextResponse.json(errorResponse, {
      status: errorResponse.status || 500,
    });
  }

  const form = await request.json();
  await sendEmail(form);

  return NextResponse.json({ message: 'success' });
}
