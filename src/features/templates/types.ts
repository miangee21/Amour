//src/features/templates/types.ts
export type TemplateId = "love" | "sorry" | "milestone";

export interface TemplateMeta {
  id: TemplateId;
  title: string;
  description: string;
  icon: "heart" | "feather" | "sparkles";
  tagline: string;
  glowStyle: string;
  previewDotClass: string;
  previewLabel1: string;
  previewLabel2: string;
  previewQuote: string;
  buttonText: string;
}

export const TEMPLATES: TemplateMeta[] = [
  {
    id: "love",
    title: "Love Letter",
    description:
      "For the person who has your whole heart. Crafted for deepest affection, enduring promises, and romantic prose.",
    icon: "heart",
    tagline: "✦ Most Cherished",
    glowStyle: "bg-primary/20",
    previewDotClass: "bg-primary",
    previewLabel1: "Wax Seal: Crimson Rose",
    previewLabel2: "180 gsm vellum",
    previewQuote:
      "To my favorite soul, every sunrise quietly reminds me of why I fell in love with you, all over again...",
    buttonText: "Select Love Canvas",
  },
  {
    id: "sorry",
    title: "Sorry Letter",
    description:
      "For when words are overdue and apologies are needed. Designed with humility, soft spacing, and compassionate pacing.",
    icon: "feather",
    tagline: "Quiet & Tender",
    glowStyle: "bg-accent/20",
    previewDotClass: "bg-accent",
    previewLabel1: "Pacing: Gentle Read",
    previewLabel2: "Warm linen deckle",
    previewQuote:
      "I've spent the quiet moments looking inward, and there are truths I owe you that only deliberate ink can carry...",
    buttonText: "Select Sorry Canvas",
  },
  {
    id: "milestone",
    title: "Milestone & Memory",
    description:
      "For anniversaries, quiet milestones, and cherished shared chapters. Keep timeless memories anchored in golden prose.",
    icon: "sparkles",
    tagline: "✦ Anniversaries & Beyond",
    glowStyle: "bg-accent/30",
    previewDotClass: "bg-accent",
    previewLabel1: "Time Capsule: 5 Years",
    previewLabel2: "Gilded edge paper",
    previewQuote:
      "Three hundred and sixty-five days since that train station kiss, and the world has never spun the same...",
    buttonText: "Select Memory Canvas",
  },
];
