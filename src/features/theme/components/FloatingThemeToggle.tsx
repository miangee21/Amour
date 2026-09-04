//src/features/theme/components/FloatingThemeToggle.tsx
"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "motion/react";

export function FloatingThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative z-50 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-(--paper-toggle-background) border border-(--paper-toggle-border) shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden group focus:outline-none"
      aria-label="Toggle Theme"
    >
      {/* Paper texture overlay for light mode */}
      <div className="paper-toggle-texture absolute inset-0 bg-[url('/paper-theme/paper.webp')] bg-cover bg-center mix-blend-multiply pointer-events-none transition-opacity duration-500" />

      {/* Inner double border ring for light mode */}
      <div className="absolute inset-0.75 rounded-full border border-(--paper-toggle-inner-border) pointer-events-none transition-colors duration-500" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 15, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -15, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative z-10"
        >
          {isDark ? (
            // Elegant Sun Icon for Dark Mode
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-(--theme-toggle-sun)"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 3v1M12 20v1M5.636 5.636l.707.707M17.657 17.657l.707.707M3 12h1M20 12h1M5.636 18.364l.707-.707M17.657 6.343l.707-.707" />
            </svg>
          ) : (
            // Solid Moon with Stars for Light Mode
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-(--theme-toggle-moon)"
            >
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              <circle cx="17.5" cy="6.5" r="1.2" />
              <circle cx="21" cy="10" r="1.5" />
              <circle cx="16" cy="11" r="0.8" />
            </svg>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
