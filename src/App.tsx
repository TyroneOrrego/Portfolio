import { useEffect, Suspense, lazy } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import { ErrorBoundary } from "@/components/error-boundary"
import { useUI } from "@/contexts/ui-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { UIProvider } from "@/contexts/ui-context"
import { SkipLink } from "@/components/skip-link"

// Lazy load components for code splitting
const Hero = lazy(() => import("@/components/hero"))
const About = lazy(() => import("@/components/about"))
const Skills = lazy(() => import("@/components/skills"))
const Projects = lazy(() => import("@/components/projects"))
const WritingShowcase = lazy(() => import("@/components/writing-showcase"))
const SimpleContact = lazy(() => import("@/components/simple-contact"))
const Footer = lazy(() => import("@/components/footer"))

// Loading fallback components
import { SectionSkeleton, HeroSkeleton } from "@/components/section-skeleton"

const ComponentLoader = () => <SectionSkeleton />
const HeroLoader = () => <HeroSkeleton />

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

function AppContent() {
  const { setActiveSection } = useUI()

  useEffect(() => {
    // Subtle page entrance fade
    gsap.fromTo("main", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power1.out" })

    // Optimized intersection observer for section tracking
    const sections = document.querySelectorAll("section[id]")
    let rafId: number | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          const visibleEntry = entries.find((entry) => entry.isIntersecting && entry.intersectionRatio > 0.5)
          if (visibleEntry) {
            setActiveSection(visibleEntry.target.id)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: "-80px 0px",
      },
    )

    sections.forEach((section) => observer.observe(section))

    // Subtle fade-in animations for sections
    const initScrollAnimations = () => {
      const fadeElements = document.querySelectorAll(".fade-in")
      if (fadeElements.length === 0) return

      gsap.utils.toArray(fadeElements).forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          },
        )
      })
    }

    const timeoutId = setTimeout(initScrollAnimations, 100)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      clearTimeout(timeoutId)
      observer.disconnect()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [setActiveSection])

  return (
    <div className="min-h-screen">
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>

      <main id="main-content" role="main">
        <ErrorBoundary>
          <Suspense fallback={<HeroLoader />}>
            <Hero />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<ComponentLoader />}>
            <About />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<ComponentLoader />}>
            <Skills />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<ComponentLoader />}>
            <Projects />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<ComponentLoader />}>
            <WritingShowcase />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<ComponentLoader />}>
            <SimpleContact />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<ComponentLoader />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    // Add structured data script
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Tyrone Orrego",
      jobTitle: "Technical Writer",
      description: "Professional technical writer specializing in API documentation and user guides",
      url: "https://tyrone-orrego.vercel.app",
      sameAs: ["https://www.linkedin.com/in/tyrone-orrego/", "https://github.com/TyroneOrrego"],
      knowsAbout: [
        "Technical Writing",
        "API Documentation",
        "User Experience Writing",
        "Content Strategy",
        "Software Documentation",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Pontifical Bolivarian University",
      },
    })
    document.head.appendChild(script)
    
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <ThemeProvider>
      <UIProvider>
        <SkipLink />
        <AppContent />
      </UIProvider>
    </ThemeProvider>
  )
}

