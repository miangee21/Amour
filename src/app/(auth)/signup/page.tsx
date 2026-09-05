//src/app/(auth)/signup/page.tsx
import { SignupForm } from "@/features/auth/components/SignupForm";

export const metadata = {
  title: "Inscribe your Vows | Amour",
  description:
    "Create an Amour account and begin writing your digital letters.",
};

export default function SignupPage() {
  return <SignupForm />;
}
