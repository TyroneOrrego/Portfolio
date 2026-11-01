import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-md bg-black/[0.07] dark:bg-white/[0.08]",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
