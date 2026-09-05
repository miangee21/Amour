//convex/letters.ts
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getMyLetters = query({
  args: {
    tab: v.union(v.literal("all"), v.literal("shared")),
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    // 1. Verify Authentication
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not authenticated");
    }

    // 2. Fetch Shared Letters using Compound Index
    if (args.tab === "shared") {
      return await ctx.db
        .query("letters")
        .withIndex("by_author_status", (q) =>
          q.eq("authorId", userId).eq("status", "shared"),
        )
        .order("desc")
        .paginate(args.paginationOpts);
    }

    // 3. Fetch All Letters using Single Index
    return await ctx.db
      .query("letters")
      .withIndex("by_author", (q) => q.eq("authorId", userId))
      .order("desc")
      .paginate(args.paginationOpts);
  },
});

export const createDraft = mutation({
  args: {
    template: v.union(
      v.literal("love"),
      v.literal("sorry"),
      v.literal("milestone"),
    ),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      throw new Error("Not authenticated");
    }

    const now = Date.now();

    return await ctx.db.insert("letters", {
      authorId: userId,
      template: args.template,
      language: "en",
      font: "cormorant-garamond",
      rawContent: "",
      renderedContent: "",
      status: "draft",
      expiryOption: "never",
      createdAt: now,
      updatedAt: now,
    });
  },
});
