import { authMiddleware,clerkClient } from "@clerk/nextjs/server";

const publicRoutes= [
  "/",
  "/api/webhook/register",
  "/sign-up",
  "/sign-in",
]

export default authMiddleware({
  publicRoutes,
  // async afterAuth(auth,req) {
  //   //handle unauth user trying to access protected routes
  //   if(!auth.userId && !publicRoutes.includes(req.nextUrl.pathname)){

  //   }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};