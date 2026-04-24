import { 
  Smartphone, 
  TestTube, 
  Gauge, 
  Search, 
  Monitor,
  ArrowRight
} from "lucide-react"

const competencies = [
  {
    icon: Smartphone,
    title: "Progressive Web Apps (PWA)",
    description: "Building offline-capable, high-speed web experiences that work seamlessly across all devices and network conditions.",
    features: ["Service Workers", "Offline Support", "Push Notifications"]
  },
  {
    icon: TestTube,
    title: "Testing & Integration",
    description: "Ensuring system reliability through rigorous testing workflows, from unit tests to end-to-end integration testing.",
    features: ["Unit Testing", "Integration Tests", "CI/CD Pipelines"]
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Advanced techniques in Core Web Vitals and load-time reduction for lightning-fast user experiences.",
    features: ["Core Web Vitals", "Code Splitting", "Caching Strategies"]
  },
  {
    icon: Search,
    title: "SEO & Analytics",
    description: "Implementing technical SEO and structured data for maximum visibility and data-driven decision making.",
    features: ["Technical SEO", "Schema Markup", "Analytics Integration"]
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Mobile-first, fluid layouts across all device classes with pixel-perfect attention to detail.",
    features: ["Mobile-First", "Fluid Typography", "Adaptive Layouts"]
  }
]

export function Competencies() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-zinc-500 tracking-wider uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Core Competencies
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Specialized skills honed through years of building production-grade applications
          </p>
        </div>
        
        <div className="grid gap-6">
          {competencies.map((comp, idx) => (
            <div 
              key={comp.title}
              className="group relative grid md:grid-cols-[1fr,2fr] gap-6 p-6 md:p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Left side - Title and Icon */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700 group-hover:text-zinc-200 transition-all">
                  <comp.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{comp.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {comp.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-2 py-1 rounded-md bg-zinc-800/80 text-zinc-500"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right side - Description */}
              <div className="flex items-center">
                <p className="text-zinc-400 leading-relaxed">
                  {comp.description}
                </p>
              </div>
              
              {/* Hover arrow indicator */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5 text-zinc-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
