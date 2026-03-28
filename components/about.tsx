export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-black fade-in">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-3 text-black dark:text-white">About</h2>
          <div className="h-px w-12 bg-black dark:bg-white mb-4"></div>
        </div>

        <div className="max-w-3xl space-y-8">
          <p className="text-base md:text-lg text-black/60 dark:text-white/60 leading-relaxed">
            With over 4 years of experience in technical writing, I specialize in creating documentation that not only
            informs but empowers users to achieve their goals efficiently. My approach combines deep technical
            understanding with user-centered design principles.
          </p>
          <p className="text-base md:text-lg text-black/60 dark:text-white/60 leading-relaxed">
            I've worked with diverse teams across industries, from early-stage startups to established enterprises,
            helping them communicate complex ideas clearly and effectively. My documentation has consistently reduced
            support overhead while improving user satisfaction and product adoption.
          </p>
        </div>
      </div>
    </section>
  )
}
