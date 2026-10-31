"use client"; 

import { useLanguage } from "./LanguageContext";
import { SectionHeader } from "./Skills";
import { Circle } from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="px-4 md:px-12 py-20 max-w-5xl mx-auto">
      <SectionHeader cmd="systemctl status vietnix" title={t.experience.title} subtitle={t.experience.subtitle} />

      <div className="mt-10 space-y-10">
        <div className="panel">
          <div className="panel-header justify-between">
            <div className="flex items-center gap-2">
              <span className="dot bg-green-500 animate-pulse" />
              <span className="text-green-400 font-bold">VIETNIX.service</span>
            </div>
            <span className="text-gray-500">{t.experience.period}</span>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Circle size={10} className="fill-green-500 text-green-500" />
              <span className="text-green-400 text-xs uppercase tracking-wider">{t.experience.status}</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">{t.experience.role}</h3>
            <p className="text-xs text-gray-500 mb-6">&gt; {t.experience.loaded}</p>

            <div className="relative pl-6 border-l border-gray-800 space-y-6">
              {t.experience.points.map((p, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full border-2 border-green-500" style={{ background: "var(--bg)" }} />
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}