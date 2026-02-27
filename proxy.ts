import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "better-auth/types";

// Import your existing routing constants
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "./routes";

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // 1. Fetch the session from Better Auth securely at the Edge
  // We pass the <Session> type so TypeScript knows exactly what 'session' contains
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        // Forward the cookie header so the Better Auth server knows who is asking
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  // 2. Boolean check for the session
  const isLoggedIn = !!session;

  // 3. Identify the route type
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // 4. API Routes bypass the proxy completely
  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  // 5. Auth Routes (like /login or /register)
  if (isAuthRoute) {
    if (isLoggedIn) {
      // If they are already logged in, push them away from the login page
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }

  // 6. Protected Routes
  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search; // Append query params (e.g., /dashboard?tab=settings)
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    // Redirect to login. I also kept the ?error=unauthorized flag we built earlier
    // so your Sonner toast still fires perfectly on the frontend!
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}&error=unauthorized`, nextUrl)
    );
  }

  // 7. Catch-all: Let everything else through
  return NextResponse.next();
}

// Keep your exact same matcher config!
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api/auth|trpc)(.*)"],
};