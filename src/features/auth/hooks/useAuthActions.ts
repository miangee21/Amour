//src/features/auth/hooks/useAuthActions.ts
"use client";

import { useAuthActions as useConvexAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import type { LoginFormValues, SignupFormValues } from "../types";

export function useAuthActions() {
  const { signIn, signOut: convexSignOut } = useConvexAuthActions();
  const router = useRouter();

  const login = async (values: LoginFormValues) => {
    try {
      await signIn("password", {
        email: values.email,
        password: values.password,
        flow: "signIn",
      });
      toast.success("Ledger Opened", {
        description: "Letter unsealed successfully.",
        icon: "🖋️",
      });
      router.push("/dashboard");
    } catch {
      // Server-side invalid credentials toast
      toast.error("Access Denied", {
        description: "Invalid credentials. The wax seal remains unbroken.",
        icon: "🔒",
      });
    }
  };

  const signup = async (values: SignupFormValues) => {
    try {
      await signIn("password", {
        name: values.name,
        email: values.email,
        password: values.password,
        flow: "signUp",
      });
      toast.success("Ledger Created", {
        description: "Vows inscribed. Welcome to Amour.",
        icon: "📜",
      });
      router.push("/dashboard");
    } catch (error) {
      // Handle "Email already in use" or other server errors
      const msg =
        error instanceof Error && error.message.includes("already exists")
          ? "This letter address is already in use."
          : "Failed to inscribe vows. Please try again.";
      toast.error(msg);
    }
  };

  const signOut = async () => {
    await convexSignOut();
    toast.success("The wax seal is broken.", {
      description: "You have securely closed your ledger.",
      icon: "🕯️",
    });
    router.push("/home");
  };

  return { login, signup, signOut };
}
