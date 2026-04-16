"use client";

import React, { useRef, useState } from "react";

export default function DownloadVisuals() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: -(y / rect.height) * 15, y: (x / rect.width) * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const transformStyle = `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-2%)`;

  return (
    <div 
      className="visuals-wrapper"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="phone-mockup" style={{ transform: transformStyle }}>
        {/* Outer frame matching Hero */}
        <div className="phone-frame" />

        {/* Screen */}
        <div className="phone-screen">
          {/* Dynamic Island */}
          <div className="dynamic-island-container">
            <div className="dynamic-island">
              <div className="dynamic-island-camera" />
            </div>
          </div>

          {/* Screen Content - App UI feel */}
          <div className="phone-content">
            <div className="app-top-bar">
              <div className="app-logo">Vimble<span style={{ color: "#3b82f6" }}>.ai</span></div>
              <div className="app-avatar">V</div>
            </div>

            <div className="app-hero-video">
              <div className="app-hero-overlay">
                <div className="app-hero-play">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#111">
                    <path d="M8 5.14v14l11-7-11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="app-section-title">Trending Styles</div>
            
            <div className="app-grid">
              <div className="app-grid-item" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }} />
              <div className="app-grid-item" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }} />
              <div className="app-grid-item" style={{ background: "linear-gradient(135deg, #f43f5e, #e11d48)" }} />
              <div className="app-grid-item" style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }} />
            </div>

            <div className="app-fab">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Side buttons matching Hero */}
        <div className="side-btn side-r1" />
        <div className="side-btn side-l1" />
        <div className="side-btn side-l2" />
        <div className="side-btn side-l3" />
      </div>
      


      <style jsx>{`
        .visuals-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }

        .phone-mockup {
          width: 260px;
          height: 540px;
          position: relative;
          z-index: 2;
          transform-style: preserve-3d;
          transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .phone-frame {
          position: absolute;
          inset: 0;
          border-radius: 40px;
          background: linear-gradient(160deg, #f0f0f0 0%, #e0e0e0 40%, #c8c8c8 100%);
          box-shadow: 
            0 30px 80px rgba(0,0,0,0.15),
            0 10px 30px rgba(0,0,0,0.08),
            0 0 1px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(255,255,255,1);
        }

        .phone-screen {
          position: absolute;
          inset: 3px;
          border-radius: 38px;
          background: #fff;
          overflow: hidden;
        }

        .dynamic-island-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          display: flex;
          justify-content: center;
          padding-top: 10px;
        }

        .dynamic-island {
          width: 80px;
          height: 24px;
          border-radius: 100px;
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dynamic-island-camera {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #222;
          border: 1px solid #333;
        }

        .phone-content {
          width: 100%;
          height: 100%;
          padding: 50px 14px 14px;
          background: linear-gradient(180deg, #f7f7fa 0%, #fff 50%);
          font-family: var(--font-body);
        }

        .app-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .app-logo {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 16px;
          color: #111;
          letter-spacing: -0.02em;
        }

        .app-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #111;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-hero-video {
          width: 100%;
          height: 200px;
          border-radius: 16px;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          position: relative;
          overflow: hidden;
          margin-bottom: 20px;
          box-shadow: 0 4px 20px rgba(59,130,246,0.2);
        }

        .app-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-hero-play {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 2px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .app-section-title {
          font-size: 11px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .app-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .app-grid-item {
          aspect-ratio: 1;
          border-radius: 12px;
          opacity: 0.9;
        }

        .app-fab {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(59,130,246,0.4);
        }

        .side-btn {
          position: absolute;
          background: #ccc;
        }

        .side-r1 { right: -1.5px; top: 110px; width: 2.5px; height: 30px; border-radius: 0 2px 2px 0; }
        .side-l1 { left: -1.5px; top: 90px; width: 2.5px; height: 18px; border-radius: 2px 0 0 2px; }
        .side-l2 { left: -1.5px; top: 120px; width: 2.5px; height: 30px; border-radius: 2px 0 0 2px; }
        .side-l3 { left: -1.5px; top: 160px; width: 2.5px; height: 30px; border-radius: 2px 0 0 2px; }

        .qr-badge {
          position: absolute;
          right: -20px;
          bottom: 20px;
          z-index: 10;
          animation: float 6s ease-in-out infinite;
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }

        .visuals-wrapper:hover .qr-badge {
          transform: translateY(-10px) translateZ(30px) scale(1.05);
        }

        .qr-badge-inner {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,1);
          border-radius: 20px;
          padding: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .qr-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .qr-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
        }

        .qr-title {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          color: #333;
          letter-spacing: 0.05em;
        }

        .qr-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          gap: 4px;
          width: 80px;
          height: 80px;
          background: #fff;
          padding: 8px;
          border-radius: 12px;
          border: 1px solid #eee;
        }

        .qr-cell {
          background: transparent;
          border-radius: 2px;
          transition: background 0.3s ease;
        }

        .qr-cell.filled {
          background: #111;
        }
          
        .visuals-wrapper:hover .qr-cell.filled {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @media (max-width: 860px) {
          .phone-mockup {
            width: 220px;
            height: 460px;
          }
          .qr-badge {
            right: 0;
            bottom: -20px;
          }
        }
      `}</style>
    </div>
  );
}

