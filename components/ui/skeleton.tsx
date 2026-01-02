import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse bg-black/5 dark:bg-white/5 rounded", className)} {...props} />
}

export { Skeleton }

