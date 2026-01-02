import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Smooth scroll utility function
export const smoothScrollTo = (target: string | Element, offset = 80) => {
  const element = typeof target === "string" ? document.getElementById(target.replace("#", "")) : target

  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}
