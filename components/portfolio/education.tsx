import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function Education() {
  return (
    <section className="py-24 md:py-32 relative bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-zinc-500 tracking-wider uppercase">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
            Education
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-3xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
              <GraduationCap className="h-8 w-8 text-zinc-300" />
            </div>
            
            <div className="pt-8 text-center">
              <h3 className="text-2xl font-bold mb-2">
                Rajagiri School of Engineering and Technology
              </h3>
              
              <div className="flex items-center justify-center gap-2 text-zinc-500 mb-4">
                <MapPin className="h-4 w-4" />
                <span>Ernakulam, Kerala</span>
              </div>
              
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-zinc-800/50 border border-zinc-700">
                <div>
                  <p className="text-sm text-zinc-500">Degree</p>
                  <p className="font-semibold">BTech in Information Technology</p>
                </div>
                <div className="w-px h-10 bg-zinc-700" />
                <div>
                  <p className="text-sm text-zinc-500">Completed</p>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-zinc-400" />
                    <p className="font-semibold">June 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
