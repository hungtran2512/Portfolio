import { projects } from "@/lib/data";
import { SectionHeader } from "./Skills";
import { Shield, Activity } from "lucide-react";

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  purple: { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
  cyan: { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
};

export default function Projects() {
  return (
    <section id="projects" className="px-4 md:px-12 py-20 max-w-5xl mx-auto">
      <SectionHeader
        cmd="docker ps --format 'table'"
        title="Security Projects"
        subtitle="Labs where I turned theory into detection pipelines"
      />

      <div className="mt-10 grid gap-6">
        {projects.map((p) => {
          const c = colorMap[p.color];
          return (
            <div key={p.title} className="panel overflow-hidden">
              <div className="panel-header justify-between">
                <div className="flex items-center gap-2">
                  <Shield size={14} className={c.text} />
                  <span className={`font-bold ${c.text}`}>{p.tag}</span>
                </div>
                <span className="text-gray-500">{p.period}</span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className={`text-[11px] px-2 py-1 rounded border ${c.border} ${c.bg} ${c.text}`}>
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-4">
                  {p.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
                      <span className={`mt-1 ${c.text}`}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-xs border-t border-gray-800 pt-3">
                  <Activity size={12} className="text-green-400" />
                  <span className="text-gray-500">status:</span>
                  <span className="text-green-400">{p.status}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}