//src/app/(marketing)/home/page.tsx
import { SiteNavbar } from "@/features/marketing/components/SiteNavbar";
import { HeroSection } from "@/features/marketing/components/HeroSection";
// import { TemplateShowcase } from "@/features/marketing/components/TemplateShowcase";
import { HowItWorks } from "@/features/marketing/components/HowItWorks";
import { SiteFooter } from "@/features/marketing/components/SiteFooter";
import { CustomScrollbar } from "@/shared/components/CustomScrollbar";

export default function HomePage() {
  return (
    <CustomScrollbar
      data-home-scroll
      className="h-screen w-full flex flex-col bg-background"
    >
      <SiteNavbar />
      <main className="flex-1 pt-12">
        <HeroSection />
        {/* <TemplateShowcase /> */}
        <HowItWorks />
      </main>
      <SiteFooter />
    </CustomScrollbar>
  );
}
