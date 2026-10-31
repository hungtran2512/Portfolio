"use client";

import { useLanguage } from "./LanguageContext";
import { education, profile } from "@/lib/data";
import { SectionHeader } from "./Skills";
import { Award, GraduationCap } from "lucide-react";

const colorMap: Record<string, string> = {
  green: "text-green-400 border-green-500/40",
  cyan: "text-cyan-400 border-cyan-500/40",
  purple: "text-purple-400 border-purple-500/40",
};

export default function Certificates() {
  const { t } = useLanguage();

  // Khai báo mảng dữ liệu từ translations
  const certList = [
    { name: t.certs.c1, issuer: "Cisco Networking Academy", year: "2023", color: "cyan" },
    { name: t.certs.c2, issuer: "Cisco Networking Academy", year: "2023", color: "green" },
    { name: t.certs.c3, issuer: "Cisco Networking Academy", year: "2025", color: "purple" },
  ];

  return (
    <section id="certificates" className="px-4 md:px-12 py-20 max-w-5xl mx-auto">
      <SectionHeader
        cmd="verify --cert --all"
        title={t.certs.title}
        subtitle={t.certs.subtitle}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {/* Đã đổi certificates thành certList */}
        {certList.map((c) => (
          <div key={c.name} className={`panel p-5 border ${colorMap[c.color]}`}>
            <Award size={24} className={`mb-3 ${colorMap[c.color].split(" ")[0]}`} />
            <h3 className="text-sm font-bold text-white leading-snug">{c.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{c.issuer}</p>
            <p className={`text-xs mt-3 ${colorMap[c.color].split(" ")[0]}`}>
              {t.certs.issued} · {c.year}
            </p>
          </div>
        ))}
      </div>

      <div className="panel mt-6 p-6">
        <div className="flex items-start gap-3">
          <GraduationCap className="text-cyan-400 shrink-0 mt-1" size={22} />
          <div>
            <h3 className="text-white font-bold">{education.school}</h3>
            <p className="text-sm text-gray-400">
              {t.certs.edu} · {education.period}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="text-[11px] px-2 py-1 rounded border border-gray-700 bg-gray-800/40 text-gray-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}