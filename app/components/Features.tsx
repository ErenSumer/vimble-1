"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════
   FEATURES SECTION — 4 Alternating Subsections
   ═══════════════════════════════════════════════════════ */

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each feature block on scroll
      gsap.utils.toArray<HTMLElement>(".feat-block").forEach((block) => {
        const widget = block.querySelector(".feat-widget");
        const text = block.querySelector(".feat-text");

        gsap.fromTo(
          widget,
          { opacity: 0, x: block.classList.contains("feat-reversed") ? 60 : -60, scale: 0.95 },
          {
            opacity: 1, x: 0, scale: 1,
            duration: 1.2, ease: "expo.out",
            scrollTrigger: { trigger: block, start: "top 80%", toggleActions: "play none none none" },
          }
        );
        gsap.fromTo(
          text,
          { opacity: 0, x: block.classList.contains("feat-reversed") ? -40 : 40 },
          {
            opacity: 1, x: 0,
            duration: 1.1, ease: "expo.out", delay: 0.15,
            scrollTrigger: { trigger: block, start: "top 80%", toggleActions: "play none none none" },
          }
        );
      });

      // Section header
      const header = sectionRef.current?.querySelector(".feat-header");
      if (header) {
        gsap.fromTo(header, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 1.1, ease: "expo.out",
          scrollTrigger: { trigger: header, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="feat-section">
      {/* Section Header */}
      <div className="feat-header" style={{ opacity: 0 }}>
        <span className="feat-badge">FEATURES</span>
        <h2 className="feat-title">
          Everything you need to create <span className="feat-title-accent">incredible videos</span>
        </h2>
        <p className="feat-subtitle">
          From prompt to masterpiece — powerful tools that make AI video generation effortless.
        </p>
      </div>

      {/* Feature 1: Multi-Model AI — Widget LEFT */}
      <div className="feat-block">
        <div className="feat-widget" style={{ opacity: 0 }}>
          <ModelSelectorWidget />
        </div>
        <div className="feat-text" style={{ opacity: 0 }}>
          <span className="feat-num">01</span>
          <h3 className="feat-heading">Multi-Model Intelligence</h3>
          <p className="feat-desc">
            Access the world&apos;s most powerful AI video models — Sora, Runway Gen-4, Kling, Pika, and more — all from a single interface. 
            Compare outputs, switch models instantly, and always use the best tool for the job.
          </p>
          <div className="feat-tags">
            <span className="feat-tag">10+ Models</span>
            <span className="feat-tag">Auto-Select</span>
            <span className="feat-tag">Side-by-Side</span>
          </div>
        </div>
      </div>

      {/* Feature 2: Multi-Source Input — Widget RIGHT */}
      <div className="feat-block feat-reversed">
        <div className="feat-text" style={{ opacity: 0 }}>
          <span className="feat-num">02</span>
          <h3 className="feat-heading">Create From Anything</h3>
          <p className="feat-desc">
            Start with whatever inspires you — a text prompt, a photo, an existing video, or even audio. 
            Our AI understands your intent and transforms any input into stunning video content.
          </p>
          <div className="feat-tags">
            <span className="feat-tag">Text-to-Video</span>
            <span className="feat-tag">Image-to-Video</span>
            <span className="feat-tag">Video-to-Video</span>
          </div>
        </div>
        <div className="feat-widget" style={{ opacity: 0 }}>
          <SourceInputWidget />
        </div>
      </div>

      {/* Feature 3: Community & Explore — Widget LEFT */}
      <div className="feat-block">
        <div className="feat-widget" style={{ opacity: 0 }}>
          <CommunityWidget />
        </div>
        <div className="feat-text" style={{ opacity: 0 }}>
          <span className="feat-num">03</span>
          <h3 className="feat-heading">Explore &amp; Get Inspired</h3>
          <p className="feat-desc">
            Discover stunning videos created by a global community of creators. 
            Browse trending content, save your favorites, remix ideas, and share your own creations with the world.
          </p>
          <div className="feat-tags">
            <span className="feat-tag">Trending Feed</span>
            <span className="feat-tag">Remix Prompts</span>
            <span className="feat-tag">Social Sharing</span>
          </div>
        </div>
      </div>

      {/* Feature 4: Generation Dashboard — Widget RIGHT */}
      <div className="feat-block feat-reversed">
        <div className="feat-text" style={{ opacity: 0 }}>
          <span className="feat-num">04</span>
          <h3 className="feat-heading">Real-Time Generation</h3>
          <p className="feat-desc">
            Watch your vision come to life in real time. Track generation progress, preview frames as they render, 
            and fine-tune parameters on the fly. Full control, zero guesswork.
          </p>
          <div className="feat-tags">
            <span className="feat-tag">Live Preview</span>
            <span className="feat-tag">Frame-by-Frame</span>
            <span className="feat-tag">Smart Queue</span>
          </div>
        </div>
        <div className="feat-widget" style={{ opacity: 0 }}>
          <GenerationDashboardWidget />
        </div>
      </div>

      <style jsx global>{`
        .feat-section {
          position: relative;
          padding: 120px 20px 140px;
          background: #fff;
          overflow: hidden;
        }

        .feat-header {
          text-align: center;
          max-width: 660px;
          margin: 0 auto 90px;
        }

        .feat-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--purple);
          background: rgba(108, 92, 231, 0.07);
          border: 1px solid rgba(108, 92, 231, 0.12);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 20px;
        }

        .feat-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #0a0a0a;
          margin-bottom: 16px;
        }

        .feat-title-accent {
          background: linear-gradient(135deg, var(--purple), var(--purple-vivid));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .feat-subtitle {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.6vw, 17px);
          color: #888;
          line-height: 1.7;
        }

        /* ── Feature Block Layout ── */
        .feat-block {
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto 100px;
          padding: 0 20px;
        }

        .feat-block:last-of-type {
          margin-bottom: 0;
        }

        .feat-reversed {
          /* text is first in DOM, widget second → text LEFT, widget RIGHT */
        }

        @media (max-width: 860px) {
          .feat-block,
          .feat-reversed {
            flex-direction: column;
            gap: 36px;
          }
          .feat-widget {
            width: 100% !important;
            max-width: 440px !important;
          }
        }

        .feat-widget {
          flex: 0 0 48%;
          max-width: 500px;
        }

        .feat-text {
          flex: 1;
          min-width: 0;
        }

        .feat-num {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--purple);
          margin-bottom: 14px;
          opacity: 0.7;
        }

        .feat-heading {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.15;
          color: #0a0a0a;
          margin-bottom: 16px;
        }

        .feat-desc {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.5vw, 16px);
          color: #777;
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .feat-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .feat-tag {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          color: #888;
          background: #f5f5f7;
          border: 1px solid #eee;
          padding: 5px 14px;
          border-radius: 100px;
        }
      `}</style>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════
   WIDGET 1 — Multi-Model Selector
   ═══════════════════════════════════════════════════════ */

const aiModels = [
  { name: "Sora v2", provider: "OpenAI", quality: 98, speed: "Fast", color: "#10a37f", icon: "S" },
  { name: "Runway Gen-4", provider: "Runway", quality: 95, speed: "Medium", color: "#ff6b35", icon: "R" },
  { name: "Kling 2.0", provider: "Kuaishou", quality: 92, speed: "Fast", color: "#3b82f6", icon: "K" },
  { name: "Pika Labs", provider: "Pika", quality: 90, speed: "Fast", color: "#f43f5e", icon: "P" },
];

function ModelSelectorWidget() {
  const [selected, setSelected] = useState(0);
  const model = aiModels[selected];

  return (
    <div className="w-model-wrap">
      {/* Model cards */}
      <div className="w-model-grid">
        {aiModels.map((m, i) => (
          <button
            key={m.name}
            className={`w-model-card ${i === selected ? "w-model-active" : ""}`}
            onClick={() => setSelected(i)}
          >
            <div className="w-model-icon" style={{ background: m.color }}>{m.icon}</div>
            <div className="w-model-info">
              <div className="w-model-name">{m.name}</div>
              <div className="w-model-provider">{m.provider}</div>
            </div>
            <div className={`w-model-check ${i === selected ? "w-model-check-on" : ""}`}>
              {i === selected && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Selected model details */}
      <div className="w-model-detail" key={model.name}>
        <div className="w-model-detail-header">
          <div className="w-model-detail-icon" style={{ background: model.color }}>{model.icon}</div>
          <div>
            <div className="w-model-detail-name">{model.name}</div>
            <div className="w-model-detail-prov">{model.provider}</div>
          </div>
        </div>
        <div className="w-model-stats">
          <div className="w-model-stat">
            <div className="w-model-stat-label">Quality Score</div>
            <div className="w-model-stat-bar">
              <div className="w-model-stat-fill" style={{ width: `${model.quality}%`, background: model.color }} />
            </div>
            <div className="w-model-stat-val" style={{ color: model.color }}>{model.quality}%</div>
          </div>
          <div className="w-model-stat">
            <div className="w-model-stat-label">Speed</div>
            <div className="w-model-stat-speed">{model.speed}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .w-model-wrap {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 24px;
          padding: 20px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03);
        }

        .w-model-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .w-model-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1.5px solid #f0f0f2;
          background: #fafafa;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          text-align: left;
          width: 100%;
        }

        .w-model-card:hover {
          border-color: #e0e0e5;
          background: #f5f5f8;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .w-model-active {
          border-color: var(--purple) !important;
          background: var(--purple-glow) !important;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
        }

        .w-model-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 13px;
          font-weight: 800;
          font-family: var(--font-display);
          flex-shrink: 0;
        }

        .w-model-info {
          flex: 1;
          min-width: 0;
        }

        .w-model-name {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          color: #111;
        }

        .w-model-provider {
          font-family: var(--font-body);
          font-size: 11px;
          color: #aaa;
          margin-top: 1px;
        }

        .w-model-check {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #ddd;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .w-model-check-on {
          border-color: var(--purple);
          background: var(--purple);
        }

        /* Detail panel */
        .w-model-detail {
          background: #f8f8fa;
          border: 1px solid #eee;
          border-radius: 16px;
          padding: 16px;
          animation: fadeSlideUp 0.35s ease;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0.5; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .w-model-detail-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .w-model-detail-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          font-family: var(--font-display);
        }

        .w-model-detail-name {
          font-size: 14px;
          font-weight: 700;
          color: #111;
          font-family: var(--font-display);
        }

        .w-model-detail-prov {
          font-size: 11px;
          color: #aaa;
        }

        .w-model-stats {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .w-model-stat {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .w-model-stat-label {
          font-size: 12px;
          color: #888;
          flex: 0 0 90px;
        }

        .w-model-stat-bar {
          flex: 1;
          height: 6px;
          background: #eee;
          border-radius: 100px;
          overflow: hidden;
        }

        .w-model-stat-fill {
          height: 100%;
          border-radius: 100px;
          transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .w-model-stat-val {
          font-size: 13px;
          font-weight: 700;
          flex: 0 0 40px;
          text-align: right;
        }

        .w-model-stat-speed {
          font-size: 13px;
          font-weight: 600;
          color: #10b981;
        }
      `}</style>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════
   WIDGET 2 — Multi-Source Input
   ═══════════════════════════════════════════════════════ */

const sources = [
  {
    id: "text",
    label: "Text",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h14" />
      </svg>
    ),
    preview: {
      title: "Text Prompt",
      content: '"A serene Japanese garden in autumn, cherry blossoms falling gently into a koi pond, cinematic 4K..."',
    },
  },
  {
    id: "image",
    label: "Image",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
      </svg>
    ),
    preview: {
      title: "Source Image",
      content: "landscape_sunset.jpg",
    },
  },
  {
    id: "video",
    label: "Video",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9l5 3-5 3V9z" />
      </svg>
    ),
    preview: {
      title: "Source Video",
      content: "drone_footage_raw.mp4",
    },
  },
];

function SourceInputWidget() {
  const [active, setActive] = useState(0);
  const src = sources[active];

  return (
    <div className="w-src-wrap">
      {/* Tabs */}
      <div className="w-src-tabs">
        {sources.map((s, i) => (
          <button
            key={s.id}
            className={`w-src-tab ${i === active ? "w-src-tab-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="w-src-tab-icon">{s.icon}</span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-src-content" key={src.id}>
        {src.id === "text" && (
          <div className="w-src-text-area">
            <div className="w-src-label">{src.preview.title}</div>
            <div className="w-src-prompt">{src.preview.content}</div>
            <div className="w-src-cursor" />
          </div>
        )}

        {src.id === "image" && (
          <div className="w-src-image-area">
            <div className="w-src-label">{src.preview.title}</div>
            <div className="w-src-img-placeholder">
              {/* Fake image with gradient */}
              <div className="w-src-img-mock" />
              <div className="w-src-img-filename">{src.preview.content}</div>
            </div>
          </div>
        )}

        {src.id === "video" && (
          <div className="w-src-video-area">
            <div className="w-src-label">{src.preview.title}</div>
            <div className="w-src-vid-placeholder">
              <div className="w-src-vid-mock" />
              <div className="w-src-vid-timeline">
                <div className="w-src-vid-progress" />
                <div className="w-src-vid-handle" />
              </div>
              <div className="w-src-img-filename">{src.preview.content}</div>
            </div>
          </div>
        )}
      </div>

      {/* Arrow indicator */}
      <div className="w-src-arrow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
        </svg>
      </div>

      {/* Output preview */}
      <div className="w-src-output">
        <div className="w-src-output-bar">
          <div className="w-src-output-dot" />
          <span>AI Video Output</span>
        </div>
        <div className="w-src-output-preview" />
      </div>

      <style jsx>{`
        .w-src-wrap {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 24px;
          padding: 20px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03);
        }

        .w-src-tabs {
          display: flex;
          gap: 6px;
          margin-bottom: 16px;
          background: #f5f5f7;
          border-radius: 12px;
          padding: 4px;
        }

        .w-src-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 10px;
          border-radius: 10px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: #888;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .w-src-tab:hover {
          color: #333;
          background: rgba(0,0,0,0.02);
        }

        .w-src-tab-active {
          background: #fff;
          color: var(--purple);
          box-shadow: 0 4px 16px rgba(0,0,0,0.08);
          transform: scale(1.02);
        }

        .w-src-tab-icon {
          display: flex;
          align-items: center;
        }

        .w-src-content {
          animation: fadeSlideUp 0.3s ease;
          margin-bottom: 16px;
        }

        .w-src-label {
          font-size: 11px;
          font-weight: 600;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .w-src-text-area {
          position: relative;
        }

        .w-src-prompt {
          background: #f8f8fa;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 14px 16px;
          font-family: var(--font-body);
          font-size: 13px;
          color: #444;
          line-height: 1.6;
          font-style: italic;
          position: relative;
        }

        .w-src-cursor {
          position: absolute;
          bottom: 18px;
          right: 20px;
          width: 2px;
          height: 16px;
          background: var(--purple);
          border-radius: 2px;
          animation: blink 1s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .w-src-img-placeholder,
        .w-src-vid-placeholder {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .w-src-img-mock {
          width: 100%;
          height: 120px;
          border-radius: 14px;
          background: linear-gradient(135deg, #fce4ec, #e8eaf6, #e0f7fa);
          position: relative;
          overflow: hidden;
        }

        .w-src-img-mock::after {
          content: "🏔";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 32px;
        }

        .w-src-vid-mock {
          width: 100%;
          height: 100px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .w-src-vid-mock::after {
          content: "";
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.4);
        }

        .w-src-vid-timeline {
          height: 6px;
          background: #eee;
          border-radius: 100px;
          position: relative;
          overflow: visible;
        }

        .w-src-vid-progress {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 35%;
          background: var(--purple);
          border-radius: 100px;
        }

        .w-src-vid-handle {
          position: absolute;
          left: 35%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--purple);
          border: 2px solid #fff;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
        }

        .w-src-img-filename {
          font-size: 11px;
          color: #bbb;
          text-align: center;
        }

        .w-src-arrow {
          display: flex;
          justify-content: center;
          margin-bottom: 14px;
          opacity: 0.5;
        }

        .w-src-output {
          background: #f8f8fa;
          border: 1px solid #eee;
          border-radius: 16px;
          overflow: hidden;
        }

        .w-src-output-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          font-size: 11px;
          font-weight: 600;
          color: #888;
        }

        .w-src-output-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .w-src-output-preview {
          height: 60px;
          margin: 0 12px 12px;
          border-radius: 10px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════
   WIDGET 3 — Community Feed
   ═══════════════════════════════════════════════════════ */

const communityVideos = [
  { title: "Neon Tokyo Streets", author: "Maya L.", likes: "2.4K", gradient: "linear-gradient(135deg, #ff6b6b, #ee5a24)", avatar: "M" },
  { title: "Underwater Coral", author: "Alex K.", likes: "1.8K", gradient: "linear-gradient(135deg, #0abde3, #10ac84)", avatar: "A" },
  { title: "Space Nebula", author: "Chris W.", likes: "3.1K", gradient: "linear-gradient(135deg, #6c5ce7, #a29bfe)", avatar: "C" },
  { title: "Desert Storm", author: "Rami P.", likes: "987", gradient: "linear-gradient(135deg, #f9ca24, #f0932b)", avatar: "R" },
];

function CommunityWidget() {
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (i: number) => {
    setLiked((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  };

  return (
    <div className="w-comm-wrap">
      <div className="w-comm-header">
        <div className="w-comm-header-title">
          <div className="w-comm-live-dot" />
          Community Feed
        </div>
        <span className="w-comm-online">4.2K online</span>
      </div>

      <div className="w-comm-grid">
        {communityVideos.map((v, i) => (
          <div key={i} className="w-comm-card">
            <div className="w-comm-thumb" style={{ background: v.gradient }}>
              {/* Play icon */}
              <div className="w-comm-play">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </div>
            </div>
            <div className="w-comm-meta">
              <div className="w-comm-meta-left">
                <div className="w-comm-avatar" style={{ background: v.gradient }}>{v.avatar}</div>
                <div>
                  <div className="w-comm-vtitle">{v.title}</div>
                  <div className="w-comm-author">{v.author}</div>
                </div>
              </div>
              <button
                className={`w-comm-like ${liked.includes(i) ? "w-comm-liked" : ""}`}
                onClick={() => toggleLike(i)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill={liked.includes(i) ? "#f43f5e" : "none"} stroke={liked.includes(i) ? "#f43f5e" : "#ccc"} strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
                <span className="w-comm-like-count">{liked.includes(i) ? `${((parseFloat(v.likes.replace("K", "")) * (v.likes.includes("K") ? 1000 : 1)) + 1).toLocaleString()}` : v.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .w-comm-wrap {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 24px;
          padding: 20px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03);
        }

        .w-comm-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .w-comm-header-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 700;
          color: #111;
        }

        .w-comm-live-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .w-comm-online {
          font-size: 11px;
          color: #aaa;
          font-weight: 500;
        }

        .w-comm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .w-comm-card {
          border-radius: 14px;
          border: 1px solid #f0f0f2;
          overflow: hidden;
          background: #fafafa;
          transition: all 0.3s ease;
        }

        .w-comm-card:hover {
          border-color: #e0e0e5;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }

        .w-comm-thumb {
          width: 100%;
          aspect-ratio: 16/10;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .w-comm-play {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
          padding-left: 2px;
        }

        .w-comm-card:hover .w-comm-play {
          opacity: 1;
        }

        .w-comm-meta {
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .w-comm-meta-left {
          display: flex;
          align-items: center;
          gap: 7px;
          min-width: 0;
        }

        .w-comm-avatar {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          color: #fff;
          font-size: 8px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .w-comm-vtitle {
          font-size: 10px;
          font-weight: 600;
          color: #222;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .w-comm-author {
          font-size: 9px;
          color: #bbb;
        }

        .w-comm-like {
          display: flex;
          align-items: center;
          gap: 3px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .w-comm-like:hover {
          background: #fef2f2;
        }

        .w-comm-liked {
          animation: heartBeat 0.4s ease;
        }

        @keyframes heartBeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }

        .w-comm-like-count {
          font-size: 10px;
          color: #aaa;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════
   WIDGET 4 — Generation Dashboard
   ═══════════════════════════════════════════════════════ */

function GenerationDashboardWidget() {
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startGeneration = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setProgress(0);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 100;
        }
        // Non-linear progress: fast start, slow middle, fast end
        const increment = prev < 30 ? 3 : prev < 70 ? 1.2 : 2.5;
        return Math.min(prev + increment, 100);
      });
    }, 100);
  };

  const resetGeneration = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsGenerating(false);
    setProgress(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const frames = [12, 24, 36, 48, 60, 72, 84, 96];
  const activeFrames = Math.floor((progress / 100) * frames.length);
  const done = progress >= 100;

  return (
    <div className="w-gen-wrap">
      {/* Header */}
      <div className="w-gen-header">
        <div className="w-gen-header-left">
          <div className={`w-gen-status-dot ${isGenerating && !done ? "w-gen-status-active" : done ? "w-gen-status-done" : ""}`} />
          <span className="w-gen-status-text">
            {done ? "Complete!" : isGenerating ? "Generating..." : "Ready"}
          </span>
        </div>
        <span className="w-gen-progress-pct">{Math.round(progress)}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-gen-progress-track">
        <div
          className="w-gen-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Frame previews */}
      <div className="w-gen-frames">
        <div className="w-gen-frames-label">Frame Preview</div>
        <div className="w-gen-frames-grid">
          {frames.map((f, i) => (
            <div
              key={f}
              className={`w-gen-frame ${i < activeFrames ? "w-gen-frame-rendered" : ""}`}
            >
              {i < activeFrames && (
                <div className="w-gen-frame-inner" style={{
                  background: `linear-gradient(${135 + i * 20}deg, ${["#667eea", "#764ba2", "#f093fb", "#f5576c", "#4facfe", "#43e97b", "#fa709a", "#fee140"][i]}, ${["#764ba2", "#f093fb", "#f5576c", "#4facfe", "#43e97b", "#fa709a", "#fee140", "#667eea"][i]})`,
                }} />
              )}
              <span className="w-gen-frame-num">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="w-gen-stats">
        <div className="w-gen-stat-item">
          <span className="w-gen-stat-label">Resolution</span>
          <span className="w-gen-stat-value">1080p</span>
        </div>
        <div className="w-gen-stat-item">
          <span className="w-gen-stat-label">FPS</span>
          <span className="w-gen-stat-value">24</span>
        </div>
        <div className="w-gen-stat-item">
          <span className="w-gen-stat-label">Duration</span>
          <span className="w-gen-stat-value">10s</span>
        </div>
      </div>

      {/* Action button */}
      <button
        className={`w-gen-btn ${done ? "w-gen-btn-reset" : ""}`}
        onClick={done ? resetGeneration : startGeneration}
      >
        {done ? "↻ Generate Again" : isGenerating ? "⏳ Processing..." : "▶ Start Generation"}
      </button>

      <style jsx>{`
        .w-gen-wrap {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 24px;
          padding: 22px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.03);
        }

        .w-gen-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .w-gen-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .w-gen-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ddd;
          transition: background 0.3s ease;
        }

        .w-gen-status-active {
          background: #f59e0b;
          animation: pulse-dot 1.2s ease-in-out infinite;
        }

        .w-gen-status-done {
          background: #10b981;
        }

        .w-gen-status-text {
          font-size: 13px;
          font-weight: 600;
          color: #555;
        }

        .w-gen-progress-pct {
          font-size: 20px;
          font-weight: 800;
          font-family: var(--font-display);
          background: linear-gradient(135deg, #6C5CE7, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .w-gen-progress-track {
          width: 100%;
          height: 8px;
          background: #f0f0f2;
          border-radius: 100px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .w-gen-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6C5CE7, #a855f7, #ec4899);
          border-radius: 100px;
          transition: width 0.15s linear;
          position: relative;
        }

        /* Frames */
        .w-gen-frames {
          margin-bottom: 18px;
        }

        .w-gen-frames-label {
          font-size: 11px;
          font-weight: 600;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .w-gen-frames-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 5px;
        }

        .w-gen-frame {
          aspect-ratio: 1;
          border-radius: 8px;
          background: #f5f5f7;
          border: 1px solid #eee;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
        }

        .w-gen-frame-rendered {
          border-color: transparent;
          animation: frameIn 0.3s ease;
        }

        @keyframes frameIn {
          from { transform: scale(0.8); opacity: 0.3; }
          to { transform: scale(1); opacity: 1; }
        }

        .w-gen-frame-inner {
          position: absolute;
          inset: 0;
          border-radius: 7px;
        }

        .w-gen-frame-num {
          position: relative;
          z-index: 1;
          font-size: 8px;
          font-weight: 700;
          color: #bbb;
        }

        .w-gen-frame-rendered .w-gen-frame-num {
          color: rgba(255,255,255,0.85);
          text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }

        /* Stats */
        .w-gen-stats {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .w-gen-stat-item {
          flex: 1;
          background: #f8f8fa;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 10px 12px;
          text-align: center;
        }

        .w-gen-stat-label {
          display: block;
          font-size: 10px;
          color: #aaa;
          margin-bottom: 3px;
        }

        .w-gen-stat-value {
          font-size: 14px;
          font-weight: 700;
          color: #222;
          font-family: var(--font-display);
        }

        /* Button */
        .w-gen-btn {
          width: 100%;
          padding: 12px 0;
          border-radius: 14px;
          border: none;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #6C5CE7, #a855f7);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(108,92,231,0.25);
        }

        .w-gen-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(108,92,231,0.3);
        }

        .w-gen-btn-reset {
          background: #111;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        .w-gen-btn-reset:hover {
          background: #333;
          box-shadow: 0 6px 24px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}
