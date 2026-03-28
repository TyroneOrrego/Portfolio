import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const [sectionInView, setSectionInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    "Technical Writing",
    "API Documentation",
    "User Guides",
    "Information Architecture",
    "Knowledge Base",
    "Process Documentation",
  ]

  const tools = [
    "Markdown",
    "Swagger",
    "Postman",
    "Bruno",
    "Confluence",
    "Jira",
    "Git",
    "GitHub",
    "Agile",
  ]

  const languages = [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "French", level: "Intermediate" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionInView(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 bg-black/5 dark:bg-white/5 fade-in">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tighter mb-6 text-black dark:text-white">
            Skills
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl">
            Core competencies and technical proficiencies that drive exceptional documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20" ref={sectionRef}>
          {/* Expertise Column */}
          <div
            className={`transition-all duration-700 motion-reduce:transition-none ${
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xs font-normal uppercase tracking-widest mb-10 text-black/60 dark:text-white/60">
              Expertise
            </h3>
            <ul className="space-y-5">
              {skills.map((skill, index) => (
                <li
                  key={skill}
                  className="text-black dark:text-white text-base md:text-lg border-l-2 border-black/20 dark:border-white/20 pl-5 hover:border-black dark:hover:border-white hover:translate-x-1 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Column */}
          <div
            className={`transition-all duration-700 delay-100 motion-reduce:transition-none motion-reduce:delay-0 ${
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xs font-normal uppercase tracking-widest mb-10 text-black/60 dark:text-white/60">
              Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <Badge
                  key={tool}
                  variant="outline"
                  className="font-normal text-sm px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-default border-black/20 dark:border-white/20 bg-transparent"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Languages Column */}
          <div
            className={`transition-all duration-700 delay-200 motion-reduce:transition-none motion-reduce:delay-0 ${
              sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xs font-normal uppercase tracking-widest mb-10 text-black/60 dark:text-white/60">
              Languages
            </h3>
            <ul className="space-y-6">
              {languages.map((lang) => (
                <li key={lang.name} className="flex justify-between items-center text-base md:text-lg group">
                  <span className="text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                    {lang.name}
                  </span>
                  <span className="text-sm text-black/60 dark:text-white/60 font-normal">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
