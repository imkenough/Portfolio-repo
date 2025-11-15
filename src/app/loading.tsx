import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] p-4 md:p-8">
      {/* Hero Section Skeleton */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-28 bg-background border-b border-gray-300 dark:border-gray-800 flex flex-col items-center justify-center space-y-4">
        <Skeleton className="h-10 w-3/4 max-w-md" />
        <Skeleton className="h-6 w-1/2 max-w-sm" />
        <div className="flex gap-4 mt-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </section>

      {/* Featured Projects Section Skeleton */}
      <section className="py-8 sm:py-12 md:py-20 bg-background flex flex-col items-center justify-center space-y-4">
        <Skeleton className="h-10 w-1/3 max-w-xs" />
        <Skeleton className="h-6 w-2/3 max-w-md" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mt-8">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="py-8 sm:py-12 md:py-20 bg-muted/50 flex flex-col items-center justify-center space-y-4">
        <Skeleton className="h-10 w-1/3 max-w-xs" />
        <Skeleton className="h-6 w-2/3 max-w-md" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mt-8">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </section>

      {/* Call to Action Skeleton */}
      <section className="py-20 bg-background flex flex-col items-center justify-center space-y-4">
        <Skeleton className="h-10 w-1/2 max-w-sm" />
        <Skeleton className="h-6 w-2/3 max-w-md" />
        <div className="flex gap-4 mt-4">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-40" />
        </div>
      </section>
    </div>
  );
}