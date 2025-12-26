import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const authCookie = request.cookies.get('case_study_auth');
  const { pathname } = request.nextUrl;

  // Check if the user is authenticated
  const isAuthenticated = authCookie && authCookie.value === 'authenticated';

  // If not authenticated, redirect to password page
  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/case-study';
    // Add the return URL so we can redirect back after login
    url.searchParams.set('returnUrl', pathname);
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Protect these specific routes
export const config = {
  matcher: [
    '/featured/design-system/:path*',
    '/featured/credit-portfolio-monitoring/:path*',
  ],
};

