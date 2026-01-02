import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useUI } from "@/contexts/ui-context"

interface NavLinkProps {
  page: string
  selectedPage: string
  setSelectedPage: (page: string) => void
  onClick?: () => void
}

const NavLink = ({ page, selectedPage, setSelectedPage, onClick }: NavLinkProps) => {
  // Map page names to section IDs
  const pageToSectionId: Record<string, string> = {
    home: "hero",
    about: "about",
    services: "skills", // Map services to skills for now
    skills: "skills",
    projects: "projects",
    contact: "contact",
  }

  const lowerCasePage = page.toLowerCase()
  const sectionId = pageToSectionId[lowerCasePage] || lowerCasePage

  return (
    <button
      className={`${
        selectedPage === sectionId ? "text-black dark:text-white font-normal" : "text-black/60 dark:text-white/60"
      } hover:text-black dark:hover:text-white transition-all duration-300 text-sm tracking-wide relative group`}
      onClick={(e) => {
        e.preventDefault()
        setSelectedPage(sectionId)

        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: offsetTop - 80,
            behavior: "smooth",
          })
        }

        onClick?.()
      }}
    >
      {page}
      <span
        className={`absolute -bottom-1.5 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out ${
          selectedPage === sectionId ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </button>
  )
}

export default function Navbar() {
  const { activeSection: selectedPage, setActiveSection: setSelectedPage, isTopOfPage } = useUI()
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const navbarClasses = isTopOfPage
    ? "bg-white/80 dark:bg-black/80 backdrop-blur-sm"
    : "bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10"

  const navPages = ["Home", "About", "Skills", "Projects", "Contact"]

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuToggled) {
        setIsMenuToggled(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMenuToggled])

  useEffect(() => {
    if (isMenuToggled && !isDesktop) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuToggled, isDesktop])

  useEffect(() => {
    if (isDesktop && isMenuToggled) {
      setIsMenuToggled(false)
    }
  }, [isDesktop, isMenuToggled])

  const scrollToTop = () => {
    setSelectedPage("hero")
    setIsMenuToggled(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleMobileNavClick = (page: string) => {
    const pageToSectionId: Record<string, string> = {
      home: "hero",
      about: "about",
      services: "skills",
      skills: "skills",
      projects: "projects",
      contact: "contact",
    }

    const lowerCasePage = page.toLowerCase()
    const sectionId = pageToSectionId[lowerCasePage] || lowerCasePage
    setSelectedPage(sectionId)
    setIsMenuToggled(false)

    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav
      className={`${navbarClasses} z-40 w-full fixed top-0 py-5 transition-all duration-300`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6">
        <button
          onClick={scrollToTop}
          className="font-normal text-xl tracking-tighter text-black dark:text-white hover:opacity-70 transition-opacity duration-200"
          aria-label="Back to top"
        >
          Tyrone Orrego
        </button>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex gap-10 text-sm font-normal">
            {navPages.map((page) => (
              <NavLink key={page} page={page} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            ))}
          </div>
        ) : (
          <button
            className="p-2.5 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            aria-expanded={isMenuToggled}
            aria-label={isMenuToggled ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            {isMenuToggled ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        )}

        {/* MOBILE MENU */}
        {!isDesktop && isMenuToggled && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuToggled(false)}
              aria-hidden="true"
            />

            <div
              id="mobile-menu"
              className="fixed right-0 top-0 bottom-0 h-screen bg-white dark:bg-black w-[75vw] max-w-[320px] z-50 shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              <div className="flex justify-between items-center p-6 border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shrink-0">
                <span id="mobile-menu-title" className="font-normal text-lg text-black dark:text-white tracking-tight">
                  Menu
                </span>
                <button
                  onClick={() => setIsMenuToggled(false)}
                  aria-label="Close menu"
                  className="text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 p-2 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-2 p-6 overflow-y-auto" aria-label="Mobile navigation">
                {navPages.map((page) => {
                  const pageToSectionId: Record<string, string> = {
                    home: "hero",
                    about: "about",
                    services: "skills",
                    skills: "skills",
                    projects: "projects",
                    contact: "contact",
                  }
                  const lowerCasePage = page.toLowerCase()
                  const sectionId = pageToSectionId[lowerCasePage] || lowerCasePage

                  return (
                    <button
                      key={page}
                      className={`${
                        selectedPage === sectionId
                          ? "text-black dark:text-white font-normal bg-black/5 dark:bg-white/5"
                          : "text-black/60 dark:text-white/60"
                      } py-3 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-all duration-200 text-base tracking-wide text-left`}
                      onClick={() => handleMobileNavClick(page)}
                    >
                      {page}
                    </button>
                  )
                })}
              </nav>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
