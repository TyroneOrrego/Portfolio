import { Circle, ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white dark:bg-black pt-16 z-0 fade-in">
      <div className="container mx-auto px-6 py-32 sm:py-40 md:py-48 lg:py-56 max-w-7xl">
        <div className="max-w-4xl">
          <div className="space-y-10">
            {/* Available badge - minimalistic with green dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
              <Circle className="h-2 w-2 fill-green-500 text-green-500" />
              <span className="text-sm font-normal text-black/60 dark:text-white/60">Available for new projects</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tighter leading-[0.9] text-black dark:text-white">
                Tyrone Orrego
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-black/60 dark:text-white/60 font-normal tracking-tight">
                Technical Writer
              </p>
            </div>

            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-black/60 dark:text-white/60 leading-relaxed">
              Specializing in developer documentation, API guides, and knowledge bases that developers actually read and
              understand.
            </p>

            {/* Stats with border-y layout */}
            <div className="flex flex-wrap gap-10 py-8 border-y border-black/10 dark:border-white/10">
              <div className="space-y-1">
                <p className="text-4xl sm:text-5xl font-normal text-black dark:text-white tabular-nums tracking-tight">3+</p>
                <p className="text-sm text-black/60 dark:text-white/60 font-normal uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl sm:text-5xl font-normal text-black dark:text-white tabular-nums tracking-tight">60+</p>
                <p className="text-sm text-black/60 dark:text-white/60 font-normal uppercase tracking-wide">Documents Authored</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl sm:text-5xl font-normal text-black dark:text-white tabular-nums tracking-tight">3</p>
                <p className="text-sm text-black/60 dark:text-white/60 font-normal uppercase tracking-wide">Languages</p>
              </div>
            </div>

            {/* CTAs - Minimalistic buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => {
                  const element = document.getElementById("projects")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80 h-12 px-8 font-normal transition-opacity"
              >
                View Work
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                variant="outline"
                className="h-12 px-8 font-normal hover:bg-black/5 dark:hover:bg-white/5 transition-opacity border-black/20 dark:border-white/20 bg-transparent"
              >
                Get in Touch
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-12 px-8 font-normal hover:bg-black/5 dark:hover:bg-white/5 transition-opacity"
              >
                <a
                  href="https://drive.google.com/file/d/1yBXLPK6xgUX1NyWbZ2ZL6o5dhyGmz5wC/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator - subtle, no bounce */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <button
            onClick={() => {
              const element = document.getElementById("about")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-opacity p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Subtle border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-black/10 dark:bg-white/10"></div>
    </section>
  )
}
