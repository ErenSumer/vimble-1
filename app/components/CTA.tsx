"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const inner = sectionRef.current?.querySelector(".cta-inner");
      if (inner) {
        gsap.fromTo(inner, { opacity: 0, y: 50, scale: 0.97 }, {
          opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "expo.out",
          scrollTrigger: { trigger: inner, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="cta-section">
      <div className="cta-inner" style={{ opacity: 0 }}>
        {/* Decorative orbs */}
        <div className="cta-orb cta-orb-1" />
        <div className="cta-orb cta-orb-2" />
        <div className="cta-orb cta-orb-3" />

        {/* Grid dots overlay */}
        <div className="cta-grid" />

        <div className="cta-content">
          <div className="cta-icon-row">
            <div className="cta-icon-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Ready to create?</span>
            </div>
          </div>

          <h2 className="cta-heading">
            Start making videos<br />
            <span className="cta-heading-accent">with AI today</span>
          </h2>

          <p className="cta-desc">
            Join 50,000+ creators already using Vimble AI. No credit card required — start generating for free.
          </p>

          <div className="cta-buttons">
            <a href="#download" className="cta-btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              Go to Download
            </a>
          </div>

          <div className="cta-trust">
            <div className="cta-avatars">
              {["#6366F1", "#8B5CF6", "#06b6d4", "#3b82f6", "#10b981"].map((c, i) => (
                <div key={i} className="cta-avatar" style={{ background: c, zIndex: 5 - i }}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="cta-trust-text">
              <div className="cta-trust-stars">★★★★★</div>
              <span>Loved by 50K+ creators</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          padding: 20px 20px 0;
          background: var(--bg);
          margin-bottom: 40px;
        }

        .cta-inner {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 40px 70px;
          border-radius: 32px;
          background: #0a0a0f;
          overflow: hidden;
        }

        /* Orbs */
        .cta-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .cta-orb-1 {
          width: 400px; height: 400px;
          top: -120px; left: -80px;
          background: rgba(99, 102, 241, 0.3); /* Indigo */
        }
        .cta-orb-2 {
          width: 300px; height: 300px;
          bottom: -100px; right: -60px;
          background: rgba(139, 92, 246, 0.25); /* Purple */
        }
        .cta-orb-3 {
          width: 200px; height: 200px;
          top: 50%; left: 60%;
          transform: translate(-50%, -50%);
          background: rgba(6, 182, 212, 0.2); /* Cyan */
        }

        .cta-grid {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image: radial-gradient(circle, rgba(255,255,255,0.5) 0.8px, transparent 0.8px);
          background-size: 24px 24px;
        }

        .cta-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cta-icon-row {
          margin-bottom: 24px;
        }

        .cta-icon-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px 8px 14px;
          border-radius: 100px;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.2);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
        }

        .cta-heading {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 600;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: #fff;
          margin-bottom: 20px;
        }

        .cta-heading-accent {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-desc {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.5vw, 16px);
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          max-width: 460px;
          margin-bottom: 36px;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #6366F1, #8B5CF6);
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow:
            0 8px 32px rgba(99, 102, 241, 0.4),
            0 1px 3px rgba(0,0,0,0.2);
        }

        .cta-btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow:
            0 12px 40px rgba(139, 92, 246, 0.45),
            0 4px 12px rgba(99, 102, 241, 0.2);
        }

        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-btn-secondary:hover {
          color: #fff;
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
        }

        /* Trust row */
        .cta-trust {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .cta-avatars {
          display: flex;
        }

        .cta-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          font-family: var(--font-display);
          border: 2px solid #0a0a0f;
          margin-left: -8px;
        }

        .cta-avatar:first-child {
          margin-left: 0;
        }

        .cta-trust-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .cta-trust-stars {
          font-size: 12px;
          color: #f59e0b;
          letter-spacing: 1px;
        }

        .cta-trust-text span {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
        }
      `}</style>
    </section>
  );
}
