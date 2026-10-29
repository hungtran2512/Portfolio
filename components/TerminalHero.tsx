"use client";
import { useEffect, useState } from "react";
import { MapPin, Mail, Phone, Circle } from "lucide-react";
import { profile } from "@/lib/data";

export default function TerminalHero() {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const command = "whoami --verbose";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(command.slice(0, i));
      i++;
      if (i > command.length) {
        clearInterval(timer);
        setTimeout(() => setShowOutput(true), 300);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="grid-bg min-h-screen flex items-center px-4 md:px-12 py-16">
      <div className="w-full max-w-4xl mx-auto fade-up">
        <div className="panel shadow-2xl">
          <div className="panel-header">
            <span className="dot bg-red-500" />
            <span className="dot bg-amber-400" />
            <span className="dot bg-green-500" />
            <span className="ml-2">hung@portfolio: ~</span>
          </div>
          <div className="p-6 md:p-10 text-sm md:text-base">
            <div className="flex items-center gap-2 text-green-400">
              <span className="text-gray-500 opacity-60">
                {profile.handle}@portfolio:~$
              </span>
              <span>{typed}</span>
              {!showOutput && <span className="cursor-blink">_</span>}
            </div>

            {showOutput && (
              <div className="mt-6 space-y-4 fade-up">
                <div>
                  <h1 className="text-2xl md:text-4xl font-bold text-white">
                    {profile.name}
                  </h1>
                  <p className="text-green-400 mt-1">
                    &gt; {profile.role} <span className="text-gray-500">|</span>{" "}
                    <span className="text-cyan-400">{profile.tagline}</span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-cyan-400" /> {profile.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail size={14} className="text-cyan-400" /> {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone size={14} className="text-cyan-400" /> {profile.phone}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <Circle size={10} className="fill-green-500 text-green-500 animate-pulse" />
                  <span className="text-green-400">{profile.status}</span>
                </div>

                <div className="pt-2 text-sm text-gray-300 leading-relaxed space-y-1 border-l-2 border-green-500/40 pl-4">
                  {profile.about.map((line, i) => (
                    <p key={i}>&gt; {line}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <a href="#projects" className="px-4 py-2 bg-green-500/10 border border-green-500/40 text-green-400 text-xs rounded hover:bg-green-500/20 transition">
                    view projects
                  </a>
                  <a href={`mailto:${profile.email}`} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 text-xs rounded hover:bg-cyan-500/20 transition">
                    contact me
                  </a>
                  <a href="#experience" className="px-4 py-2 bg-purple-500/10 border border-purple-500/40 text-purple-400 text-xs rounded hover:bg-purple-500/20 transition">
                    experience
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}