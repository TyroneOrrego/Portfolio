import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useUI } from "@/contexts/ui-context"
import { NAV_PAGES, PAGE_TO_SECTION_ID } from "@/lib/config"
import { scrollToSection } from "@/lib/utils"

interface NavLinkProps {
  page: string
  selectedPage: string
  setSelectedPage: (page: string) => void
  onClick?: () => void
}

const NavLink = ({ page, selectedPage, setSelectedPage, onClick }: NavLinkProps) => {
  const lowerCasePage = page.toLowerCase()
  const sectionId = PAGE_TO_SECTION_ID[lowerCasePage] || lowerCasePage

  return (
    <a
      href={`#${sectionId}`}
      className={`${
        selectedPage === sectionId ? "text-black dark:text-white font-normal" : "text-black/60 dark:text-white/60"
      } hover:text-black dark:hover:text-white transition-all duration-300 text-sm tracking-wide relative group block`}
      onClick={(e) => {
        e.preventDefault()
        setSelectedPage(sectionId)
        scrollToSection(sectionId, 80)
        onClick?.()
      }}
    >
      {page}
      <span
        className={`absolute -bottom-1.5 left-0 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out ${
          selectedPage === sectionId ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  )
}

export default function Navbar() {
  const { activeSection: selectedPage, setActiveSection: setSelectedPage, isTopOfPage } = useUI()
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const menuRef = useRef<HTMLDivElement>(null)

  const navbarClasses = isTopOfPage
    ? "bg-white/80 dark:bg-black/80 backdrop-blur-sm"
    : "bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10"

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuToggled) {
        setIsMenuToggled(false)
      }

      // Very simple focus trapping logic
      if (e.key === "Tab" && isMenuToggled && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select'
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMenuToggled])

  useEffect(() => {
    if (isMenuToggled && !isDesktop) {
      document.body.style.overflow = "hidden"
      // Wait for render then focus the menu
      setTimeout(() => {
        const firstFocusable = menuRef.current?.querySelector('button')
        firstFocusable?.focus()
      }, 50)
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
    const lowerCasePage = page.toLowerCase()
    const sectionId = PAGE_TO_SECTION_ID[lowerCasePage] || lowerCasePage
    setSelectedPage(sectionId)
    setIsMenuToggled(false)
    scrollToSection(sectionId, 80)
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
            {NAV_PAGES.map((page) => (
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
              ref={menuRef}
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
                {NAV_PAGES.map((page) => {
                  const lowerCasePage = page.toLowerCase()
                  const sectionId = PAGE_TO_SECTION_ID[lowerCasePage] || lowerCasePage

                  return (
                    <a
                      key={page}
                      href={`#${sectionId}`}
                      className={`${
                        selectedPage === sectionId
                          ? "text-black dark:text-white font-normal bg-black/5 dark:bg-white/5"
                          : "text-black/60 dark:text-white/60"
                      } py-3 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-all duration-200 text-base tracking-wide text-left block`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileNavClick(page)
                      }}
                    >
                      {page}
                    </a>
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
