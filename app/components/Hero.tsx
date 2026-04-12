"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const tagRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      delay: 0.35,
    });

    tl.fromTo(
      tagRef.current,
      { opacity: 0, y: 18, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }
    )
      .fromTo(
        h1Ref.current?.querySelectorAll(".hero-word") || [],
        { opacity: 0, y: 70, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.07,
        },
        "-=0.4"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 16, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        phonesRef.current?.querySelectorAll(".hero-phone") || [],
        { opacity: 0, y: 100, scale: 0.88 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          stagger: 0.12,
          ease: "expo.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="hero-section">
      {/* Subtle background decoration */}
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />

      <div className="hero-content">
        {/* Tagline */}
        <p ref={tagRef} className="hero-tagline" style={{ opacity: 0 }}>
          AI-powered video generation. Create from text, images &amp; beyond.
        </p>

        {/* Main Heading */}
        <h1
          ref={h1Ref}
          className="hero-heading"
          style={{ perspective: "800px" }}
        >
          <span className="hero-word">Vimble</span>
          <span className="hero-word hero-word-accent">AI</span>
        </h1>

        {/* Description */}
        <p ref={descRef} className="hero-description" style={{ opacity: 0 }}>
          Generate stunning videos with the world&apos;s most advanced AI models —
          from a single prompt, an image, or your wildest ideas. Explore, create,
          and share with a vibrant community.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="hero-cta-wrapper" style={{ opacity: 0 }}>
          <a href="/download" className="hero-cta-button">
            Start creating now
          </a>
        </div>
      </div>

      {/* Three Phone Mockups */}
      <div ref={phonesRef} className="hero-phones-container">
        {/* Left Phone — Explore Feed */}
        <div className="hero-phone hero-phone-side hero-phone-left" style={{ opacity: 0 }}>
          <PhoneMockup variant="explore" />
        </div>

        {/* Center Phone — Generation */}
        <div className="hero-phone hero-phone-center" style={{ opacity: 0 }}>
          <PhoneMockup variant="generate" />
        </div>

        {/* Right Phone — Results */}
        <div className="hero-phone hero-phone-side hero-phone-right" style={{ opacity: 0 }}>
          <PhoneMockup variant="result" />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 140px 20px 0;
          overflow: hidden;
          background: #fafafa;
        }

        .hero-bg-grid {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: radial-gradient(circle, #000 0.8px, transparent 0.8px);
          background-size: 28px 28px;
        }

        .hero-bg-glow {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(ellipse at 50% 40%, rgba(139,92,246,0.12) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
        }

        .hero-tagline {
          font-family: var(--font-body);
          font-size: clamp(12px, 1.6vw, 15px);
          font-weight: 400;
          letter-spacing: 0.02em;
          color: #888;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .hero-heading {
          font-family: var(--font-display);
          font-size: clamp(4rem, 14vw, 10rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #0a0a0a;
          margin-bottom: 28px;
          display: flex;
          align-items: baseline;
          gap: 0.12em;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-word {
          display: inline-block;
          opacity: 0;
        }

        .hero-word-accent {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
          font-weight: 700;
        }

        .hero-description {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.8vw, 17px);
          font-weight: 400;
          line-height: 1.75;
          color: #666;
          max-width: 540px;
          margin-bottom: 36px;
        }

        .hero-cta-wrapper {
          margin-bottom: 60px;
        }

        .hero-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 40px;
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border: none;
          border-radius: 100px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow:
            0 8px 24px rgba(139,92,246,0.3),
            0 1px 3px rgba(0,0,0,0.1);
        }

        .hero-cta-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow:
            0 14px 32px rgba(236,72,153,0.35),
            0 4px 12px rgba(139,92,246,0.2);
        }

        /* Phones */
        .hero-phones-container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 16px;
          padding-bottom: 0;
          width: 100%;
          max-width: 820px;
        }

        .hero-phone {
          flex-shrink: 0;
          animation: float-gentle 6s ease-in-out infinite;
        }

        .hero-phone-center {
          z-index: 3;
          animation-delay: -1s;
        }

        .hero-phone-side {
          z-index: 1;
        }

        .hero-phone-left {
          transform-origin: bottom right;
        }

        .hero-phone-right {
          transform-origin: bottom left;
          animation-delay: -2s;
        }

        @media (max-width: 640px) {
          .hero-phone-side {
            display: none;
          }
          .hero-phones-container {
            gap: 0;
          }
          .hero-section {
            padding-top: 120px;
          }
        }
      `}</style>
    </section>
  );
}


/* ─── Phone Mockup Subcomponent ─── */

function PhoneMockup({ variant }: { variant: "explore" | "generate" | "result" }) {
  const isCenter = variant === "generate";
  const width = isCenter ? 260 : 220;
  const height = isCenter ? 540 : 460;

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Phone frame */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: isCenter ? 40 : 36,
          background: "linear-gradient(160deg, #f0f0f0 0%, #e0e0e0 40%, #c8c8c8 100%)",
          boxShadow: `
            0 30px 80px rgba(0,0,0,0.15),
            0 10px 30px rgba(0,0,0,0.08),
            0 0 1px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(255,255,255,1)
          `,
        }}
      />

      {/* Screen */}
      <div
        style={{
          position: "absolute",
          inset: 3,
          borderRadius: isCenter ? 38 : 34,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            display: "flex",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <div
            style={{
              width: isCenter ? 80 : 70,
              height: isCenter ? 24 : 20,
              borderRadius: 100,
              background: "#111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#222",
                border: "1px solid #333",
              }}
            />
          </div>
        </div>

        {/* Screen Content */}
        <div
          style={{
            width: "100%",
            height: "100%",
            paddingTop: isCenter ? 50 : 44,
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 12,
            background: variant === "generate"
              ? "linear-gradient(180deg, #f7f7fa 0%, #fff 50%)"
              : variant === "explore"
              ? "#fff"
              : "linear-gradient(180deg, #faf9ff 0%, #fff 50%)",
            fontFamily: "var(--font-body)",
          }}
        >
          {variant === "explore" && <ExploreScreen />}
          {variant === "generate" && <GenerateScreen />}
          {variant === "result" && <ResultScreen />}
        </div>
      </div>

      {/* Side buttons */}
      <div style={{ position: "absolute", right: -1.5, top: isCenter ? 110 : 90, width: 2.5, height: 30, background: "#ccc", borderRadius: "0 2px 2px 0" }} />
      <div style={{ position: "absolute", left: -1.5, top: isCenter ? 90 : 75, width: 2.5, height: 18, background: "#ccc", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -1.5, top: isCenter ? 120 : 100, width: 2.5, height: 30, background: "#ccc", borderRadius: "2px 0 0 2px" }} />
      <div style={{ position: "absolute", left: -1.5, top: isCenter ? 160 : 140, width: 2.5, height: 30, background: "#ccc", borderRadius: "2px 0 0 2px" }} />
    </div>
  );
}


/* ─── Explore Feed Screen ─── */

function ExploreScreen() {
  const videos = [
    { title: "Ocean Drone", gradient: "linear-gradient(135deg, #667eea, #764ba2)", views: "12.4K", author: "Sarah" },
    { title: "City Night", gradient: "linear-gradient(135deg, #0f0c29, #302b63)", views: "8.2K", author: "Mike" },
    { title: "Abstract", gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)", views: "5.7K", author: "Elena" },
    { title: "Nature", gradient: "linear-gradient(135deg, #11998e, #38ef7d)", views: "15.1K", author: "James" },
  ];

  return (
    <>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, padding: "0 2px" }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#111", letterSpacing: "-0.01em", fontFamily: "var(--font-display)" }}>
            Explore
          </div>
          <div style={{ fontSize: 7, color: "#999", marginTop: 1, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Trending videos
          </div>
        </div>
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "linear-gradient(135deg, #6366F1, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 7, fontWeight: 700 }}>V</span>
        </div>
      </div>

      {/* Search */}
      <div style={{
        width: "100%", height: 26, background: "#f5f5f7", borderRadius: 10,
        display: "flex", alignItems: "center", paddingLeft: 8, gap: 5, marginBottom: 8,
        border: "1px solid #eee",
      }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span style={{ fontSize: 8, color: "#bbb" }}>Search videos...</span>
      </div>

      {/* Pills */}
      <div style={{ display: "flex", gap: 4, marginBottom: 8 }}>
        {["Trending", "New", "For You"].map((cat, i) => (
          <div key={cat} style={{
            padding: "3px 8px", borderRadius: 100, fontSize: 7, fontWeight: 600,
            background: i === 0 ? "linear-gradient(135deg, #6366F1, #8B5CF6)" : "#f5f5f7",
            color: i === 0 ? "#fff" : "#888",
            border: i === 0 ? "none" : "1px solid #eee",
          }}>
            {cat}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
        {videos.map((v, i) => (
          <div key={i} style={{
            position: "relative", borderRadius: 10, overflow: "hidden",
            aspectRatio: "3/4", background: v.gradient,
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              opacity: 0.2,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              backgroundSize: "200% 100%",
              animation: `shimmer ${3 + i * 0.4}s ease-in-out infinite`,
            }} />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, padding: 6,
              background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
            }}>
              <div style={{ fontSize: 7, fontWeight: 600, color: "#fff" }}>{v.title}</div>
              <div style={{ fontSize: 6, color: "rgba(255,255,255,0.6)" }}>{v.author} · {v.views}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


/* ─── Generate Screen ─── */

function GenerateScreen() {
  return (
    <>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, padding: "0 2px" }}>
        <div>
          <div style={{ fontSize: 8, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2, fontWeight: 500 }}>
            VIMBLE AI
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#111", letterSpacing: "-0.02em", fontFamily: "var(--font-display)" }}>
            Create Video
          </div>
        </div>
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, #6366F1, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color: "#fff", fontSize: 8, fontWeight: 700 }}>V</span>
        </div>
      </div>

      {/* Source selector */}
      <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
        {[
          { label: "Text", icon: "T", active: true },
          { label: "Image", icon: "📷", active: false },
          { label: "Video", icon: "🎬", active: false },
        ].map((s) => (
          <div key={s.label} style={{
            flex: 1, padding: "8px 0", borderRadius: 10, textAlign: "center",
            background: s.active ? "linear-gradient(135deg, #6366F1, #8B5CF6)" : "#f5f5f7",
            color: s.active ? "#fff" : "#888",
            fontSize: 8, fontWeight: 600,
            border: s.active ? "none" : "1px solid #eee",
            cursor: "pointer",
          }}>
            <div style={{ fontSize: 12, marginBottom: 2 }}>{s.icon}</div>
            {s.label}
          </div>
        ))}
      </div>

      {/* Prompt area */}
      <div style={{
        background: "#f8f8fa", borderRadius: 14, padding: 10, marginBottom: 10,
        border: "1px solid #eee", minHeight: 70,
      }}>
        <div style={{ fontSize: 8, color: "#aaa", marginBottom: 4, fontWeight: 500 }}>Your prompt</div>
        <div style={{ fontSize: 9, color: "#333", lineHeight: 1.5 }}>
          A cinematic drone shot over a misty mountain landscape at golden hour, with clouds flowing between peaks...
        </div>
      </div>

      {/* Model selector */}
      <div style={{ fontSize: 8, color: "#888", marginBottom: 5, fontWeight: 500 }}>AI Model</div>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "#f8f8fa", borderRadius: 10, padding: "8px 10px",
        border: "1px solid #eee", marginBottom: 12,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{
            width: 18, height: 18, borderRadius: 6,
            background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 8, color: "#fff", fontWeight: 700 }}>S</span>
          </div>
          <div>
            <div style={{ fontSize: 9, fontWeight: 600, color: "#111" }}>Sora v2</div>
            <div style={{ fontSize: 7, color: "#aaa" }}>OpenAI • Best quality</div>
          </div>
        </div>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Settings row */}
      <div style={{ display: "flex", gap: 5, marginBottom: 14 }}>
        <div style={{ flex: 1, background: "#f8f8fa", borderRadius: 10, padding: "7px 8px", border: "1px solid #eee" }}>
          <div style={{ fontSize: 7, color: "#aaa", marginBottom: 2 }}>Duration</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#111" }}>10s</div>
        </div>
        <div style={{ flex: 1, background: "#f8f8fa", borderRadius: 10, padding: "7px 8px", border: "1px solid #eee" }}>
          <div style={{ fontSize: 7, color: "#aaa", marginBottom: 2 }}>Quality</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#111" }}>1080p</div>
        </div>
        <div style={{ flex: 1, background: "#f8f8fa", borderRadius: 10, padding: "7px 8px", border: "1px solid #eee" }}>
          <div style={{ fontSize: 7, color: "#aaa", marginBottom: 2 }}>Style</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: "#111" }}>Cinematic</div>
        </div>
      </div>

      {/* Generate button */}
      <div style={{
        width: "100%", padding: "10px 0", borderRadius: 14, textAlign: "center",
        background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
        color: "#fff", fontSize: 10, fontWeight: 700,
        cursor: "pointer",
        boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
      }}>
        ✨ Generate Video
      </div>
    </>
  );
}


/* ─── Result Screen ─── */

function ResultScreen() {
  return (
    <>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8, padding: "0 2px" }}>
        <div>
          <div style={{ fontSize: 8, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2, fontWeight: 500 }}>
            YOUR CREATION
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#111", letterSpacing: "-0.01em", fontFamily: "var(--font-display)" }}>
            Results
          </div>
        </div>
        <div style={{
          padding: "3px 8px", borderRadius: 100, fontSize: 7, fontWeight: 600,
          background: "#e8f5e9", color: "#2e7d32",
        }}>
          ✓ Complete
        </div>
      </div>

      {/* Video Preview */}
      <div style={{
        width: "100%", aspectRatio: "16/10", borderRadius: 12, overflow: "hidden",
        background: "linear-gradient(135deg, #667eea, #764ba2)", marginBottom: 10,
        position: "relative",
      }}>
        {/* Play button overlay */}
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#333">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </div>
        </div>
        {/* Shimmer */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.15,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s ease-in-out infinite",
        }} />
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
        <div style={{ flex: 1, background: "#f8f8fa", borderRadius: 10, padding: "7px 8px", textAlign: "center", border: "1px solid #eee" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#6366F1" }}>98%</div>
          <div style={{ fontSize: 7, color: "#aaa", marginTop: 1 }}>Quality</div>
        </div>
        <div style={{ flex: 1, background: "#f8f8fa", borderRadius: 10, padding: "7px 8px", textAlign: "center", border: "1px solid #eee" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#6366F1" }}>10s</div>
          <div style={{ fontSize: 7, color: "#aaa", marginTop: 1 }}>Duration</div>
        </div>
        <div style={{ flex: 1, background: "#f8f8fa", borderRadius: 10, padding: "7px 8px", textAlign: "center", border: "1px solid #eee" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#6366F1" }}>1080p</div>
          <div style={{ fontSize: 7, color: "#aaa", marginTop: 1 }}>Res</div>
        </div>
      </div>

      {/* Actions */}
      <div style={{
        width: "100%", padding: "9px 0", borderRadius: 12, textAlign: "center",
        background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
        color: "#fff", fontSize: 9, fontWeight: 700,
        marginBottom: 6,
        boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
      }}>
        ↓ Download Video
      </div>
      <div style={{
        width: "100%", padding: "9px 0", borderRadius: 12, textAlign: "center",
        background: "#f5f5f7",
        color: "#555", fontSize: 9, fontWeight: 600,
        border: "1px solid #eee",
      }}>
        Share to Community
      </div>
    </>
  );
}
