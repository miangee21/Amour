//src/app/(auth)/login/page.tsx
import { LoginForm } from "@/features/auth/components/LoginForm";

export const metadata = {
  title: "Seal & Enter | Amour",
  description: "Sign in to your Amour account to read and write your letters.",
};

export default function LoginPage() {
  return <LoginForm />;
}
