"use client";

import { useLanguage } from "./LanguageContext";

const colorMap: Record<string, string> = {
  green: "text-green-400 border-green-500/30 bg-green-500/5",
  cyan: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5",
  amber: "text-amber-400 border-amber-500/30 bg-amber-500/5",
  purple: "text-purple-400 border-purple-500/30 bg-purple-500/5",
  red: "text-red-400 border-red-500/30 bg-red-500/5",
};

export default function Skills() {
  const { t } = useLanguage();
  
  const skillCategories = [
    { category: t.skills.categories.os, color: "green", items: t.skills.items.os },
    { category: t.skills.categories.virt, color: "cyan", items: t.skills.items.virt },
    { category: t.skills.categories.panel, color: "amber", items: t.skills.items.panel },
    { category: t.skills.categories.net, color: "purple", items: t.skills.items.net },
    { category: t.skills.categories.sec, color: "red", items: t.skills.items.sec },
    { category: t.skills.categories.auto, color: "green", items: t.skills.items.auto },
  ];

  return (
    <section id="skills" className="px-4 md:px-12 py-20 max-w-6xl mx-auto">
      <SectionHeader cmd="htop --skills" title={t.skills.title} subtitle={t.skills.subtitle} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {skillCategories.map((group) => (
          <div key={group.category} className="panel p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className={`text-xs font-bold uppercase tracking-wider ${colorMap[group.color].split(" ")[0]}`}>
                {group.category}
              </h3>
              <span className="text-[10px] text-gray-600">
                {group.items.length} unit{group.items.length > 1 ? "s" : ""}
              </span>
            </div>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SectionHeader({ cmd, title, subtitle }: { cmd: string; title: string; subtitle: string }) {
  return (
    <div>
      <p className="text-xs text-green-400 mb-2">
        <span className="text-gray-600">$</span> {cmd}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}