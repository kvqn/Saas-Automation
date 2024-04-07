import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/clerk-webhook", "/api/drive-activity/notification"],
  ignoredRoutes: [
    "/api/auth/callback/discord",
    "/api/auth/callback/notion",
    "/api/auth/callback/slack",
    "api/flow",
    "/api/cron/wait",
    // '/api/auth/csrf',
    // '/api/auth/verify-request',
    // '/api/auth/callback/*',
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
