//src/features/auth/types.ts
import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Secret key is required." }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(18, { message: "Name cannot exceed 18 characters." }),
  email: z.email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least 1 uppercase letter.",
    })
    .regex(/[0-9]/, { message: "Password must contain at least 1 number." }),
});

export type SignupFormValues = z.infer<typeof signupSchema>;
