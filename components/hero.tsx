import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils"

export default function Hero() {
  return (
    <section id="hero" className="relative bg-white dark:bg-black min-h-[100dvh] py-24 sm:py-0 flex flex-col justify-center items-center overflow-hidden z-0 fade-in">
      
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-neutral-400/20 dark:bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid overlay for technical texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center">
          
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-black dark:text-white">
              Tyrone Orrego
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-black/60 dark:text-white/60 font-light tracking-tight">
              Technical Writer
            </p>
          </div>

          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-black/50 dark:text-white/50 leading-relaxed font-light">
            Specializing in developer documentation, API guides, and knowledge bases that developers actually read and understand.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 pt-8 pb-4">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-5xl sm:text-6xl font-light text-black dark:text-white tabular-nums tracking-tighter">4+</p>
              <p className="text-xs sm:text-sm text-black/40 dark:text-white/40 font-medium uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="w-px h-16 bg-black/10 dark:bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center space-y-2">
              <p className="text-5xl sm:text-6xl font-light text-black dark:text-white tabular-nums tracking-tighter">90+</p>
              <p className="text-xs sm:text-sm text-black/40 dark:text-white/40 font-medium uppercase tracking-widest">Documents</p>
            </div>
            <div className="w-px h-16 bg-black/10 dark:bg-white/10 hidden sm:block" />
            <div className="flex flex-col items-center space-y-2">
              <p className="text-5xl sm:text-6xl font-light text-black dark:text-white tabular-nums tracking-tighter">3</p>
              <p className="text-xs sm:text-sm text-black/40 dark:text-white/40 font-medium uppercase tracking-widest">Languages</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8 w-full sm:w-auto justify-center">
            <Button
              asChild
              className="bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 h-14 px-10 rounded-full font-medium text-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("projects")
                }}
              >
                View Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 px-10 rounded-full font-medium text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:scale-105 active:scale-95 border-black/10 dark:border-white/10 bg-transparent cursor-pointer"
            >
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                Get in Touch
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="h-14 px-8 rounded-full font-medium text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer"
            >
              <a
                href="https://drive.google.com/file/d/1WT-RDldEQPLuSl4QfXlfLc4tBtSEC-Ze/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
              >
                <Download className="h-5 w-5 mr-2" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-black/30 dark:text-white/30 uppercase tracking-widest font-medium">Scroll</span>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("about")
          }}
          className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
