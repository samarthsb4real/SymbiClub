import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/', '/api/webhook/clerk']);

const middleware = clerkMiddleware((auth, req, evt) => {
  console.log(`Request URL: ${req.url}`);
  if (isPublicRoute(req)) {
    console.log('Public route, no auth required.');
    return; // Allow public access
  }
  console.log('Protected route, auth required.');
  auth().protect();
});

export default middleware;

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
