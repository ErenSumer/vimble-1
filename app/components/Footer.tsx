"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Reviews", href: "#reviews" },
        { label: "Download", href: "/download" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socials = [
    {
      label: "X",
      href: "https://x.com/vimbleapp",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/vimbleapp",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@vimbleapp",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.34 6.34 0 0 1-1.78-1.55v7.26c.01 1.48-.36 3-1.29 4.16-.94 1.17-2.4 1.94-3.87 2.1-1.48.16-3.04-.15-4.28-.97-1.23-.82-2.14-2.14-2.43-3.58-.28-1.48-.02-3.05.73-4.36.75-1.31 2.02-2.3 3.5-2.67.55-.14 1.12-.2 1.69-.18v4.06c-.47-.07-.97-.03-1.4.15-.42.19-.77.53-.96.94-.2.4-.23.86-.14 1.29s.34.82.68 1.1c.33.27.76.42 1.19.45.42.02.85-.09 1.21-.3s.63-.53.79-.92c.16-.39.2-.82.16-1.25V.02z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@vimbleapp",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="ft-root">
      <div className="ft-inner">
        {/* Top section */}
        <div className="ft-top">
          {/* Brand column */}
          <div className="ft-brand">
            <a href="/" className="ft-logo">
              <img src="/logo_trans.png" alt="Vimble AI Logo" className="ft-logo-img" />
              <span className="ft-logo-text">
                vimble<span className="ft-logo-accent">.ai</span>
              </span>
            </a>
            <p className="ft-brand-desc">
              Create stunning videos with AI. Transform text, images, and ideas into captivating content.
            </p>
            <div className="ft-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="ft-social" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="ft-links-grid">
            {footerLinks.map((col) => (
              <div key={col.title} className="ft-link-col">
                <h4 className="ft-link-title">{col.title}</h4>
                <ul className="ft-link-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="ft-link">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="ft-divider" />

        {/* Bottom */}
        <div className="ft-bottom">
          <p className="ft-copy">&copy; {currentYear} Vimble AI. All rights reserved.</p>
          <div className="ft-bottom-links">
            <a href="/privacy" className="ft-bottom-link">Privacy</a>
            <a href="/terms" className="ft-bottom-link">Terms</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ft-root {
          background: #0a0a0f;
          padding: 0 20px;
          margin-top: 0;
        }

        .ft-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 70px 20px 36px;
        }

        /* ── Top ── */
        .ft-top {
          display: flex;
          gap: 60px;
          margin-bottom: 50px;
        }

        @media (max-width: 768px) {
          .ft-top {
            flex-direction: column;
            gap: 40px;
          }
        }

        /* Brand */
        .ft-brand {
          flex: 0 0 260px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ft-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .ft-logo-img {
          width: 28px;
          height: auto;
          border-radius: 6px;
        }

        .ft-logo-text {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 18px;
          letter-spacing: -0.02em;
          color: #fff;
        }

        .ft-logo-accent {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ft-brand-desc {
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.35);
          line-height: 1.65;
        }

        .ft-socials {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }

        .ft-social {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .ft-social:hover {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.25);
          color: #8B5CF6;
          transform: translateY(-2px);
        }

        /* Links grid */
        .ft-links-grid {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          gap: 80px;
        }

        @media (max-width: 640px) {
          .ft-links-grid {
            justify-content: flex-start;
            gap: 40px;
          }
        }

        .ft-link-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ft-link-title {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          letter-spacing: -0.01em;
        }

        .ft-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ft-link {
          font-family: var(--font-body);
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ft-link:hover {
          color: rgba(255,255,255,0.7);
        }

        /* Divider */
        .ft-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: 24px;
        }

        /* Bottom */
        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ft-copy {
          font-family: var(--font-body);
          font-size: 12px;
          color: rgba(255,255,255,0.2);
        }

        .ft-bottom-links {
          display: flex;
          gap: 20px;
        }

        .ft-bottom-link {
          font-family: var(--font-body);
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ft-bottom-link:hover {
          color: rgba(255,255,255,0.5);
        }
      `}</style>
    </footer>
  );
}
