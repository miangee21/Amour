// src/app/page.tsx
import { redirect } from "next/navigation";
import { isAuthenticatedNextjs } from "@convex-dev/auth/nextjs/server";

export default async function RootPage() {
  const authed = await isAuthenticatedNextjs();
  redirect(authed ? "/dashboard" : "/home");
}
