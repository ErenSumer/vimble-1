"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════
   FEATURES SECTION — Stacked subsections with dividers
   ═══════════════════════════════════════════════════════ */

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      const header = sectionRef.current?.querySelector(".f-header");
      if (header) {
        gsap.fromTo(header, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: header, start: "top 82%", toggleActions: "play none none none" }
        });
      }

      // Each feature row
      sectionRef.current?.querySelectorAll(".f-row").forEach((row) => {
        gsap.fromTo(row, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 1.3, ease: "expo.out",
          scrollTrigger: { trigger: row, start: "top 82%", toggleActions: "play none none none" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="f-section">
      {/* Section Header */}
      <div className="f-header" style={{ opacity: 0 }}>
        <span className="f-badge">CAPABILITIES</span>
        <h2 className="f-title">
          Everything you need to<br />
          <span className="f-title-accent">create incredible videos</span>
        </h2>
        <p className="f-subtitle">
          From prompt to masterpiece — powerful tools that make AI video generation effortless, all wrapped in a stunning interface.
        </p>
      </div>

      {/* Feature 1: Multi-Source Input */}
      <div className="f-row" style={{ opacity: 0 }}>
        <div className="f-text">
          <div className="f-number">01</div>
          <h3 className="f-heading">Create From Anything</h3>
          <p className="f-desc">
            Start with whatever inspires you — a text prompt, a photo, an existing video, or even audio.
            Our AI understands your intent and transforms any input into stunning video content.
          </p>
        </div>
        <div className="f-widget">
          <InputPipelineWidget />
        </div>
      </div>

      <div className="f-divider" />

      {/* Feature 2: Multi-Model */}
      <div className="f-row f-row-reverse" style={{ opacity: 0 }}>
        <div className="f-text">
          <div className="f-number">02</div>
          <h3 className="f-heading">Multi-Model Engine</h3>
          <p className="f-desc">
            Access Sora, Runway, Kling, and Pika — all in one place. Compare outputs, pick your favorite model
            for each style, and always get the best possible result.
          </p>
        </div>
        <div className="f-widget">
          <ModelCompareWidget />
        </div>
      </div>

      <div className="f-divider" />

      {/* Feature 3: Community */}
      <div className="f-row" style={{ opacity: 0 }}>
        <div className="f-text">
          <div className="f-number">03</div>
          <h3 className="f-heading">Discover & Remix</h3>
          <p className="f-desc">
            Explore trending creations from users around the globe. Get inspired by their prompts, remix
            styles, and share your own work with a vibrant creative community.
          </p>
        </div>
        <div className="f-widget">
          <CommunityMosaicWidget />
        </div>
      </div>

      <div className="f-divider" />

      {/* Feature 4: Real-Time Generation */}
      <div className="f-row f-row-reverse" style={{ opacity: 0 }}>
        <div className="f-text">
          <div className="f-number">04</div>
          <h3 className="f-heading">Real-Time Generation</h3>
          <p className="f-desc">
            Watch your idea come alive frame by frame. Track generation progress, preview renders
            in real-time, and adjust parameters on the fly. Full control, zero guesswork.
          </p>
        </div>
        <div className="f-widget">
          <RenderTimelineWidget />
        </div>
      </div>

      <style jsx global>{`
        .f-section {
          position: relative;
          padding: 120px 20px 100px;
          background: #fafafa;
          overflow: hidden;
        }

        .f-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 80px;
        }

        .f-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #fff;
          background: #111;
          padding: 8px 16px;
          border-radius: 100px;
          margin-bottom: 28px;
        }

        .f-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: #111;
          margin-bottom: 22px;
        }

        .f-title-accent {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .f-subtitle {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.6vw, 18px);
          color: #555;
          line-height: 1.6;
          font-weight: 400;
          opacity: 0.9;
        }

        /* ── Feature Row ── */
        .f-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .f-row-reverse {
          direction: rtl;
        }

        .f-row-reverse > * {
          direction: ltr;
        }

        .f-text {
          max-width: 460px;
        }

        .f-row-reverse .f-text {
          margin-left: auto;
        }

        .f-number {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: #06b6d4;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
        }

        .f-heading {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #111;
          line-height: 1.05;
          margin-bottom: 18px;
        }

        .f-desc {
          font-family: var(--font-body);
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          font-weight: 400;
          opacity: 0.9;
        }

        .f-widget {
          position: relative;
        }

        /* ── Divider ── */
        .f-divider {
          max-width: 1120px;
          margin: 60px auto;
          padding: 0 20px;
          position: relative;
        }

        .f-divider::after {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(0,0,0,0.06), transparent);
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .f-row, .f-row-reverse {
            grid-template-columns: 1fr;
            gap: 40px;
            direction: ltr;
          }
          .f-row-reverse .f-text {
            margin-left: 0;
          }
          .f-text {
            text-align: center;
            max-width: 100%;
          }
          .f-number {
            margin: 0 auto 16px;
          }
        }
      `}</style>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════
   WIDGET 1 — Input Pipeline
   A visual showing input types flowing into AI output
   ═══════════════════════════════════════════════════════ */

const inputTypes = [
  { id: "text", label: "Text Prompt", icon: "Aa", color: "#6366F1" },
  { id: "image", label: "Image", icon: "◻", color: "#06b6d4" },
  { id: "video", label: "Video", icon: "▶", color: "#3b82f6" },
  { id: "audio", label: "Audio", icon: "♪", color: "#8b5cf6" },
];

function InputPipelineWidget() {
  const [activeInput, setActiveInput] = useState(0);
  const [processing, setProcessing] = useState(false);

  const handleSelect = (i: number) => {
    setActiveInput(i);
    setProcessing(true);
    setTimeout(() => setProcessing(false), 1200);
  };

  return (
    <div className="pip-wrap">
      {/* Input selector row */}
      <div className="pip-inputs">
        {inputTypes.map((inp, i) => (
          <button
            key={inp.id}
            className={`pip-input ${i === activeInput ? "pip-input-active" : ""}`}
            onClick={() => handleSelect(i)}
            style={{ "--accent": inp.color } as React.CSSProperties}
          >
            <span className="pip-icon">{inp.icon}</span>
            <span className="pip-label">{inp.label}</span>
          </button>
        ))}
      </div>

      {/* Flow line */}
      <div className="pip-flow">
        <div className={`pip-flow-pulse ${processing ? "pip-flowing" : ""}`} />
        <div className="pip-flow-dot" />
        <div className="pip-flow-line" />
        <div className="pip-flow-dot" />
      </div>

      {/* Output preview */}
      <div className={`pip-output ${processing ? "pip-output-processing" : ""}`}>
        <div className="pip-output-label">
          <span className="pip-output-dot" />
          {processing ? "Processing..." : "AI Video Output"}
        </div>
        <div className="pip-output-preview">
          <div className="pip-output-shimmer" />
          {!processing && (
            <div className="pip-output-ready">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .pip-wrap {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.03);
        }

        .pip-inputs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 24px;
        }

        .pip-input {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px 8px;
          border-radius: 16px;
          border: 1.5px solid #f0f0f2;
          background: #fafafa;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          text-align: center;
        }

        .pip-input:hover {
          border-color: #e0e0e5;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.04);
        }

        .pip-input:active {
          transform: translateY(0) scale(0.97);
        }

        .pip-input-active {
          border-color: var(--accent) !important;
          background: color-mix(in srgb, var(--accent) 6%, white) !important;
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 12%, transparent);
        }

        .pip-icon {
          font-size: 18px;
          font-weight: 700;
          font-family: var(--font-display);
          color: #333;
          transition: transform 0.3s ease;
        }

        .pip-input:hover .pip-icon {
          transform: scale(1.15);
        }

        .pip-input-active .pip-icon {
          color: var(--accent);
        }

        .pip-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          color: #999;
        }

        .pip-input-active .pip-label {
          color: #555;
        }

        /* Flow connector */
        .pip-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-bottom: 24px;
          position: relative;
          height: 24px;
        }

        .pip-flow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ddd;
          z-index: 2;
        }

        .pip-flow-line {
          flex: 1;
          max-width: 120px;
          height: 2px;
          background: #eee;
          position: relative;
          overflow: hidden;
        }

        .pip-flow-pulse {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #06b6d4;
          opacity: 0;
          z-index: 3;
        }

        .pip-flowing {
          animation: flowPulse 1.2s ease forwards;
        }

        @keyframes flowPulse {
          0% { left: 30%; opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50% { left: 50%; opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
          100% { left: 70%; opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        }

        /* Output */
        .pip-output {
          border-radius: 18px;
          border: 1.5px solid #eee;
          overflow: hidden;
          background: #fafafa;
          transition: border-color 0.4s ease;
        }

        .pip-output-processing {
          border-color: #06b6d4;
        }

        .pip-output-label {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: #888;
        }

        .pip-output-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px rgba(16,185,129,0.4);
        }

        .pip-output-processing .pip-output-dot {
          background: #06b6d4;
          animation: pulse-dot 1s ease-in-out infinite;
        }

        .pip-output-preview {
          height: 100px;
          margin: 0 12px 12px;
          border-radius: 12px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pip-output-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          animation: shimmerSlide 2s ease-in-out infinite;
        }

        @keyframes shimmerSlide {
          100% { transform: translateX(100%); }
        }

        .pip-output-ready {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeScale 0.4s ease;
        }

        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 640px) {
          .pip-inputs {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════
   WIDGET 2 — Model Comparison
   Side-by-side model cards with live stat bars
   ═══════════════════════════════════════════════════════ */

const models = [
  { name: "Sora v2", provider: "OpenAI", quality: 98, speed: 85, style: 92, color: "#10a37f", letter: "S" },
  { name: "Runway Gen-4", provider: "Runway", quality: 94, speed: 78, style: 96, color: "#ff6b35", letter: "R" },
  { name: "Kling 2.0", provider: "Kuaishou", quality: 91, speed: 94, style: 88, color: "#3b82f6", letter: "K" },
  { name: "Pika Labs", provider: "Pika", quality: 89, speed: 90, style: 93, color: "#f43f5e", letter: "P" },
];

function ModelCompareWidget() {
  const [selected, setSelected] = useState(0);
  const m = models[selected];

  return (
    <div className="mc-wrap">
      {/* Model tabs */}
      <div className="mc-tabs">
        {models.map((mod, i) => (
          <button
            key={mod.name}
            className={`mc-tab ${i === selected ? "mc-tab-active" : ""}`}
            onClick={() => setSelected(i)}
          >
            <div className="mc-tab-letter" style={{ background: mod.color }}>{mod.letter}</div>
            <div className="mc-tab-info">
              <span className="mc-tab-name">{mod.name}</span>
              <span className="mc-tab-provider">{mod.provider}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Stats panel */}
      <div className="mc-stats" key={m.name}>
        {[
          { label: "Quality", value: m.quality },
          { label: "Speed", value: m.speed },
          { label: "Style", value: m.style },
        ].map((stat) => (
          <div key={stat.label} className="mc-stat">
            <div className="mc-stat-top">
              <span className="mc-stat-label">{stat.label}</span>
              <span className="mc-stat-value" style={{ color: m.color }}>{stat.value}%</span>
            </div>
            <div className="mc-stat-track">
              <div
                className="mc-stat-fill"
                style={{ width: `${stat.value}%`, background: m.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .mc-wrap {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.03);
        }

        .mc-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 24px;
        }

        .mc-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px;
          border-radius: 16px;
          border: 1.5px solid #f0f0f2;
          background: #fafafa;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          text-align: left;
          width: 100%;
        }

        .mc-tab:hover {
          border-color: #e0e0e5;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.04);
        }

        .mc-tab:active {
          transform: translateY(0) scale(0.97);
        }

        .mc-tab-active {
          border-color: var(--purple) !important;
          background: rgba(99, 102, 241, 0.04) !important;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .mc-tab-letter {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          font-family: var(--font-display);
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }

        .mc-tab:hover .mc-tab-letter {
          transform: scale(1.12) rotate(-3deg);
        }

        .mc-tab-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .mc-tab-name {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: #222;
        }

        .mc-tab-provider {
          font-family: var(--font-body);
          font-size: 11px;
          color: #bbb;
        }

        /* Stats with animated entrance */
        .mc-stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #f8f8fa;
          border: 1px solid #eee;
          border-radius: 18px;
          padding: 20px;
          animation: fadeSlide 0.35s ease;
        }

        @keyframes fadeSlide {
          from { opacity: 0.6; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mc-stat-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .mc-stat-label {
          font-family: var(--font-body);
          font-size: 12px;
          color: #999;
          font-weight: 500;
        }

        .mc-stat-value {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
        }

        .mc-stat-track {
          width: 100%;
          height: 6px;
          border-radius: 100px;
          background: #eee;
          overflow: hidden;
        }

        .mc-stat-fill {
          height: 100%;
          border-radius: 100px;
          transition: width 0.6s cubic-bezier(0.22,1,0.36,1);
        }
      `}</style>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════
   WIDGET 3 — Community Mosaic
   Hoverable tiles showing community creations
   ═══════════════════════════════════════════════════════ */

const mosaicItems = [
  { title: "Neon Tokyo", author: "Maya L.", likes: "2.4K", gradient: "linear-gradient(135deg, #ff6b6b, #ee5a24)" },
  { title: "Underwater World", author: "Alex K.", likes: "1.8K", gradient: "linear-gradient(135deg, #0abde3, #10ac84)" },
  { title: "Space Nebula", author: "Chris W.", likes: "3.1K", gradient: "linear-gradient(135deg, #6c5ce7, #a29bfe)" },
  { title: "Desert Storm", author: "Rami P.", likes: "987", gradient: "linear-gradient(135deg, #f9ca24, #f0932b)" },
  { title: "Arctic Lights", author: "Ava M.", likes: "2.0K", gradient: "linear-gradient(135deg, #00d2ff, #3a7bd5)" },
  { title: "Vintage Film", author: "Leo B.", likes: "1.5K", gradient: "linear-gradient(135deg, #c9920e, #7c5e1b)" },
];

function CommunityMosaicWidget() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <div className="cm-wrap">
      <div className="cm-bar">
        <div className="cm-bar-left">
          <span className="cm-live-dot" />
          <span className="cm-bar-title">Community Feed</span>
        </div>
        <span className="cm-online">4.2K online</span>
      </div>

      <div className="cm-grid">
        {mosaicItems.map((item, i) => (
          <div
            key={i}
            className={`cm-tile ${hovered === i ? "cm-tile-hovered" : ""}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="cm-tile-bg" style={{ background: item.gradient }} />
            
            {/* Hover overlay */}
            <div className="cm-tile-overlay">
              <div className="cm-tile-info">
                <span className="cm-tile-title">{item.title}</span>
                <span className="cm-tile-author">{item.author}</span>
              </div>
              <button
                className={`cm-tile-heart ${liked.includes(i) ? "cm-tile-liked" : ""}`}
                onClick={(e) => toggleLike(i, e)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" 
                  fill={liked.includes(i) ? "#f43f5e" : "none"} 
                  stroke={liked.includes(i) ? "#f43f5e" : "#fff"} strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                <span>{liked.includes(i) ? parseInt(item.likes.replace("K","").replace(",","")) + 1 : item.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .cm-wrap {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.03);
        }

        .cm-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .cm-bar-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cm-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .cm-bar-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          color: #222;
        }

        .cm-online {
          font-family: var(--font-body);
          font-size: 11px;
          color: #bbb;
        }

        .cm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .cm-tile {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          aspect-ratio: 4/5;
          cursor: pointer;
          transition: transform 0.5s cubic-bezier(0.25,1,0.5,1);
        }

        .cm-tile:hover {
          transform: scale(1.04);
          z-index: 2;
        }

        .cm-tile-bg {
          position: absolute;
          inset: 0;
        }

        .cm-tile-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 10px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cm-tile:hover .cm-tile-overlay {
          opacity: 1;
        }

        .cm-tile-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
          margin-bottom: 6px;
        }

        .cm-tile-title {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          color: #fff;
        }

        .cm-tile-author {
          font-family: var(--font-body);
          font-size: 8px;
          color: rgba(255,255,255,0.6);
        }

        .cm-tile-heart {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
          border: none;
          border-radius: 100px;
          padding: 4px 8px;
          cursor: pointer;
          transition: all 0.25s ease;
          align-self: flex-start;
        }

        .cm-tile-heart:hover {
          background: rgba(255,255,255,0.25);
        }

        .cm-tile-liked {
          animation: heartBeat 0.35s ease;
        }

        @keyframes heartBeat {
          40% { transform: scale(1.2); }
        }

        .cm-tile-heart span {
          font-family: var(--font-body);
          font-size: 9px;
          color: #fff;
          font-weight: 500;
        }

        @media (max-width: 640px) {
          .cm-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════
   WIDGET 4 — Render Timeline
   A cinematic progress/timeline showing frame renders
   ═══════════════════════════════════════════════════════ */

function RenderTimelineWidget() {
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setProgress(0);
    intervalRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 100;
        }
        return Math.min(p + (p < 30 ? 3 : p < 70 ? 1.2 : 2.5), 100);
      });
    }, 100);
  };

  const reset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsGenerating(false);
    setProgress(0);
  };

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const done = progress >= 100;
  const frames = [1, 2, 3, 4, 5, 6];
  const activeFrames = Math.floor((progress / 100) * frames.length);

  return (
    <div className="rt-wrap">
      {/* Header */}
      <div className="rt-header">
        <div className="rt-header-left">
          <div className={`rt-dot ${isGenerating && !done ? "rt-dot-active" : done ? "rt-dot-done" : ""}`} />
          <span className="rt-status">
            {done ? "Complete" : isGenerating ? "Generating..." : "Ready"}
          </span>
        </div>
        <span className="rt-pct">{Math.round(progress)}%</span>
      </div>

      {/* Progress track */}
      <div className="rt-track">
        <div className="rt-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Frame strip */}
      <div className="rt-frames">
        {frames.map((f, i) => (
          <div key={f} className={`rt-frame ${i < activeFrames ? "rt-frame-done" : ""}`}>
            <div className="rt-frame-inner" style={{
              background: i < activeFrames
                ? `linear-gradient(${135 + i * 30}deg, ${["#667eea","#764ba2","#06b6d4","#3b82f6","#8b5cf6","#06b6d4"][i]}, ${["#764ba2","#06b6d4","#3b82f6","#8b5cf6","#06b6d4","#667eea"][i]})`
                : "transparent",
            }} />
            <span className="rt-frame-num">F{f}</span>
          </div>
        ))}
      </div>

      {/* Stats strip */}
      <div className="rt-stats">
        <div className="rt-stat"><span className="rt-stat-k">Resolution</span><span className="rt-stat-v">1080p</span></div>
        <div className="rt-stat"><span className="rt-stat-k">FPS</span><span className="rt-stat-v">24</span></div>
        <div className="rt-stat"><span className="rt-stat-k">Duration</span><span className="rt-stat-v">10s</span></div>
      </div>

      {/* CTA */}
      <button className={`rt-btn ${done ? "rt-btn-reset" : ""}`} onClick={done ? reset : start}>
        {done ? "↻ Generate Again" : isGenerating ? "Processing..." : "▶ Start Generation"}
      </button>

      <style jsx>{`
        .rt-wrap {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.03);
        }

        .rt-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .rt-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rt-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ddd;
          transition: background 0.3s ease;
        }

        .rt-dot-active {
          background: #f59e0b;
          animation: pulse-dot 1.2s ease-in-out infinite;
        }

        .rt-dot-done {
          background: #10b981;
        }

        .rt-status {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: #555;
        }

        .rt-pct {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .rt-track {
          width: 100%;
          height: 6px;
          background: #f0f0f2;
          border-radius: 100px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .rt-fill {
          height: 100%;
          background: linear-gradient(90deg, #06b6d4, #3b82f6);
          border-radius: 100px;
          transition: width 0.15s linear;
          position: relative;
          overflow: hidden;
        }

        .rt-fill::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shimmerSlide 1.5s infinite;
        }

        .rt-frames {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 8px;
          margin-bottom: 18px;
        }

        .rt-frame {
          aspect-ratio: 1;
          border-radius: 10px;
          background: #f5f5f7;
          border: 1px solid #eee;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
        }

        .rt-frame-done {
          border-color: transparent;
          animation: framePopIn 0.3s ease;
        }

        .rt-frame-done:hover {
          transform: translateY(-4px) scale(1.1);
          z-index: 5;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        @keyframes framePopIn {
          from { transform: scale(0.85); opacity: 0.4; }
          to { transform: scale(1); opacity: 1; }
        }

        .rt-frame-inner {
          position: absolute;
          inset: 0;
          border-radius: 9px;
        }

        .rt-frame-num {
          position: relative;
          z-index: 1;
          font-family: var(--font-body);
          font-size: 9px;
          font-weight: 700;
          color: #ccc;
        }

        .rt-frame-done .rt-frame-num {
          color: rgba(255,255,255,0.85);
          text-shadow: 0 1px 3px rgba(0,0,0,0.25);
        }

        .rt-stats {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .rt-stat {
          flex: 1;
          background: #f8f8fa;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 10px;
          text-align: center;
        }

        .rt-stat-k {
          display: block;
          font-family: var(--font-body);
          font-size: 10px;
          color: #bbb;
          margin-bottom: 3px;
        }

        .rt-stat-v {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 600;
          color: #222;
        }

        .rt-btn {
          width: 100%;
          padding: 13px;
          border-radius: 14px;
          border: none;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(6,182,212,0.2);
        }

        .rt-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(6,182,212,0.3);
        }

        .rt-btn-reset {
          background: #111;
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }

        .rt-btn-reset:hover {
          background: #333;
          box-shadow: 0 6px 24px rgba(0,0,0,0.12);
        }
      `}</style>
    </div>
  );
}
