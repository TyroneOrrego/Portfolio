import { projects } from "@/data/projects"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-black fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-3 text-black dark:text-white">Selected Work</h2>
          <div className="h-px w-12 bg-black dark:bg-white mb-4"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-black/10 dark:border-white/10 pb-12 last:border-0">
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-normal mb-3 text-black dark:text-white">{project.title}</h3>
                <p className="text-sm md:text-base text-black/60 dark:text-white/60 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black dark:text-white hover:underline inline-flex items-center gap-2"
                >
                  View Project
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
