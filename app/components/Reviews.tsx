"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════
   REVIEW DATA
   ═══════════════════════════════════════════════════════ */

const reviewsRow1 = [
  {
    name: "Sarah Chen",
    role: "Content Creator",
    avatar: "SC",
    color: "#6366F1",
    stars: 5,
    text: "Vimble AI completely changed my workflow. I used to spend hours editing video — now I describe what I want and get stunning results in minutes. The Sora v2 integration is mindblowing.",
  },
  {
    name: "Marcus Rivera",
    role: "Marketing Director",
    avatar: "MR",
    color: "#f43f5e",
    stars: 5,
    text: "We produce 30+ social videos per week. Vimble cut our production time by 80%. The multi-model approach means we always get the perfect output for each platform.",
  },
  {
    name: "Yuki Tanaka",
    role: "Indie Filmmaker",
    avatar: "YT",
    color: "#10a37f",
    stars: 5,
    text: "The image-to-video feature is pure magic. I upload a single concept frame and get a cinematic sequence that looks like it took a full production crew. Absolutely unreal.",
  },
  {
    name: "Priya Sharma",
    role: "UX Designer",
    avatar: "PS",
    color: "#3b82f6",
    stars: 5,
    text: "I use Vimble for motion prototypes. What used to take After Effects and hours of keyframing now takes a text prompt and 30 seconds. My team thinks I'm a wizard.",
  },
  {
    name: "David Okafor",
    role: "YouTube Creator",
    avatar: "DO",
    color: "#f59e0b",
    stars: 4,
    text: "The community feed is incredibly inspiring. I've discovered so many new styles and techniques just by exploring what others create. Plus remixing prompts is addictive.",
  },
  {
    name: "Elena Volkov",
    role: "Art Director",
    avatar: "EV",
    color: "#06b6d4",
    stars: 5,
    text: "Every model has its strengths — Runway for realism, Kling for motion, Pika for style. Having them all in one place with easy comparison? That's the killer feature.",
  },
];

const reviewsRow2 = [
  {
    name: "James Foster",
    role: "Startup Founder",
    avatar: "JF",
    color: "#4F46E5",
    stars: 5,
    text: "We replaced our entire video production budget with a Vimble subscription. The ROI is insane. Our product demos look more polished than ever and we ship them same-day.",
  },
  {
    name: "Aisha Rahman",
    role: "Social Media Manager",
    avatar: "AR",
    color: "#14b8a6",
    stars: 5,
    text: "The real-time generation preview is a game changer. I can see frames rendering and know within seconds if the output will match my vision. No more wasted generation credits.",
  },
  {
    name: "Tom Bergström",
    role: "Motion Designer",
    avatar: "TB",
    color: "#ef4444",
    stars: 4,
    text: "Thought AI video was gimmicky until I tried Vimble. The quality from Sora is genuinely indistinguishable from stock footage. I use it for B-roll in every project now.",
  },
  {
    name: "Mia Zhang",
    role: "E-commerce Owner",
    avatar: "MZ",
    color: "#0ea5e9",
    stars: 5,
    text: "Product videos used to cost us $500+ each from freelancers. Now I generate them from product photos in seconds. The video-to-video upscaling is the cherry on top.",
  },
  {
    name: "Leo Martínez",
    role: "Music Producer",
    avatar: "LM",
    color: "#d946ef",
    stars: 5,
    text: "I create music visualizers and lyric videos with Vimble. The text-to-video models understand artistic direction incredibly well. My fans think I hired an entire VFX studio.",
  },
  {
    name: "Nina Kowalski",
    role: "Educator",
    avatar: "NK",
    color: "#22c55e",
    stars: 5,
    text: "I make educational content for kids and Vimble AI brings my lessons to life. Describing a scene from history and watching it materialize is the most magical thing ever.",
  },
];

/* ═══════════════════════════════════════════════════════
   REVIEWS SECTION
   ═══════════════════════════════════════════════════════ */

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = sectionRef.current?.querySelector(".rev-header");
      if (header) {
        gsap.fromTo(header, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: header, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      const tracks = sectionRef.current?.querySelectorAll(".rev-track-wrap");
      tracks?.forEach((track, i) => {
        gsap.fromTo(track, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: i * 0.15,
          scrollTrigger: { trigger: track, start: "top 90%", toggleActions: "play none none none" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="reviews" className="rev-section">
      {/* Header */}
      <div className="rev-header" style={{ opacity: 0 }}>
        <span className="rev-badge">TESTIMONIALS</span>
        <h2 className="rev-title">
          Loved by <span className="rev-title-accent">creators worldwide</span>
        </h2>
        <p className="rev-subtitle">
          Join thousands of creators, filmmakers, and marketers who trust Vimble AI for their video production.
        </p>
      </div>

      {/* Carousel Row 1 — scrolls LEFT */}
      <div className="rev-track-wrap" style={{ opacity: 0 }}>
        <div className="rev-track rev-track-left">
          {[...reviewsRow1, ...reviewsRow1].map((review, i) => (
            <ReviewCard key={`r1-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Carousel Row 2 — scrolls RIGHT */}
      <div className="rev-track-wrap" style={{ opacity: 0 }}>
        <div className="rev-track rev-track-right">
          {[...reviewsRow2, ...reviewsRow2].map((review, i) => (
            <ReviewCard key={`r2-${i}`} review={review} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .rev-section {
          position: relative;
          padding: 100px 0 120px;
          background: #fafafa;
          overflow: hidden;
        }

        .rev-header {
          text-align: center;
          max-width: 660px;
          margin: 0 auto 60px;
          padding: 0 20px;
        }

        .rev-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--purple);
          background: rgba(99, 102, 241, 0.07);
          border: 1px solid rgba(99, 102, 241, 0.12);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 20px;
        }

        .rev-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: #0a0a0a;
          margin-bottom: 16px;
        }

        .rev-title-accent {
          background: linear-gradient(135deg, var(--purple), var(--purple-vivid));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .rev-subtitle {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.6vw, 17px);
          color: #888;
          line-height: 1.7;
        }

        /* ── Track Container ── */
        .rev-track-wrap {
          width: 100%;
          overflow: hidden;
          padding: 8px 0;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        .rev-track-wrap + .rev-track-wrap {
          margin-top: 16px;
        }

        /* ── Infinite scroll track ── */
        .rev-track {
          display: flex;
          gap: 16px;
          width: max-content;
        }

        .rev-track-left {
          animation: scrollLeft 60s linear infinite;
        }

        .rev-track-right {
          animation: scrollRight 55s linear infinite;
        }

        .rev-track-wrap:hover .rev-track {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── Review Card ── */
        .rev-card {
          flex-shrink: 0;
          width: 380px;
          padding: 28px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 20px;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: default;
          user-select: none;
        }

        .rev-card:hover {
          border-color: rgba(99, 102, 241, 0.15);
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.04),
            0 0 0 1px rgba(99, 102, 241, 0.08);
          transform: translateY(-3px);
        }

        .rev-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .rev-avatar {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          font-family: var(--font-display);
          flex-shrink: 0;
        }

        .rev-info {
          flex: 1;
          min-width: 0;
        }

        .rev-name {
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 600;
          color: #111;
          letter-spacing: -0.01em;
        }

        .rev-role {
          font-family: var(--font-body);
          font-size: 12px;
          color: #aaa;
          margin-top: 1px;
        }

        .rev-stars {
          display: flex;
          gap: 2px;
          flex-shrink: 0;
        }

        .rev-star {
          color: #f59e0b;
          font-size: 13px;
        }

        .rev-star-dim {
          color: #e5e5e5;
        }

        .rev-text {
          font-family: var(--font-body);
          font-size: 14px;
          color: #555;
          line-height: 1.7;
          letter-spacing: 0.005em;
        }
      `}</style>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════
   REVIEW CARD COMPONENT
   ═══════════════════════════════════════════════════════ */

interface Review {
  name: string;
  role: string;
  avatar: string;
  color: string;
  stars: number;
  text: string;
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rev-card">
      <div className="rev-card-header">
        <div className="rev-avatar" style={{ background: review.color }}>
          {review.avatar}
        </div>
        <div className="rev-info">
          <div className="rev-name">{review.name}</div>
          <div className="rev-role">{review.role}</div>
        </div>
        <div className="rev-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`rev-star ${i < review.stars ? "" : "rev-star-dim"}`}>
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="rev-text">&ldquo;{review.text}&rdquo;</p>
    </div>
  );
}
