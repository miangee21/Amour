//convex/letters.ts
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getTabCounts = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return { all: 0, shared: 0 };

    // Professional Way: O(1) read from user document instead of counting rows
    const user = await ctx.db.get(userId);
    const stats = user?.stats || { total: 0, shared: 0 };

    return { all: stats.total, shared: stats.shared };
  },
});

export const getMyLetters = query({
  args: {
    tab: v.union(v.literal("all"), v.literal("shared")),
    paginationOpts: paginationOptsValidator,
    searchQuery: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Not authenticated");

    // Handle Search Queries via Search Index
    if (args.searchQuery) {
      if (args.tab === "shared") {
        return await ctx.db
          .query("letters")
          .withSearchIndex("search_content", (q) =>
            q
              .search("searchMeta", args.searchQuery as string)
              .eq("authorId", userId)
              .eq("status", "shared"),
          )
          .paginate(args.paginationOpts);
      } else {
        return await ctx.db
          .query("letters")
          .withSearchIndex("search_content", (q) =>
            q
              .search("searchMeta", args.searchQuery as string)
              .eq("authorId", userId),
          )
          .paginate(args.paginationOpts);
      }
    }

    // Standard fetching if no search query
    if (args.tab === "shared") {
      return await ctx.db
        .query("letters")
        .withIndex("by_author_status", (q) =>
          q.eq("authorId", userId).eq("status", "shared"),
        )
        .order("desc")
        .paginate(args.paginationOpts);
    }

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

    // Increment user total letters counter
    const user = await ctx.db.get(userId);
    const currentStats = user?.stats || { total: 0, shared: 0 };
    await ctx.db.patch(userId, {
      stats: { ...currentStats, total: currentStats.total + 1 },
    });

    return await ctx.db.insert("letters", {
      authorId: userId,
      template: args.template,
      language: "en",
      font: "cormorant-garamond",
      rawContent: "",
      renderedContent: "",
      searchMeta: "untitled",
      status: "draft",
      expiryOption: "never",
      createdAt: now,
      updatedAt: now,
    });
  },
});
