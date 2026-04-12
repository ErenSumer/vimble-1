"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const mockVideos = [
  {
    title: "Ocean Sunset",
    gradient: "linear-gradient(135deg, #1a3a5c, #2d7aff)",
    views: "12.4K",
    author: "Sarah",
  },
  {
    title: "City Timelapse",
    gradient: "linear-gradient(135deg, #1a1a2e, #414166)",
    views: "8.2K",
    author: "Mike",
  },
  {
    title: "Abstract Art",
    gradient: "linear-gradient(135deg, #2d1b69, #7b2ff7)",
    views: "5.7K",
    author: "Elena",
  },
  {
    title: "Nature Walk",
    gradient: "linear-gradient(135deg, #0d3b2e, #0ea5e9)",
    views: "15.1K",
    author: "James",
  },
];

export default function PhoneWidget() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;

    // Gentle floating
    gsap.to(phone, {
      y: -10,
      duration: 3.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Tilt on hover
    const handleMouseMove = (e: MouseEvent) => {
      const rect = phone.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;

      gsap.to(phone, {
        rotateY: dx * 6,
        rotateX: -dy * 4,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(phone, {
        rotateY: 0,
        rotateX: 0,
        duration: 1,
        ease: "power2.out",
      });
    };

    phone.addEventListener("mousemove", handleMouseMove);
    phone.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      phone.removeEventListener("mousemove", handleMouseMove);
      phone.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Stagger cards in
  useEffect(() => {
    const screen = screenRef.current;
    if (!screen) return;

    const cards = screen.querySelectorAll(".v-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 24, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 1.4,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      {/* Ambient glow behind phone */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[400px] rounded-full blur-[100px] opacity-30"
        style={{ background: "radial-gradient(circle, var(--blue) 0%, transparent 70%)" }}
      />

      <div
        ref={phoneRef}
        className="relative w-[260px] h-[540px] sm:w-[280px] sm:h-[580px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Outer shell */}
        <div
          className="absolute inset-0 rounded-[42px]"
          style={{
            background: "linear-gradient(160deg, #2a2a33 0%, #111115 40%, #0a0a0e 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        />

        {/* Screen area */}
        <div className="absolute inset-[3px] rounded-[40px] bg-[#050507] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-3">
            <div
              className="w-[90px] h-[26px] rounded-full flex items-center justify-center"
              style={{ background: "#0a0a0e" }}
            >
              <div className="w-[6px] h-[6px] rounded-full bg-[#1a1a22] ring-1 ring-[#222]" />
            </div>
          </div>

          {/* Screen content */}
          <div
            ref={screenRef}
            className="w-full h-full pt-14 px-3.5 pb-3.5 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #08080c, #050507)" }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-1 mb-3">
              <span className="text-[9px] text-fg-muted font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                9:41
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-end gap-[2px]">
                  <div className="w-[2.5px] h-[4px] bg-fg rounded-sm" />
                  <div className="w-[2.5px] h-[6px] bg-fg rounded-sm" />
                  <div className="w-[2.5px] h-[8px] bg-fg rounded-sm" />
                  <div className="w-[2.5px] h-[10px] bg-fg-dim rounded-sm" />
                </div>
                <div className="w-5 h-[9px] border border-fg-muted rounded-[2px] relative ml-1">
                  <div className="absolute inset-[1px] right-[3px] bg-fg rounded-[1px]" />
                  <div className="absolute right-[-2.5px] top-[2px] w-[1.5px] h-[4px] bg-fg-muted rounded-r-sm" />
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3
                  className="text-fg text-sm font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  vimble<span className="text-blue">.ai</span>
                </h3>
                <p className="text-[8px] text-fg-dim mt-0.5 tracking-wide uppercase">
                  Explore & Create
                </p>
              </div>
              <div className="w-6 h-6 rounded-full bg-blue flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">V</span>
              </div>
            </div>

            {/* Search */}
            <div className="w-full h-8 bg-white/[0.03] rounded-xl flex items-center px-2.5 gap-2 mb-3 border border-white/[0.04]">
              <svg className="w-3 h-3 text-fg-dim" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-[10px] text-fg-dim">Search videos...</span>
            </div>

            {/* Category pills */}
            <div className="flex gap-1.5 mb-3">
              {["Trending", "New", "For You"].map((cat, i) => (
                <div
                  key={cat}
                  className={`px-2.5 py-1 rounded-full text-[9px] font-medium ${
                    i === 0
                      ? "bg-blue text-white"
                      : "bg-white/[0.04] text-fg-dim border border-white/[0.05]"
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>

            {/* Video grid */}
            <div className="grid grid-cols-2 gap-2">
              {mockVideos.map((v, i) => (
                <div
                  key={i}
                  className="v-card group relative rounded-xl overflow-hidden opacity-0 cursor-pointer"
                  style={{ aspectRatio: "3/4" }}
                >
                  <div className="absolute inset-0" style={{ background: v.gradient }} />
                  {/* Shimmer */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
                      backgroundSize: "200% 100%",
                      animation: `shimmer ${3 + i * 0.4}s ease-in-out infinite`,
                    }}
                  />
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-[8px] font-semibold">{v.title}</p>
                    <span className="text-white/50 text-[7px]">{v.author} · {v.views}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Generate FAB */}
            <div className="absolute bottom-5 right-5 z-10">
              <div className="w-10 h-10 rounded-full bg-blue flex items-center justify-center shadow-[0_4px_20px_var(--blue-glow)] cursor-pointer hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute right-[-2px] top-[110px] w-[2.5px] h-[35px] bg-[#222] rounded-r-sm" />
        <div className="absolute left-[-2px] top-[95px] w-[2.5px] h-[20px] bg-[#222] rounded-l-sm" />
        <div className="absolute left-[-2px] top-[130px] w-[2.5px] h-[35px] bg-[#222] rounded-l-sm" />
        <div className="absolute left-[-2px] top-[175px] w-[2.5px] h-[35px] bg-[#222] rounded-l-sm" />
      </div>
    </div>
  );
}
