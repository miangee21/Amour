// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  // --- Auth tables (authAccounts, authSessions, authRefreshTokens,
  // authVerificationCodes, authRateLimits) come from here automatically.
  // We override `users` below to add our own required fields.
  ...authTables,

  users: defineTable({
    name: v.string(), // full name, captured at signup — see Step 4 auth.ts
    email: v.string(),
    emailVerificationTime: v.optional(v.number()),
    image: v.optional(v.string()),
    isAnonymous: v.optional(v.boolean()),
  }).index("by_email", ["email"]),

  letters: defineTable({
    authorId: v.id("users"),

    // Slug is intentionally optional: a fresh draft has no public link
    // until the author explicitly shares it (Step 15). The original
    // schema made this required, which is inconsistent with "draft"
    // status ever existing.
    slug: v.optional(v.string()),

    template: v.union(
      v.literal("love"),
      v.literal("sorry"),
      v.literal("milestone"),
    ),
    language: v.union(v.literal("en"), v.literal("ur")),

    // Font id must exist in features/editor/utils/fonts.ts's registry —
    // validated at the mutation layer (Step 11c), not via a schema
    // literal union, so adding a new font never requires a schema change.
    font: v.string(),

    recipientName: v.optional(v.string()),
    rawContent: v.string(), // typed content (roman/english as typed)
    renderedContent: v.string(), // final content to display (post-transliteration)

    status: v.union(v.literal("draft"), v.literal("shared")),

    expiryOption: v.union(
      v.literal("never"),
      v.literal("1day"),
      v.literal("7days"),
      v.literal("30days"),
    ),

    // Timestamp of the *first* share action. expiresAt must be computed
    // from sharedAt, not createdAt — a letter drafted for three days and
    // then shared with a "1 day" expiry should expire one day after
    // sharing, not one day after the draft was created. Original schema
    // was missing this and would have expired letters incorrectly.
    sharedAt: v.optional(v.number()),
    expiresAt: v.optional(v.number()),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_author", ["authorId"])
    // Compound index powers the dashboard's "Shared by me" tab filter
    // with a real server-side paginated query instead of fetching
    // everything and filtering client-side (see Step 9).
    .index("by_author_status", ["authorId", "status"])
    .index("by_slug", ["slug"]),
});
