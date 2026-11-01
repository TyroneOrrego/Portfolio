import { Skeleton } from "@/components/ui/skeleton"

/**
 * Skeleton for Hero section matching typography scale,
 * background grid texture, stats layout, and action button shapes.
 */
export function HeroSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="relative bg-white dark:bg-black min-h-[100dvh] py-24 sm:py-0 flex flex-col justify-center items-center overflow-hidden z-0"
    >
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-neutral-400/20 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid overlay texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center w-full">
          {/* Headline name & Senior Technical Writer role */}
          <div className="space-y-4 flex flex-col items-center w-full">
            <Skeleton className="h-16 sm:h-20 md:h-24 lg:h-28 w-72 sm:w-[480px] md:w-[620px] max-w-[90%] rounded-2xl" />
            <Skeleton className="h-7 sm:h-9 md:h-10 w-56 sm:w-72 md:w-80 rounded-xl" />
          </div>

          {/* Subtitle / summary paragraph */}
          <div className="w-full max-w-3xl space-y-3 flex flex-col items-center pt-1">
            <Skeleton className="h-5 sm:h-6 w-full rounded-lg" />
            <Skeleton className="h-5 sm:h-6 w-11/12 rounded-lg" />
            <Skeleton className="h-5 sm:h-6 w-3/4 rounded-lg hidden sm:block" />
          </div>

          {/* Experience stats with dividers */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 pt-8 pb-4">
            <div className="flex flex-col items-center space-y-2">
              <Skeleton className="h-12 sm:h-14 w-16 sm:w-20 rounded-xl" />
              <Skeleton className="h-3.5 w-24 sm:w-28 rounded-md" />
            </div>
            <div className="w-px h-16 bg-black/10 dark:bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center space-y-2">
              <Skeleton className="h-12 sm:h-14 w-16 sm:w-20 rounded-xl" />
              <Skeleton className="h-3.5 w-20 sm:w-24 rounded-md" />
            </div>
            <div className="w-px h-16 bg-black/10 dark:bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center space-y-2">
              <Skeleton className="h-12 sm:h-14 w-10 sm:w-12 rounded-xl" />
              <Skeleton className="h-3.5 w-20 sm:w-24 rounded-md" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8 w-full sm:w-auto justify-center items-center">
            <Skeleton className="h-14 w-full sm:w-36 rounded-full" />
            <div className="h-14 w-full sm:w-40 rounded-full border border-black/10 dark:border-white/10 p-1 flex items-center justify-center">
              <Skeleton className="h-5 w-24 rounded-full" />
            </div>
            <Skeleton className="h-14 w-full sm:w-32 rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <Skeleton className="h-3 w-12 rounded" />
        <div className="w-9 h-9 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center">
          <Skeleton className="w-4 h-4 rounded-full" />
        </div>
      </div>
    </section>
  )
}

/**
 * Individual Project Card Skeleton matching ProjectCard's rounded-2xl frame,
 * top tag badge, circular link button, title, description, and footer pills.
 */
export function ProjectCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between
        bg-black/[0.02] dark:bg-white/[0.02]
        border border-black/10 dark:border-white/10
        min-h-[340px]"
    >
      <div>
        {/* Header: Category Tag + External Link Icon Circle */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Skeleton className="h-3.5 w-24 rounded" />
          <div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
            <Skeleton className="w-3.5 h-3.5 rounded-sm" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3 mb-6">
          <Skeleton className="h-6 w-4/5 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-full rounded" />
            <Skeleton className="h-3.5 w-full rounded" />
            <Skeleton className="h-3.5 w-3/4 rounded" />
          </div>
        </div>
      </div>

      {/* Footer: Tags & Link Action */}
      <div className="pt-4 border-t border-black/10 dark:border-white/10 mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>

        <div className="pt-1 flex items-center gap-2">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="w-3.5 h-3.5 rounded-sm" />
        </div>
      </div>
    </div>
  )
}

/**
 * Projects Section Skeleton matching the 3-column responsive card grid.
 */
export function ProjectsSkeleton() {
  return (
    <section aria-hidden="true" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <Skeleton className="h-8 md:h-9 w-44 rounded-lg" />
            <div className="h-6 w-24 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center">
              <Skeleton className="h-3 w-16 rounded-full" />
            </div>
          </div>

          <div className="h-px w-12 bg-black/20 dark:bg-white/20 mb-4" />

          <div className="space-y-2 max-w-2xl">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-4/5 rounded" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * About Section Skeleton matching the 2-column split (bio text + stats cards).
 */
export function AboutSkeleton() {
  return (
    <section aria-hidden="true" className="py-16 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text & CTA */}
          <div>
            <div className="mb-8">
              <Skeleton className="h-9 md:h-10 w-32 rounded-lg mb-4" />
              <div className="h-px w-16 bg-black/10 dark:bg-white/10 mb-6" />
            </div>

            <div className="space-y-6">
              <div className="space-y-2.5">
                <Skeleton className="h-4.5 w-full rounded" />
                <Skeleton className="h-4.5 w-full rounded" />
                <Skeleton className="h-4.5 w-11/12 rounded" />
                <Skeleton className="h-4.5 w-4/5 rounded" />
              </div>
              <div className="space-y-2.5">
                <Skeleton className="h-4.5 w-full rounded" />
                <Skeleton className="h-4.5 w-full rounded" />
                <Skeleton className="h-4.5 w-5/6 rounded" />
              </div>
            </div>

            <div className="mt-10">
              <Skeleton className="h-12 w-36 rounded-full" />
            </div>
          </div>

          {/* Right Column: Visual Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl flex flex-col justify-center border border-black/5 dark:border-white/5">
              <Skeleton className="h-12 w-16 rounded-xl mb-2" />
              <Skeleton className="h-4 w-28 rounded" />
            </div>
            <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl flex flex-col justify-center border border-black/5 dark:border-white/5">
              <Skeleton className="h-12 w-16 rounded-xl mb-2" />
              <Skeleton className="h-4 w-32 rounded" />
            </div>
            <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl flex flex-col justify-center col-span-2 border border-black/5 dark:border-white/5">
              <Skeleton className="h-5 w-32 rounded mb-4" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-28 rounded-full" />
                <Skeleton className="h-8 w-32 rounded-full" />
                <Skeleton className="h-8 w-36 rounded-full" />
                <Skeleton className="h-8 w-32 rounded-full" />
                <Skeleton className="h-8 w-32 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Skills Section Skeleton matching the 3-column layout (Expertise, Tools, Languages).
 */
export function SkillsSkeleton() {
  return (
    <section aria-hidden="true" className="py-24 md:py-32 lg:py-40 bg-black/5 dark:bg-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24">
          <Skeleton className="h-12 sm:h-14 md:h-16 w-44 rounded-xl mb-6" />
          <Skeleton className="h-5 w-full max-w-2xl rounded" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Expertise Column with left borders */}
          <div>
            <Skeleton className="h-3.5 w-24 rounded mb-10" />
            <div className="space-y-5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border-l-2 border-black/20 dark:border-white/20 pl-5">
                  <Skeleton className="h-5 w-44 max-w-[80%] rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Tools Column with badges */}
          <div>
            <Skeleton className="h-3.5 w-16 rounded mb-10" />
            <div className="flex flex-wrap gap-3">
              {[20, 24, 20, 16, 28, 16, 14, 20, 16, 28, 12].map((w, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 flex items-center"
                >
                  <Skeleton className="h-4 w-16 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div>
            <Skeleton className="h-3.5 w-28 rounded mb-10" />
            <div className="space-y-6">
              {[
                { nameW: "w-20", levelW: "w-16" },
                { nameW: "w-20", levelW: "w-24" },
                { nameW: "w-16", levelW: "w-24" },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <Skeleton className={`h-5 ${item.nameW} rounded`} />
                  <Skeleton className={`h-4 ${item.levelW} rounded`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Writing Showcase Section Skeleton matching the 2-column list of writing sample cards.
 */
export function WritingShowcaseSkeleton() {
  return (
    <section aria-hidden="true" className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <Skeleton className="h-8 md:h-9 w-28 rounded-lg mb-3" />
          <div className="h-px w-12 bg-black/10 dark:border-white/10 mb-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border-b border-black/10 dark:border-white/10 pb-8">
              <div className="mb-4">
                <Skeleton className="h-6 w-3/4 rounded-lg mb-3" />
                <div className="space-y-2 mb-4">
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-5/6 rounded" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Skeleton className="h-3.5 w-16 rounded" />
                  <Skeleton className="h-3.5 w-20 rounded" />
                  <Skeleton className="h-3.5 w-14 rounded" />
                  <Skeleton className="h-3.5 w-18 rounded" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-20 rounded" />
                <Skeleton className="w-3 h-3 rounded-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Simple Contact Section Skeleton matching the contact info rows.
 */
export function SimpleContactSkeleton() {
  return (
    <section aria-hidden="true" className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <Skeleton className="h-8 md:h-9 w-28 rounded-lg mb-3" />
          <div className="h-px w-12 bg-black/10 dark:bg-white/10 mb-4" />
        </div>

        <div className="max-w-2xl space-y-8">
          <Skeleton className="h-5 w-full max-w-lg rounded mb-6" />

          <div className="space-y-6">
            {[
              { labelW: "w-12", valueW: "w-52" },
              { labelW: "w-14", valueW: "w-36" },
              { labelW: "w-16", valueW: "w-40" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <Skeleton className="h-4 w-4 rounded-full mt-1 shrink-0" />
                <div className="space-y-2">
                  <Skeleton className={`h-3.5 ${item.labelW} rounded`} />
                  <Skeleton className={`h-5 ${item.valueW} rounded`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Footer Skeleton matching the 3 columns (Contact, Links, Connect) + bottom copyright bar.
 */
export function FooterSkeleton() {
  return (
    <footer aria-hidden="true" className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Column */}
          <div>
            <Skeleton className="h-4 w-16 rounded mb-4" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-3 w-3 rounded-full shrink-0" />
                  <Skeleton className="h-4 w-40 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <Skeleton className="h-4 w-14 rounded mb-4" />
            <div className="space-y-2.5">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-4 w-20 rounded" />
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <Skeleton className="h-4 w-16 rounded mb-4" />
            <div className="flex gap-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <Skeleton className="h-3.5 w-48 rounded" />
          <Skeleton className="h-3.5 w-32 rounded" />
        </div>
      </div>
    </footer>
  )
}

/**
 * Generic section skeleton fallback
 */
export function SectionSkeleton() {
  return (
    <div aria-hidden="true" className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <Skeleton className="h-8 w-48 mb-3 rounded-lg" />
          <Skeleton className="h-px w-12 mb-4" />
        </div>
        <div className="space-y-4 max-w-2xl">
          <Skeleton className="h-4 w-full rounded" />
          <Skeleton className="h-4 w-5/6 rounded" />
          <Skeleton className="h-4 w-4/6 rounded" />
        </div>
      </div>
    </div>
  )
}

// Aliases for convenience
export const WritingSkeleton = WritingShowcaseSkeleton
export const ContactSkeleton = SimpleContactSkeleton
