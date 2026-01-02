import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    {
      icon: Mail,
      label: "steven.orrego93@gmail.com",
      href: "mailto:steven.orrego93@gmail.com",
    },
    {
      icon: Phone,
      label: "+57 3024374193",
      href: "tel:+573024374193",
    },
    {
      icon: MapPin,
      label: "Remote Available",
      href: null,
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/tyrone-orrego", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/TyroneOrrego", label: "GitHub" },
  ]

  return (
    <footer className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-sm font-normal mb-4 text-black dark:text-white">Contact</h3>
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-start gap-3">
                  <contact.icon className="h-3 w-3 text-black/40 dark:text-white/40 mt-1 flex-shrink-0" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-sm text-black/60 dark:text-white/60 hover:underline"
                    >
                      {contact.label}
                    </a>
                  ) : (
                    <span className="text-sm text-black/60 dark:text-white/60">{contact.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-normal mb-4 text-black dark:text-white">Links</h3>
            <div className="space-y-2">
              {[
                { label: "About", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Projects", id: "projects" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id)
                    if (element) {
                      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
                      window.scrollTo({
                        top: offsetTop - 80,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className="block text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-normal mb-4 text-black dark:text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 pt-8">
          <div className="text-sm text-black/40 dark:text-white/40">
            © {currentYear} Tyrone Orrego
          </div>
        </div>
      </div>
    </footer>
  )
}
