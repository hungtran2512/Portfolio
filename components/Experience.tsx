import { experience } from "@/lib/data";
import { SectionHeader } from "./Skills";
import { Circle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="px-4 md:px-12 py-20 max-w-5xl mx-auto">
      <SectionHeader
        cmd="systemctl status vietnix"
        title="Experience"
        subtitle="Production systems I've kept online & secure"
      />

      <div className="mt-10 space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="panel">
            <div className="panel-header justify-between">
              <div className="flex items-center gap-2">
                <span className="dot bg-green-500 animate-pulse" />
                <span className="text-green-400 font-bold">{job.company}.service</span>
              </div>
              <span className="text-gray-500">{job.period}</span>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Circle size={10} className="fill-green-500 text-green-500" />
                <span className="text-green-400 text-xs uppercase tracking-wider">active (running)</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{job.role}</h3>
              <p className="text-xs text-gray-500 mb-6">&gt; Loaded: active | Uptime: continuous</p>

              <div className="relative pl-6 border-l border-gray-800 space-y-6">
                {job.points.map((p, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 border-green-500" style={{ background: "var(--bg)" }} />
                    <h4 className="text-sm font-semibold text-cyan-400 mb-1">{p.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}