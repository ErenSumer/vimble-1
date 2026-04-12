"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "FEATURES", href: "#features" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "DOWNLOAD", href: "#download" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate nav in on mount
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    gsap.fromTo(
      nav,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "expo.out", delay: 0.1 }
    );
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="navbar-root"
        style={{ opacity: 0 }}
      >
        <div className={`navbar-inner ${scrolled ? "navbar-scrolled" : ""}`}>
          {/* Logo */}
          <a href="/" className="navbar-logo" aria-label="Vimble AI Home">
            <img src="/logo_trans.png" alt="Vimble AI Logo" className="navbar-logo-img" />
            <span className="navbar-logo-text">
              vimble<span className="navbar-logo-accent">.ai</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="navbar-link">
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta-wrapper">
            <a href="/download" className="navbar-cta">
              GET STARTED
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`navbar-hamburger-line ${mobileOpen ? "navbar-hamburger-line-top-open" : ""}`}
            />
            <span
              className={`navbar-hamburger-line ${mobileOpen ? "navbar-hamburger-line-bottom-open" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-overlay ${mobileOpen ? "navbar-mobile-open" : ""}`}>
        <div className="navbar-mobile-content">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="navbar-mobile-link"
              style={{
                transitionDelay: mobileOpen ? `${80 + i * 50}ms` : "0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/download"
            onClick={() => setMobileOpen(false)}
            className="navbar-mobile-cta"
            style={{
              transitionDelay: mobileOpen ? `${80 + navLinks.length * 50}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            GET STARTED
          </a>
        </div>
      </div>

      <style jsx global>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: center;
          padding: 16px 20px;
          pointer-events: none;
        }

        .navbar-inner {
          pointer-events: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1100px;
          padding: 14px 28px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.0);
          border: 1px solid transparent;
          backdrop-filter: blur(0px);
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .navbar-scrolled {
          max-width: 760px;
          padding: 12px 28px;
          border-radius: 60px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.08),
            0 1px 2px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        /* Logo */
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar-logo-img {
          width: 28px;
          height: auto;
          border-radius: 6px;
        }

        .navbar-logo:hover .navbar-logo-img {
          opacity: 0.9;
        }

        .navbar-logo-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.02em;
          color: #111;
        }
        .navbar-logo-accent {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Links */
        .navbar-links {
          display: none;
          align-items: center;
          gap: 4px;
        }
        @media (min-width: 768px) {
          .navbar-links {
            display: flex;
          }
        }

        .navbar-link {
          padding: 6px 14px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #666;
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.25s ease;
        }
        .navbar-link:hover {
          color: #111;
          background: rgba(0, 0, 0, 0.04);
        }

        /* CTA */
        .navbar-cta-wrapper {
          display: none;
        }
        @media (min-width: 768px) {
          .navbar-cta-wrapper {
            display: flex;
            align-items: center;
          }
        }

        .navbar-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 22px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #fff;
          background: #111;
          border: 1px solid #111;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .navbar-cta:hover {
          background: #333;
          border-color: #333;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        /* Hamburger */
        .navbar-hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          position: relative;
          z-index: 1001;
        }
        @media (min-width: 768px) {
          .navbar-hamburger {
            display: none;
          }
        }

        .navbar-hamburger-line {
          display: block;
          width: 20px;
          height: 1.5px;
          background: #111;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: center;
        }
        .navbar-hamburger-line-top-open {
          transform: rotate(45deg) translate(2.3px, 2.3px);
        }
        .navbar-hamburger-line-bottom-open {
          transform: rotate(-45deg) translate(2.3px, -2.3px);
        }

        /* Mobile Overlay */
        .navbar-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(40px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .navbar-mobile-open {
          opacity: 1;
          pointer-events: auto;
        }

        .navbar-mobile-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .navbar-mobile-link {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #444;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .navbar-mobile-link:hover {
          color: #111;
        }

        .navbar-mobile-cta {
          margin-top: 16px;
          padding: 12px 36px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #fff;
          background: #111;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .navbar-mobile-cta:hover {
          background: #333;
        }
      `}</style>
    </>
  );
}
