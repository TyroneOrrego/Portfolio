import { motion, type Variants } from "framer-motion"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ui/project-card"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-black fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <motion.div
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-black dark:text-white">
              Selected Work
            </h2>
            <span className="text-xs uppercase px-2.5 py-0.5 rounded-full border border-black/10 dark:border-white/10 text-black/60 dark:text-white/60 font-mono">
              {projects.length} Projects
            </span>
          </div>

          <div className="h-px w-12 bg-black dark:bg-white mb-4" />

          <p className="text-sm md:text-base text-black/60 dark:text-white/60 max-w-2xl leading-relaxed">
            Technical documentation, developer portals, and platform architectures authored for enterprise and fintech clients.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
