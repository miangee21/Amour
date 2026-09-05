//src/features/letters/components/LetterListSkeleton.tsx
export function LetterListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className="h-55 rounded-2xl border border-border/50 bg-surface-elevated/50 p-6 flex flex-col animate-pulse"
        >
          {/* Header Skeleton */}
          <div className="flex justify-between items-start mb-6">
            <div className="w-20 h-6 bg-surface rounded-full"></div>
            <div className="w-8 h-8 bg-surface rounded-full"></div>
          </div>

          {/* Body Skeleton */}
          <div className="space-y-3 mb-auto mt-2">
            <div className="w-4/5 h-6 bg-surface rounded-md"></div>
            <div className="w-2/3 h-4 bg-surface rounded-md"></div>
          </div>

          {/* Footer Skeleton */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/50">
            <div className="w-24 h-3 bg-surface rounded-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
