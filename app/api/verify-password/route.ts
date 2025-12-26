import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.CASE_STUDY_PASSWORD;

    if (!correctPassword) {
      console.error('CASE_STUDY_PASSWORD environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    if (password === correctPassword) {
      const response = NextResponse.json({ success: true });
      
      // Set HTTP-only cookie (secure)
      // Note: In development (http), 'secure: true' might block the cookie if not careful, 
      // but modern browsers usually allow it on localhost.
      // We'll enable 'secure' only in production to be safe.
      const isProduction = process.env.NODE_ENV === 'production';
      
      response.cookies.set('case_study_auth', 'authenticated', {
        httpOnly: true,
        secure: isProduction,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });
      
      return response;
    }
    
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

