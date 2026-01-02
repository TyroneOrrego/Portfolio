import { ExternalLink } from "lucide-react"
import type { ProjectProps } from "@/types/project-types"

interface ProjectCardProps {
  project: ProjectProps
  index: number
  isInView: boolean
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="h-full group">
      <div className="h-full flex flex-col border-b border-black/10 dark:border-white/10 pb-8 transition-opacity duration-200 hover:opacity-60">
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-normal mb-3 text-black dark:text-white">{project.title}</h3>
          <p className="text-sm md:text-base text-black/60 dark:text-white/60 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wide">
              {tag}
            </span>
          ))}
        </div>

        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black dark:text-white hover:underline inline-flex items-center gap-2 mt-auto"
          >
            View Project
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  )
}
