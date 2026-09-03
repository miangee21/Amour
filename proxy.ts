//proxy.ts
import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isAppRoute = createRouteMatcher(["/dashboard", "/new", "/write(.*)"]);
const isAuthRoute = createRouteMatcher(["/login", "/signup"]);

export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  const authed = await convexAuth.isAuthenticated();

  if (isAppRoute(request) && !authed) {
    return nextjsMiddlewareRedirect(request, "/login");
  }
  if (isAuthRoute(request) && authed) {
    return nextjsMiddlewareRedirect(request, "/dashboard");
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
