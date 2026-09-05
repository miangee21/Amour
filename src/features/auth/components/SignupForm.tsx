//src/features/auth/components/SignupForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  Eye,
  EyeOff,
  CheckCircle2,
  Edit3,
  User,
  Heart,
} from "lucide-react";
import { signupSchema, type SignupFormValues } from "../types";
import { useAuthActions } from "../hooks/useAuthActions";

export function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuthActions();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  return (
    <div className="relative w-full max-w-135 flex items-center justify-center">
      {/* Subtle Ambient Decorative Circles */}
      <div className="absolute -top-6 -left-8 w-44 h-44 rounded-full bg-(--auth-watermark) blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-8 -right-8 w-52 h-52 rounded-full bg-(--auth-watermark) blur-3xl pointer-events-none"></div>

      {/* The Stationery Sheet Card */}
      <div className="relative w-full bg-(--auth-card-bg) rounded-xl shadow-(--auth-card-shadow) overflow-hidden px-8 py-8 sm:px-12 sm:py-10 transition-colors duration-500">
        {/* Faux Paper Ruled Lines Ambient Pattern (Vertical line removed) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.45] bg-[linear-gradient(to_bottom,transparent_31px,var(--auth-ruled-line)_32px)] bg-size-[100%_32px] transition-colors duration-500"></div>

        {/* Top Right Antique Postmark & Custom Wax Seal */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex items-center gap-3">
          <div className="w-14 h-14 rounded-full flex flex-col items-center justify-center text-(--auth-text-muted)/50 select-none transform rotate-[-8deg] pointer-events-none transition-colors duration-500">
            <span className="text-[10px] tracking-[0.16em] uppercase font-bold">
              PARIS
            </span>
            <div className="w-8 h-px bg-(--auth-text-muted)/40 my-0.5"></div>
            <span className="text-[10px] tracking-wider font-bold">№ 1894</span>
          </div>

          <div className="relative group cursor-default w-12 h-12 rounded-full bg-linear-to-br from-(--auth-input-focus) to-(--auth-btn-hover) flex items-center justify-center shadow-md border border-(--auth-text-muted)/20 overflow-hidden transition-colors duration-500">
            <div className="relative w-9 h-9 rounded-full border border-white/20 bg-linear-to-tr from-black/10 to-transparent flex items-center justify-center shadow-inner">
              <Heart className="w-4 h-4 text-(--auth-btn-icon) fill-current drop-shadow-sm opacity-90 transition-colors duration-500" />
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none stroke-black/20"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 25 2 L 23 16 L 27 22 L 21 34 L 26 48"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Epistolary Header */}
        <div className="relative z-10 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-(--auth-badge-bg) text-(--auth-badge-text) text-[10px] font-bold uppercase tracking-[0.14em] mb-3 transition-colors duration-500">
            <Edit3 className="w-3 h-3" />
            Stationery Ledger • Folio I
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-(--auth-text-heading) italic font-medium tracking-tight transition-colors duration-500">
            A New Inscription,
          </h1>
          <p className="font-body text-sm text-(--auth-text-muted) mt-2 italic transition-colors duration-500">
            Set your vows in unyielding wax and timeless parchment.
          </p>
        </div>

        {/* Main Form Sheet */}
        <form
          onSubmit={handleSubmit(signup)}
          className="relative z-10 flex flex-col space-y-5"
        >
          {/* Full Name Field */}
          <div className="flex flex-col group relative">
            <label
              className="text-[10px] font-bold text-(--auth-text-muted) uppercase tracking-[0.12em] transition-colors group-focus-within:text-(--auth-input-focus)"
              htmlFor="name"
            >
              Your Moniker
            </label>
            <div className="relative mt-1">
              <input
                {...register("name")}
                id="name"
                type="text"
                placeholder="Celeste"
                className="w-full bg-transparent border-0 border-b-2 border-(--auth-input-border) py-1.5 text-lg font-display text-(--auth-text-heading) placeholder:text-(--auth-text-muted)/50 placeholder:italic focus:outline-none focus:border-(--auth-input-focus) transition-all duration-300"
              />
              <User className="absolute right-1 bottom-2 w-4 h-4 text-(--auth-text-muted)/40 group-focus-within:text-(--auth-input-focus) transition-colors" />
            </div>
            {errors.name && (
              <span className="text-destructive text-xs mt-1 font-medium">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col group relative">
            <label
              className="text-[10px] font-bold text-(--auth-text-muted) uppercase tracking-[0.12em] transition-colors group-focus-within:text-(--auth-input-focus)"
              htmlFor="email"
            >
              Delivery Address
            </label>
            <div className="relative mt-1">
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="celeste@parchmentandquill.com"
                className="w-full bg-transparent border-0 border-b-2 border-(--auth-input-border) py-1.5 text-lg font-display text-(--auth-text-heading) placeholder:text-(--auth-text-muted)/50 placeholder:italic focus:outline-none focus:border-(--auth-input-focus) transition-all duration-300"
              />
              <Mail className="absolute right-1 bottom-2 w-4 h-4 text-(--auth-text-muted)/40 group-focus-within:text-(--auth-input-focus) transition-colors" />
            </div>
            {errors.email && (
              <span className="text-destructive text-xs mt-1 font-medium">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col group relative">
            <label
              className="text-[10px] font-bold text-(--auth-text-muted) uppercase tracking-[0.12em] transition-colors group-focus-within:text-(--auth-input-focus)"
              htmlFor="password"
            >
              Chosen Cipher
            </label>
            <div className="relative mt-1">
              <input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••"
                className="w-full bg-transparent border-0 border-b-2 border-(--auth-input-border) py-1.5 text-lg font-display text-(--auth-text-heading) placeholder:text-(--auth-text-muted)/50 focus:outline-none focus:border-(--auth-input-focus) tracking-widest transition-all duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-1 bottom-2 text-(--auth-text-muted)/40 hover:text-(--auth-input-focus) focus:outline-none transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-destructive text-xs mt-1 font-medium">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Primary Action Button */}
          <div className="pt-2 flex justify-center sm:justify-start">
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-(--auth-btn-bg) hover:bg-(--auth-btn-hover) text-(--auth-btn-text) shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <CheckCircle2 className="w-5 h-5 text-(--auth-btn-icon) group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-bold tracking-[0.08em] uppercase">
                {isSubmitting ? "Inscribing..." : "Seal Account"}
              </span>
            </button>
          </div>
        </form>

        {/* Bottom Epistolary Toggle Link */}
        <div className="relative z-10 mt-6 pt-4 text-center">
          <Link
            href="/login"
            className="text-sm text-(--auth-text-muted) hover:text-(--auth-input-focus) italic transition-colors focus:outline-none underline decoration-(--auth-input-focus)/30 underline-offset-4"
          >
            Already pledged your ink? Open your sealed letter (Sign In)
          </Link>
        </div>

        {/* Subtle Antique Watermark / Monogram */}
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-(--auth-input-border)/40 flex items-center justify-center opacity-30 pointer-events-none select-none transition-colors duration-500">
          <span className="font-display text-[64px] italic text-(--auth-text-heading) opacity-20">
            L
          </span>
        </div>
      </div>
    </div>
  );
}
