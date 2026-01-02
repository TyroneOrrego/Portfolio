import { Download, ExternalLink } from "lucide-react"

interface WritingSample {
  id: string
  title: string
  description: string
  category: string
  downloadUrl: string
  tags: string[]
}

const writingSamples: WritingSample[] = [
  {
    id: "api-docs",
    title: "API Documentation Guide",
    description:
      "Comprehensive guide for documenting REST APIs with interactive examples, best practices, and real-world case studies from enterprise implementations.",
    category: "API Documentation",
    downloadUrl: "https://drive.google.com/file/d/194AWC9YHC48HdNUSfAuVkS-8AfKyD-wQ/view?usp=drive_link",
    tags: ["REST API", "OpenAPI", "Swagger", "Developer Tools"],
  },
  {
    id: "tech-interviews",
    title: "Technical Writing Interview Guide",
    description:
      "Complete preparation guide for technical writing interviews with sample questions, portfolio tips, and salary negotiation strategies.",
    category: "Career Development",
    downloadUrl: "https://drive.google.com/file/d/1GtPq3V2EXVfPBsEsfg7_74ajsij-v7Xj/view?usp=drive_link",
    tags: ["Career", "Interviews", "Portfolio", "Skills"],
  },
  {
    id: "single-sourcing",
    title: "Single-Sourcing Handbook",
    description:
      "Advanced techniques for maintaining documentation across multiple platforms and formats using modern tools and automation workflows.",
    category: "Documentation Strategy",
    downloadUrl: "https://drive.google.com/file/d/1iN444I9XnOnU1YP93K98vU9BN9fKNbhn/view?usp=drive_link",
    tags: ["DITA", "Markdown", "Automation", "Workflow"],
  },
  {
    id: "docs-as-code",
    title: "Docs as Code made simple and approachable",
    description: "Introduction to Docs-as-Code.",
    category: "Technical Writing",
    downloadUrl: "https://drive.google.com/file/d/1DkQgkEYm1s6RYyCTFmx-Q4sr_w7U9ThF/view",
    tags: ["Docs-as-code", "Technical Writing", "Git", "Documentation"],
  },
  {
    id: "starter-pack",
    title: "Technical Writing: Beginners Starter Pack",
    description: "Some tools and gadgets that every single TW should have in mind.",
    category: "Tools & Technology",
    downloadUrl: "https://drive.google.com/file/d/1_w5XBv6nJ55t1YnI25SiSepyQKR7u5rE/view",
    tags: ["Tools", "Platforms", "Technology", "Implementation"],
  },
  {
    id: "writing-methods",
    title: "Elevate Your Documentation: Master These Writing Styles & Methods",
    description:
      "Not every single user persona is the same. The acknowledgement of that gives you a lot of leverage, the following guide provides insights about that.",
    category: "API Documentation",
    downloadUrl: "https://drive.google.com/file/d/1YkoUmJq9KPG0HBBHUqLWp_5wKNPOP3DU/view",
    tags: ["Writing styles", "Methods", "Documentation"],
  },
]

export default function WritingShowcase() {
  return (
    <section id="writing-examples" className="py-16 md:py-24 bg-white dark:bg-black fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-3 text-black dark:text-white">Writing</h2>
          <div className="h-px w-12 bg-black dark:bg-white mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {writingSamples.map((sample) => (
            <div key={sample.id} className="border-b border-black/10 dark:border-white/10 pb-8">
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-normal mb-3 text-black dark:text-white">{sample.title}</h3>
                <p className="text-sm md:text-base text-black/60 dark:text-white/60 leading-relaxed mb-4">
                  {sample.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {sample.tags.map((tag) => (
                    <span key={tag} className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={sample.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black dark:text-white hover:underline inline-flex items-center gap-2"
              >
                Download
                <Download className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
