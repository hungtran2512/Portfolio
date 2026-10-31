"use client";

import { useState, useEffect } from "react";
import { profile } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Chỉ chạy khi đã ở trên trình duyệt (Client-side)
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="border-t border-gray-800 mt-10">
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-16">
        <p className="text-xs text-green-400 mb-2">
          <span className="text-gray-600">$</span> ssh contact@hung
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white">Let&apos;s build something stable.</h2>
        <p className="text-sm text-gray-500 mt-1 mb-8">
          Open to Sysadmin / DevOps roles & security-focused collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <a href={`mailto:${profile.email}`} className="panel p-4 flex items-center gap-3 hover:border-green-500/50 transition group">
            <Mail size={18} className="text-green-400" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase">email</p>
              <p className="text-sm text-gray-200 group-hover:text-green-400 transition break-all">{profile.email}</p>
            </div>
          </a>

          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="panel p-4 flex items-center gap-3 hover:border-cyan-500/50 transition group">
            <Phone size={18} className="text-cyan-400" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase">phone</p>
              <p className="text-sm text-gray-200 group-hover:text-cyan-400 transition">{profile.phone}</p>
            </div>
          </a>

          <div className="panel p-4 flex items-center gap-3">
            <MapPin size={18} className="text-purple-400" />
            <div>
              <p className="text-[10px] text-gray-500 uppercase">location</p>
              <p className="text-sm text-gray-200">{profile.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          {/* <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.</p> */}
          <p>
            © {year ? year : "2026"} {profile.name}
          </p>
          <p className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}