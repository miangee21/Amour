//src/features/letters/components/LetterListSkeleton.tsx
export function LetterListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="h-55 rounded-xl border border-border bg-surface-elevated p-5 flex flex-col animate-pulse"
        >
          {/* Header Skeleton */}
          <div className="flex justify-between items-start mb-4">
            <div className="w-24 h-5 bg-border rounded-md"></div>
            <div className="w-16 h-5 bg-border rounded-full"></div>
          </div>

          {/* Body Skeleton */}
          <div className="space-y-2 mb-auto">
            <div className="w-3/4 h-4 bg-border rounded-md"></div>
            <div className="w-1/2 h-4 bg-border rounded-md"></div>
          </div>

          {/* Footer Skeleton */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
            <div className="w-20 h-4 bg-border rounded-md"></div>
            <div className="w-8 h-8 bg-border rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
