import { 
  FileCode2, 
  Database, 
  ShoppingCart, 
  Wrench,
  Braces,
  Server,
  Globe,
  Palette
} from "lucide-react"

const techCategories = [
  {
    title: "Core Technologies",
    icon: FileCode2,
    techs: ["Next.js", "React", "Node.js", "Python"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "hover:border-blue-500/50"
  },
  {
    title: "Data & Logic",
    icon: Database,
    techs: ["REST APIs", "Webhooks", "MySQL", "MongoDB", "API Integrations"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "hover:border-emerald-500/50"
  },
  {
    title: "Ecommerce & CMS",
    icon: ShoppingCart,
    techs: ["Shopify", "CMS Management", "UI/UX Engineering"],
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "hover:border-amber-500/50"
  },
  {
    title: "Development Tools",
    icon: Wrench,
    techs: ["Git", "Bootstrap", "HTML", "CSS"],
    color: "from-rose-500/20 to-pink-500/20",
    borderColor: "hover:border-rose-500/50"
  }
]

export function TechStack() {
  return (
    <section className="py-24 md:py-32 relative bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-zinc-500 tracking-wider uppercase">Technology Stack</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Tools That Power My Work
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of solving complex problems
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {techCategories.map((category, idx) => (
            <div 
              key={category.title}
              className={`group relative p-6 md:p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all duration-500 ${category.borderColor} hover:bg-zinc-900/50 ${idx === 0 ? 'md:row-span-2' : ''}`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-zinc-800/80 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-300 text-sm font-medium hover:bg-zinc-700 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Row */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Braces, label: "TypeScript" },
            { icon: Server, label: "RESTful APIs" },
            { icon: Globe, label: "Web Standards" },
            { icon: Palette, label: "UI/UX Design" }
          ].map((skill) => (
            <div 
              key={skill.label}
              className="group flex items-center gap-3 p-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300"
            >
              <skill.icon className="h-5 w-5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
