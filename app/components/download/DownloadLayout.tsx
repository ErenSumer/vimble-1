"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StoreBadges from "./StoreBadges";
import DownloadVisuals from "./DownloadVisuals";

gsap.registerPlugin(ScrollTrigger);

export default function DownloadLayout() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations for content
      gsap.fromTo(
        ".dl-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1, 
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { 
            trigger: ".dl-content", 
            start: "top 80%", 
            toggleActions: "play none none none" 
          }
        }
      );

      // Reveal animation for visuals
      gsap.fromTo(
        ".dl-visual-col",
        { opacity: 0, scale: 0.9, rotateY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".dl-visual-col",
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="download" className="dl-premium-section">
      <div className="dl-ambient-bg">
        <div className="dl-mesh dl-mesh-1" />
        <div className="dl-mesh dl-mesh-2" />
      </div>

      <div className="dl-premium-container">
        <div className="dl-content">
          <div className="dl-badge dl-reveal">AVAILABLE NOW</div>
          <h2 className="dl-title dl-reveal">
            Take Vimble AI<br/>
            <span className="dl-title-gradient">Everywhere.</span>
          </h2>
          <p className="dl-desc dl-reveal">
            Unleash the full power of our industry‑leading video generation models right from your pocket. Seamlessly sync projects between web and mobile, and generate masterpieces on the go.
          </p>
          <div className="dl-reveal">
            <StoreBadges />
          </div>
        </div>

        <div className="dl-visual-col">
          <DownloadVisuals />
        </div>
      </div>

      <style jsx>{`
        .dl-premium-section {
          position: relative;
          padding: 120px 20px;
          background: #fafafa;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }

        .dl-ambient-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .dl-mesh {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.4;
          animation: ambientFlow 15s infinite alternate ease-in-out;
        }

        .dl-mesh-1 {
          width: 800px;
          height: 800px;
          background: rgba(6, 182, 212, 0.15); /* cyan */
          top: -200px;
          left: -200px;
        }

        .dl-mesh-2 {
          width: 600px;
          height: 600px;
          background: rgba(59, 130, 246, 0.15); /* blue */
          bottom: -100px;
          right: -100px;
          animation-delay: -5s;
        }

        @keyframes ambientFlow {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(50px, 50px) scale(1.1); }
        }

        .dl-premium-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          background: #fff;
          border: 1px solid #e5e5ea;
          border-radius: 40px;
          padding: 80px;
          box-shadow: 0 30px 100px rgba(0,0,0,0.03), 0 5px 15px rgba(0,0,0,0.01);
        }

        .dl-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 500px;
        }

        .dl-badge {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #fff;
          background: #111;
          padding: 8px 16px;
          border-radius: 100px;
          margin-bottom: 30px;
        }

        .dl-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #111;
          margin-bottom: 24px;
        }

        .dl-title-gradient {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dl-desc {
          font-family: var(--font-body);
          font-size: 18px;
          color: #555;
          line-height: 1.6;
          opacity: 0.9;
        }

        .dl-visual-col {
          perspective: 1000px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .dl-premium-container {
            grid-template-columns: 1fr;
            padding: 60px 40px;
            gap: 60px;
            text-align: center;
          }
          
          .dl-content {
            align-items: center;
            max-width: 100%;
          }
          
          .dl-visual-col {
            min-height: 500px;
          }
        }

        @media (max-width: 640px) {
          .dl-premium-container {
            padding: 40px 20px;
            border-radius: 30px;
          }
          .dl-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
