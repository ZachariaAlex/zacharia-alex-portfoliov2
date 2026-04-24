import { Code2, Layers, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium text-zinc-500 tracking-wider uppercase">About Me</span>
              <div className="h-px w-12 bg-zinc-700 mt-2" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Performance-Driven Architecture & Full-Lifecycle Engineering
            </h2>
            
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                With <span className="text-foreground font-semibold">5.5+ years</span> of experience solving complex logic problems, 
                I specialize in building robust, scalable solutions that drive business value.
              </p>
              <p>
                Expertise in bridging the gap between robust backend systems and intuitive, 
                responsive user interfaces. Proven track record in optimizing web performance 
                and implementing SEO-driven frontend architectures.
              </p>
              <p>
                My approach combines technical excellence with a deep understanding of user needs, 
                ensuring every project delivers both functionality and exceptional user experience.
              </p>
            </div>
          </div>
          
          {/* Right Column - Stats/Features */}
          <div className="grid gap-6">
            <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 transition-colors">
                  <Code2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Clean Code Architecture</h3>
                  <p className="text-zinc-500 text-sm">Writing maintainable, scalable code following industry best practices and design patterns.</p>
                </div>
              </div>
            </div>
            
            <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 transition-colors">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Full-Stack Proficiency</h3>
                  <p className="text-zinc-500 text-sm">End-to-end development from database architecture to pixel-perfect frontends.</p>
                </div>
              </div>
            </div>
            
            <div className="group p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-300 group-hover:bg-zinc-700 transition-colors">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Performance Obsessed</h3>
                  <p className="text-zinc-500 text-sm">Optimizing every millisecond for lightning-fast, efficient applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
