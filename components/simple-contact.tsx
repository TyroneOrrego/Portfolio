import { Mail, Phone, MapPin } from "lucide-react"

export default function SimpleContact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-black fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-3 text-black dark:text-white">Contact</h2>
          <div className="h-px w-12 bg-black dark:bg-white mb-4"></div>
        </div>

        <div className="max-w-2xl space-y-8">
          <p className="text-base md:text-lg text-black/60 dark:text-white/60 leading-relaxed">
            Ready to transform your technical documentation? Get in touch to discuss your project.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-4 w-4 text-black/40 dark:text-white/40 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-black/40 dark:text-white/40 mb-1">Email</div>
                <a
                  href="mailto:steven.orrego93@gmail.com"
                  className="text-sm md:text-base text-black dark:text-white hover:underline"
                >
                  steven.orrego93@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-4 w-4 text-black/40 dark:text-white/40 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-black/40 dark:text-white/40 mb-1">Phone</div>
                <a
                  href="tel:+573024374193"
                  className="text-sm md:text-base text-black dark:text-white hover:underline"
                >
                  +57 3024374193
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-4 w-4 text-black/40 dark:text-white/40 mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm text-black/40 dark:text-white/40 mb-1">Location</div>
                <div className="text-sm md:text-base text-black/60 dark:text-white/60">Remote Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
