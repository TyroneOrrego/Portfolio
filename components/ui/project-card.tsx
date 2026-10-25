import React from "react"
import { motion, type Variants } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { ProjectProps } from "@/types/project-types"

export const projectVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
}

export interface ProjectCardProps {
  project: ProjectProps
  variants?: Variants
}

export function ProjectCard({ project, variants = projectVariant }: ProjectCardProps) {
  const handleCardClick = () => {
    if (project.links.demo) {
      window.open(project.links.demo, "_blank", "noopener,noreferrer")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleCardClick()
    }
  }

  return (
    <motion.div
      variants={variants}
      tabIndex={0}
      role={project.links.demo ? "link" : "article"}
      aria-label={`View ${project.title}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      className="group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between
        bg-black/[0.02] dark:bg-white/[0.02]
        border border-black/10 dark:border-white/10
        hover:border-black/30 dark:hover:border-white/30
        hover:bg-black/[0.04] dark:hover:bg-white/[0.05]
        hover:-translate-y-1 hover:shadow-md dark:hover:shadow-none
        transition-all duration-300 cursor-pointer
        focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white focus-visible:outline-none"
    >
      <div>
        {/* Header: Category / Primary Tag + External Link Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs uppercase tracking-wider text-black/50 dark:text-white/50 font-mono">
            {project.tags[0]}
          </span>
          {project.links.demo && (
            <div className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-black/40 dark:text-white/40 group-hover:border-black/30 dark:group-hover:border-white/30 group-hover:text-black dark:group-hover:text-white transition-all shrink-0">
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          )}
        </div>

        {/* Title & Brief Description */}
        <div className="space-y-3 mb-6">
          <h3 className="text-lg sm:text-xl font-normal tracking-tight text-black dark:text-white leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed font-light line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer: Keywords / Tags & Link Action */}
      <div className="pt-4 border-t border-black/10 dark:border-white/10 mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-black/80 dark:group-hover:text-white/80 font-normal tracking-wide transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links.demo && (
          <div className="pt-1">
            <span className="text-sm text-black dark:text-white font-medium hover:underline inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              <span>View Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard
