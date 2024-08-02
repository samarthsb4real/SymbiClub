import { NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define which routes are public and do not require authentication
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/', '/api/webhook/clerk']);

// Middleware function to handle authentication
const middleware = clerkMiddleware((auth, req: NextRequest, evt) => {
  console.log(`Request URL: ${req.url}`);
  if (isPublicRoute(req)) {
    console.log('Public route, no auth required.');
    return; // Allow public access to public routes
  }
  console.log('Protected route, auth required.');
  auth().protect();
});

export default middleware;

// Configuration to match specific routes
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
