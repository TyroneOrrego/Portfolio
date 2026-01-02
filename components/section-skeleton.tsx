import { Skeleton } from "@/components/ui/skeleton"

export function SectionSkeleton() {
  return (
    <div className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <Skeleton className="h-8 w-48 mb-3" />
          <Skeleton className="h-px w-12 mb-4" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <Skeleton className="h-16 w-96 mx-auto" />
            <Skeleton className="h-6 w-48 mx-auto" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 pt-8">
            <div className="text-center space-y-2">
              <Skeleton className="h-12 w-16 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
            <div className="text-center space-y-2">
              <Skeleton className="h-12 w-16 mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
            <div className="text-center space-y-2">
              <Skeleton className="h-12 w-12 mx-auto" />
              <Skeleton className="h-4 w-20 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

