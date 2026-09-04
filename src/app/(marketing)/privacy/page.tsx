//src/app/(marketing)/privacy/page.tsx
import Image from "next/image";
import { CustomScrollbar } from "@/shared/components/CustomScrollbar";
import { FloatingThemeToggle } from "@/features/theme/components/FloatingThemeToggle";
import { AmbientPaperDetails } from "@/shared/components/AmbientPaperDetails";
import { DecorativeImage } from "@/shared/components/DecorativeImage";

export default function PrivacyPage() {
  return (
    <CustomScrollbar className="h-screen w-full flex flex-col bg-paper-page-background relative overflow-x-hidden">
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 relative z-10 flex justify-center">
        <AmbientPaperDetails />

        {/* Scroll Container */}
        <div className="relative w-full max-w-3xl min-h-225 flex flex-col items-center mt-8">
          {/* Theme Toggle mapped to paper top right */}
          <div className="absolute top-1 -right-28 sm:-right-36 z-50">
            <FloatingThemeToggle />
          </div>
          {/* Main Paper Background */}
          <Image
            src="/paper-theme/paper.webp"
            alt="Parchment Paper"
            fill
            priority
            sizes="(min-width: 768px) 48rem, 100vw"
            className="paper-background absolute inset-0 object-fill z-0 pointer-events-none"
          />

          {/* Decorative Assets (Absolute positioned) */}
          <DecorativeImage
            src="/paper-theme/leaf-flourish.svg"
            alt="Top Flourish"
            width={64}
            height={32}
            className="absolute top-1 sm:top-1 left-1/2 -translate-x-1/2 -ml-3 sm:-ml-4 w-14 sm:w-16 h-auto opacity-75 mix-blend-multiply pointer-events-none z-10"
            style={{ height: "auto" }}
          />
          <Image
            src="/paper-theme/page_top_right_badge.svg"
            alt="Stamp"
            width={128}
            height={128}
            className="absolute top-22 sm:top-26 right-9 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 opacity-70 mix-blend-multiply pointer-events-none z-10"
          />

          {/* Right side flower and tape */}
          <div className="absolute top-[34%] right-4 sm:right-2 z-30 hidden md:flex flex-col items-center pointer-events-none">
            <DecorativeImage
              src="/paper-theme/flower.webp"
              alt="Flower"
              width={160}
              height={300}
              className="relative z-0 w-28 sm:w-40 h-auto drop-shadow-xl -rotate-3"
              style={{ height: "auto" }}
            />
            <DecorativeImage
              src="/paper-theme/tape.webp"
              alt="Tape"
              width={80}
              height={40}
              className="absolute top-[55%] z-999 w-16 sm:w-20 h-auto opacity-100 rotate-3 mix-blend-normal"
              style={{ height: "auto" }}
            />
          </div>

          {/* Scattered Petals */}
          <DecorativeImage
            src="/paper-theme/petals.webp"
            alt="Petal"
            width={48}
            height={48}
            className="absolute top-10 left-8 sm:left-2 w-8 sm:w-12 h-auto drop-shadow-md z-20 pointer-events-none -rotate-12"
          />
          <DecorativeImage
            src="/paper-theme/petals_2.webp"
            alt="Petal"
            width={32}
            height={32}
            className="absolute top-[28%] left-12 sm:left-16 w-6 sm:w-8 h-auto drop-shadow-sm opacity-80 z-20 pointer-events-none rotate-45"
            style={{ height: "auto" }}
          />
          <DecorativeImage
            src="/paper-theme/petals_3.webp"
            alt="Petal"
            width={36}
            height={36}
            className="absolute bottom-[30%] left-6 sm:left-10 w-7 sm:w-9 h-auto drop-shadow-md z-20 pointer-events-none -rotate-45"
            style={{ height: "auto" }}
          />
          <DecorativeImage
            src="/paper-theme/petals.webp"
            alt="Petal"
            width={40}
            height={40}
            className="absolute bottom-48 right-12 sm:right-20 w-6 sm:w-10 h-auto drop-shadow-sm z-20 pointer-events-none rotate-90 opacity-90"
          />
          <DecorativeImage
            src="/paper-theme/petals_2.webp"
            alt="Petal"
            width={28}
            height={28}
            className="absolute top-[60%] right-8 sm:right-14 w-5 sm:w-7 h-auto drop-shadow-sm opacity-70 z-20 pointer-events-none rotate-12"
          />

          {/* Content Wrapper */}
          <div className="relative z-20 w-full px-12 sm:px-24 pt-28 pb-32 flex flex-col">
            {/* Header */}
            <div className="text-center mb-12 space-y-3">
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-primary/70 dark:text-ring uppercase">
                Privacy Policy
              </span>
              <h1 className="font-display text-4xl sm:text-5xl text-paper-heading font-medium tracking-tight">
                Privacy Policy
              </h1>
              <div className="flex justify-center pt-3">
                <DecorativeImage
                  src="/paper-theme/line-leaf-line.svg"
                  alt="Divider"
                  width={256}
                  height={24}
                  className="w-48 sm:w-64 h-auto opacity-70 pointer-events-none"
                  style={{ height: "auto" }}
                />
              </div>
            </div>

            {/* Typography & Rules */}
            <div className="space-y-10 text-paper-text font-body text-sm sm:text-base leading-relaxed">
              <p className="-mt-2 text-center mb-10 max-w-lg mx-auto font-display italic text-lg sm:text-xl text-paper-muted">
                This policy outlines how we handle your data at{" "}
                <span className="text-primary font-semibold not-italic">
                  Amour
                </span>
                . Your privacy and trust are our top priorities.
              </p>

              {/* Step 1 */}
              <div className="space-y-3">
                <h2 className="font-display text-xl sm:text-2xl text-primary font-medium flex items-center gap-2">
                  <span className="text-primary/50 text-lg">1.</span>{" "}
                  Information We Collect
                </h2>
                <p className="pl-6 sm:pl-7 opacity-90">
                  We only collect the information necessary to deliver our
                  service, including your letter content, styling preferences,
                  and basic account details. For service rules, see our{" "}
                  <a
                    href="/terms"
                    className="text-primary hover:underline font-medium"
                  >
                    Terms of Service
                  </a>
                  .
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <h2 className="font-display text-xl sm:text-2xl text-primary font-medium flex items-center gap-2">
                  <span className="text-primary/50 text-lg">2.</span> How We Use
                  Data
                </h2>
                <p className="pl-6 sm:pl-7 opacity-90">
                  Your data is strictly used to generate, store, and securely
                  deliver your digital letters. We never sell your personal
                  information or letter content to third parties.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <h2 className="font-display text-xl sm:text-2xl text-primary font-medium flex items-center gap-2">
                  <span className="text-primary/50 text-lg">3.</span> Data
                  Security
                </h2>
                <p className="pl-6 sm:pl-7 opacity-90">
                  We implement robust, industry-standard security measures and
                  encryption to ensure that your private letters and personal
                  information remain secure at all times.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-3">
                <h2 className="font-display text-xl sm:text-2xl text-primary font-medium flex items-center gap-2">
                  <span className="text-primary/50 text-lg">4.</span> Cookies &
                  Tracking
                </h2>
                <p className="pl-6 sm:pl-7 opacity-90">
                  Amour uses minimal, essential cookies required to keep you
                  logged in and maintain platform functionality. We do not use
                  intrusive third-party tracking.
                </p>
              </div>

              {/* Step 5 */}
              <div className="space-y-3">
                <h2 className="font-display text-xl sm:text-2xl text-primary font-medium flex items-center gap-2">
                  <span className="text-primary/50 text-lg">5.</span> Your
                  Rights
                </h2>
                <p className="pl-6 sm:pl-7 opacity-90">
                  You maintain full control over your data. You can request to
                  view, modify, or permanently delete your account and
                  associated letters at any time.
                </p>
              </div>
            </div>

            {/* Footer / Signoff */}
            <div className="mt-8 sm:mt-12 text-center flex flex-col items-center">
              <div className="flex justify-center mb-6">
                <DecorativeImage
                  src="/paper-theme/line-leaf-line-2.svg"
                  alt="Divider"
                  width={224}
                  height={24}
                  className="w-40 sm:w-56 h-auto opacity-60 pointer-events-none"
                  style={{ height: "auto" }}
                />
              </div>
              <div className="relative -top-6 font-display italic text-lg sm:text-xl text-paper-muted -mb-3">
                With care,
              </div>
              <div className="relative -top-6 font-letter-en italic text-3xl sm:text-4xl text-paper-heading font-semibold tracking-wide z-10">
                Amour <span className="text-primary text-2xl">♥</span>
              </div>
            </div>
          </div>

          {/* Bottom Wax Seal */}
          <DecorativeImage
            src="/paper-theme/wax.webp"
            alt="Wax Seal"
            width={128}
            height={128}
            className="absolute bottom-1 sm:bottom-5 w-24 sm:w-32 h-auto drop-shadow-(--paper-wax-shadow) z-40 pointer-events-none"
          />
        </div>
      </main>
    </CustomScrollbar>
  );
}
