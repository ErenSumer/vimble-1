"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "AI Models", href: "#models" },
        { label: "API", href: "#api" },
        { label: "Changelog", href: "#changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "Tutorials", href: "#tutorials" },
        { label: "Blog", href: "#blog" },
        { label: "Community", href: "#community" },
        { label: "Status", href: "#status" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Press Kit", href: "#press" },
        { label: "Contact", href: "#contact" },
        { label: "Partners", href: "#partners" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "#cookies" },
        { label: "Licenses", href: "#licenses" },
      ],
    },
  ];

  const socials = [
    {
      label: "Twitter / X",
      href: "#twitter",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      href: "#github",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: "Discord",
      href: "#discord",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#youtube",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
            <a href="#cookies" className="ft-bottom-link">Cookies</a>
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
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 640px) {
          .ft-links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
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
