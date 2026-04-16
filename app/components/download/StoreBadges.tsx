"use client";

import React from "react";

export default function StoreBadges() {
  return (
    <div className="store-badges">
      <a href="/download" className="badge-btn ios-btn">
        <div className="badge-glow" />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91 1.63.15 3.03.88 3.99 2.26-3.23 1.95-2.73 6.32.74 7.73-.78 1.96-1.76 3.63-2.94 5.38zM15.42 4.29c.7-1.04 1.15-2.33.95-3.64-1.09.04-2.36.7-3.14 1.63-.67.79-1.22 2.11-1 3.39 1.15.11 2.37-.47 3.19-1.38z"/>
        </svg>
        <div className="badge-text">
          <span className="badge-sub">Download on the</span>
          <span className="badge-main">App Store</span>
        </div>
      </a>
      
      <a href="/download" className="badge-btn android-btn">
        <div className="badge-glow" />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="badge-icon">
          <path d="M17.523 15.3414V17.0706C17.523 18.0673 16.7119 18.8785 15.7153 18.8785H8.28476C7.28807 18.8785 6.47693 18.0673 6.47693 17.0706V15.3414H17.523ZM17.4777 8.35649H6.52229C5.46743 8.35649 4.61284 9.21108 4.61284 10.2659V14.6101H19.3872V10.2659C19.3872 9.21108 18.5326 8.35649 17.4777 8.35649ZM15.4299 5.88241L16.8043 3.5015C16.8924 3.34892 16.8404 3.15343 16.6877 3.06527C16.535 2.97723 16.3396 3.02927 16.2514 3.18185L14.8517 5.60627C13.966 5.25361 13.0031 5.06013 12 5.06013C10.9969 5.06013 10.034 5.25361 9.1483 5.60627L7.74857 3.18185C7.66052 3.02927 7.46492 2.97723 7.31234 3.06527C7.15964 3.15343 7.10772 3.34892 7.19576 3.5015L8.57008 5.88241C5.77662 7.17066 3.82918 9.87103 3.62776 13.0805H20.3722C20.1708 9.87103 18.2234 7.17066 15.4299 5.88241ZM9.00693 11.2334C8.61461 11.2334 8.29653 10.9153 8.29653 10.523C8.29653 10.1307 8.61461 9.81261 9.00693 9.81261C9.39925 9.81261 9.71734 10.1307 9.71734 10.523C9.71734 10.9153 9.39925 11.2334 9.00693 11.2334ZM14.9931 11.2334C14.6007 11.2334 14.2827 10.9153 14.2827 10.523C14.2827 10.1307 14.6007 9.81261 14.9931 9.81261C15.3854 9.81261 15.7035 10.1307 15.7035 10.523C15.7035 10.9153 15.3854 11.2334 14.9931 11.2334Z" />
        </svg>
        <div className="badge-text">
          <span className="badge-sub">GET IT ON</span>
          <span className="badge-main">Google Play</span>
        </div>
      </a>

      <style jsx>{`
        .store-badges {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .badge-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 28px;
          border-radius: 100px;
          text-decoration: none;
          color: #fff;
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.1);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .badge-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .ios-btn .badge-glow {
          background: radial-gradient(120px circle at center, rgba(59, 130, 246, 0.4), transparent 70%);
        }

        .android-btn .badge-glow {
          background: radial-gradient(120px circle at center, rgba(16, 185, 129, 0.4), transparent 70%);
        }

        .badge-btn:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .badge-btn:hover .badge-glow {
          opacity: 1;
        }

        .ios-btn:hover {
          background: linear-gradient(135deg, #111, #1e293b);
        }

        .android-btn:hover {
          background: linear-gradient(135deg, #111, #064e3b);
        }

        .badge-icon {
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .badge-btn:hover .badge-icon {
          transform: scale(1.1);
        }

        .badge-text {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .badge-sub {
          font-family: var(--font-body);
          font-size: 11px;
          line-height: 1;
          opacity: 0.7;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .badge-main {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        @media (max-width: 640px) {
          .badge-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
