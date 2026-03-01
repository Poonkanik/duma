import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";

const templates = [
  "neon-noir",
  "aurora",
  "obsidian",
  "retro-wave",
  "crystal",
  "inferno",
  "botanical",
  "chrome",
];

const templateStyles = {
  "neon-noir": {
    wrapper: {
      background: "#080810",
      boxShadow: "0 0 60px rgba(0,255,200,0.15), inset 0 0 80px rgba(0,0,0,0.8)",
      border: "1px solid rgba(0,255,200,0.3)",
    },
    text: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
      fontWeight: 900,
      letterSpacing: "0.15em",
      color: "#fff",
      textShadow: "0 0 20px #00ffc8, 0 0 40px #00ffc8aa, 0 0 80px #00ffc855",
      textTransform: "uppercase",
    },
    subtext: {
      fontFamily: "'Rajdhani', sans-serif",
      fontSize: "0.85rem",
      letterSpacing: "0.5em",
      color: "#00ffc8",
      textTransform: "uppercase",
      opacity: 0.8,
    },
    overlay: "neon-grid",
    accentColor: "#00ffc8",
  },
  aurora: {
    wrapper: {
      background: "linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 40%, #0a1a3e 100%)",
      boxShadow: "0 30px 80px rgba(100,0,255,0.3)",
      border: "1px solid rgba(180,100,255,0.2)",
      overflow: "hidden",
    },
    text: {
      fontFamily: "'Cinzel Decorative', serif",
      fontSize: "clamp(1.2rem, 4.5vw, 2rem)",
      fontWeight: 700,
      color: "transparent",
      background: "linear-gradient(135deg, #e0c3fc, #8ec5fc, #e0c3fc)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.08em",
    },
    subtext: {
      fontFamily: "'Cinzel', serif",
      fontSize: "0.7rem",
      letterSpacing: "0.6em",
      color: "#8ec5fc",
      textTransform: "uppercase",
      opacity: 0.9,
    },
    overlay: "aurora-blobs",
    accentColor: "#8ec5fc",
  },
  obsidian: {
    wrapper: {
      background: "linear-gradient(160deg, #1a1a1a 0%, #0d0d0d 100%)",
      boxShadow: "0 0 0 1px #333, 0 40px 80px rgba(0,0,0,0.8)",
      border: "none",
    },
    text: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "clamp(1.4rem, 5vw, 2.3rem)",
      fontWeight: 900,
      color: "transparent",
      background: "linear-gradient(135deg, #c9a96e, #f0d080, #c9a96e, #a07840)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.05em",
      fontStyle: "italic",
    },
    subtext: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "0.8rem",
      letterSpacing: "0.5em",
      color: "#c9a96e",
      textTransform: "uppercase",
      opacity: 0.7,
    },
    overlay: "obsidian-lines",
    accentColor: "#c9a96e",
  },
  "retro-wave": {
    wrapper: {
      background: "linear-gradient(180deg, #0d0221 0%, #190a3a 50%, #3d0a5e 100%)",
      boxShadow: "0 0 40px rgba(255,0,200,0.3), 0 0 80px rgba(80,0,255,0.2)",
      border: "2px solid rgba(255,0,200,0.4)",
    },
    text: {
      fontFamily: "'Audiowide', cursive",
      fontSize: "clamp(1.2rem, 4.5vw, 2rem)",
      fontWeight: 400,
      color: "transparent",
      background: "linear-gradient(90deg, #ff006e, #ff6ef7, #8338ec)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
    subtext: {
      fontFamily: "'Audiowide', cursive",
      fontSize: "0.7rem",
      letterSpacing: "0.4em",
      color: "#ff6ef7",
      textTransform: "uppercase",
      opacity: 0.85,
    },
    overlay: "retro-sun",
    accentColor: "#ff006e",
  },
  crystal: {
    wrapper: {
      background: "linear-gradient(135deg, #e8f4fd 0%, #d6eaf8 50%, #ebf5fb 100%)",
      boxShadow: "0 20px 60px rgba(52,152,219,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
      border: "1px solid rgba(255,255,255,0.8)",
    },
    text: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
      fontWeight: 700,
      color: "transparent",
      background: "linear-gradient(135deg, #1a5276, #2e86c1, #1a5276)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
    },
    subtext: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: "0.7rem",
      letterSpacing: "0.5em",
      color: "#2e86c1",
      textTransform: "uppercase",
      opacity: 0.7,
      fontWeight: 300,
    },
    overlay: "crystal-shards",
    accentColor: "#2e86c1",
  },
  inferno: {
    wrapper: {
      background: "linear-gradient(160deg, #1a0500 0%, #2d0900 60%, #1a0200 100%)",
      boxShadow: "0 0 60px rgba(255,80,0,0.25), 0 20px 80px rgba(0,0,0,0.8)",
      border: "1px solid rgba(255,100,0,0.3)",
    },
    text: {
      fontFamily: "'Bebas Neue', cursive",
      fontSize: "clamp(2rem, 6vw, 3rem)",
      fontWeight: 400,
      color: "transparent",
      background: "linear-gradient(180deg, #fff5e6 0%, #ffb347 30%, #ff4500 70%, #8b1a00 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.1em",
    },
    subtext: {
      fontFamily: "'Rajdhani', sans-serif",
      fontSize: "0.85rem",
      letterSpacing: "0.45em",
      color: "#ff6b35",
      textTransform: "uppercase",
      opacity: 0.8,
    },
    overlay: "ember-particles",
    accentColor: "#ff4500",
  },
  botanical: {
    wrapper: {
      background: "linear-gradient(135deg, #1a2f1a 0%, #0d1f0d 60%, #1a2f1a 100%)",
      boxShadow: "0 20px 60px rgba(0,100,40,0.3)",
      border: "1px solid rgba(80,200,100,0.2)",
    },
    text: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(1.5rem, 5vw, 2.3rem)",
      fontWeight: 700,
      color: "transparent",
      background: "linear-gradient(135deg, #a8e6a3, #52d68a, #a8e6a3)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.05em",
      fontStyle: "italic",
    },
    subtext: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "0.8rem",
      letterSpacing: "0.5em",
      color: "#52d68a",
      textTransform: "uppercase",
      opacity: 0.75,
    },
    overlay: "botanical-leaves",
    accentColor: "#52d68a",
  },
  chrome: {
    wrapper: {
      background: "linear-gradient(135deg, #1c1c1c 0%, #2d2d2d 50%, #1c1c1c 100%)",
      boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 30px 70px rgba(0,0,0,0.7)",
      border: "none",
    },
    text: {
      fontFamily: "'Black Han Sans', sans-serif",
      fontSize: "clamp(1.6rem, 5.5vw, 2.5rem)",
      fontWeight: 400,
      color: "transparent",
      background: "linear-gradient(180deg, #fff 0%, #bbb 25%, #fff 50%, #888 75%, #ddd 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    subtext: {
      fontFamily: "'Rajdhani', sans-serif",
      fontSize: "0.75rem",
      letterSpacing: "0.55em",
      color: "#aaa",
      textTransform: "uppercase",
      opacity: 0.7,
    },
    overlay: "chrome-grid",
    accentColor: "#cccccc",
  },
};

function TemplateOverlay({ type, accent }) {
  if (type === "neon-grid") return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}>
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke={accent} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );

  if (type === "aurora-blobs") return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(142,197,252,0.15) 0%, transparent 70%)", top: "-30px", left: "-30px", animation: "blobFloat 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: "150px", height: "150px", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,100,255,0.15) 0%, transparent 70%)", bottom: "-20px", right: "-20px", animation: "blobFloat 10s ease-in-out infinite reverse" }} />
      <div style={{ position: "absolute", width: "100px", height: "100px", borderRadius: "50%", background: "radial-gradient(circle, rgba(100,255,200,0.1) 0%, transparent 70%)", top: "50%", left: "60%", animation: "blobFloat 6s ease-in-out infinite 2s" }} />
    </div>
  );

  if (type === "obsidian-lines") return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}>
      {[...Array(8)].map((_, i) => (
        <line key={i} x1={i * 45} y1="0" x2={i * 45 + 100} y2="320" stroke="#c9a96e" strokeWidth="0.5" />
      ))}
    </svg>
  );

  if (type === "retro-sun") return (
    <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "280px", height: "140px", overflow: "hidden", pointerEvents: "none" }}>
      <div style={{ position: "absolute", bottom: "-40px", left: "50%", transform: "translateX(-50%)", width: "220px", height: "220px", borderRadius: "50%", background: "linear-gradient(180deg, #ff6ef7 0%, #ff006e 40%, transparent 70%)", opacity: 0.2 }} />
      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((deg, i) => (
        <div key={i} style={{ position: "absolute", bottom: "-40px", left: "50%", width: "2px", height: "180px", background: `linear-gradient(180deg, ${i % 2 === 0 ? "#ff006e" : "#8338ec"} 0%, transparent 100%)`, transformOrigin: "bottom center", transform: `translateX(-50%) rotate(${deg - 90}deg)`, opacity: 0.08 }} />
      ))}
    </div>
  );

  if (type === "crystal-shards") return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }}>
      <polygon points="0,0 60,0 0,80" fill="#2e86c1" opacity="0.4" />
      <polygon points="320,0 320,100 240,0" fill="#2e86c1" opacity="0.3" />
      <polygon points="0,320 80,320 0,240" fill="#2e86c1" opacity="0.35" />
      <polygon points="320,320 220,320 320,210" fill="#2e86c1" opacity="0.25" />
    </svg>
  );

  if (type === "ember-particles") return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{
          position: "absolute", width: `${2 + i}px`, height: `${2 + i}px`, borderRadius: "50%",
          background: i % 2 === 0 ? "#ff4500" : "#ffb347",
          left: `${10 + i * 15}%`, bottom: "10%",
          animation: `emberRise ${3 + i}s ease-in-out infinite ${i * 0.5}s`,
          boxShadow: `0 0 6px ${i % 2 === 0 ? "#ff4500" : "#ffb347"}`,
          opacity: 0.6,
        }} />
      ))}
    </div>
  );

  if (type === "botanical-leaves") return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }}>
      <ellipse cx="30" cy="60" rx="25" ry="50" fill="#52d68a" transform="rotate(-30 30 60)" opacity="0.5" />
      <ellipse cx="290" cy="260" rx="25" ry="50" fill="#52d68a" transform="rotate(150 290 260)" opacity="0.5" />
      <ellipse cx="300" cy="50" rx="20" ry="40" fill="#a8e6a3" transform="rotate(40 300 50)" opacity="0.4" />
      <ellipse cx="20" cy="280" rx="20" ry="40" fill="#a8e6a3" transform="rotate(-140 20 280)" opacity="0.4" />
    </svg>
  );

  if (type === "chrome-grid") return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none" }}>
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#fff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );

  return null;
}

const templateLabels = {
  "neon-noir": "Neon Noir",
  aurora: "Aurora",
  obsidian: "Obsidian Gold",
  "retro-wave": "Retro Wave",
  crystal: "Crystal",
  inferno: "Inferno",
  botanical: "Botanical",
  chrome: "Chrome",
};

export default function LogoDesign({ text = "LUMINARY", subtext = "Design Studio" }) {
  const logoRef = useRef();
  const [selected, setSelected] = useState("neon-noir");
  const [animating, setAnimating] = useState(false);

  const pick = (t) => {
    if (t === selected) return;
    setAnimating(true);
    setTimeout(() => { setSelected(t); setAnimating(false); }, 300);
  };

  const downloadLogo = async () => {
    const canvas = await html2canvas(logoRef.current, { backgroundColor: null, scale: 2 });
    const link = document.createElement("a");
    link.download = `${text.toLowerCase()}-logo.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const style = templateStyles[selected];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Cinzel+Decorative:wght@400;700&family=Cinzel:wght@400;700&family=Playfair+Display:ital,wght@1,900&family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Audiowide&family=Josefin+Sans:wght@300;400;700&family=Bebas+Neue&family=Black+Han+Sans&family=Rajdhani:wght@400;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ld-root {
          min-height: 100vh;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: 'Rajdhani', sans-serif;
          gap: 32px;
        }

        .ld-title {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.6em;
          color: #555;
          text-transform: uppercase;
        }

        .ld-logo-frame {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 14px;
          transition: box-shadow 0.5s ease;
          overflow: hidden;
        }

        .ld-logo-frame.animating {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .ld-text {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          line-height: 1.1;
          transition: all 0.4s ease;
        }

        .ld-subtext {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          transition: all 0.4s ease;
        }

        .ld-divider {
          position: relative;
          z-index: 2;
          width: 40px;
          height: 1px;
          transition: all 0.4s ease;
        }

        .ld-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          max-width: 420px;
        }

        .ld-tab {
          padding: 6px 14px;
          border-radius: 6px;
          border: 1px solid #2a2a2a;
          background: #111;
          color: #666;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .ld-tab:hover {
          border-color: #444;
          color: #aaa;
        }

        .ld-tab.active {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(255,255,255,0.04);
          box-shadow: 0 0 12px rgba(0,0,0,0.5);
        }

        .ld-download {
          padding: 12px 40px;
          border-radius: 8px;
          background: transparent;
          border: 1px solid #333;
          color: #888;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ld-download:hover {
          border-color: var(--accent);
          color: var(--accent);
          box-shadow: 0 0 20px rgba(255,255,255,0.05);
        }

        @keyframes blobFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }

        @keyframes emberRise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-80px) scale(0.7) translateX(10px); opacity: 0.4; }
          100% { transform: translateY(-150px) scale(0.2) translateX(-5px); opacity: 0; }
        }

        @keyframes logoIn {
          from { opacity: 0; transform: scale(0.88) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .logo-animate {
          animation: logoIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="ld-root" style={{ "--accent": style.accentColor }}>
        <p className="ld-title">Logo Designer</p>

        <div
          className={`ld-logo-frame logo-animate ${animating ? "animating" : ""}`}
          ref={logoRef}
          style={style.wrapper}
          key={selected}
        >
          <TemplateOverlay type={style.overlay} accent={style.accentColor} />

          <h1 className="ld-text" style={style.text}>{text}</h1>

          <div className="ld-divider" style={{ background: style.accentColor, opacity: 0.5 }} />

          <p className="ld-subtext" style={style.subtext}>{subtext}</p>
        </div>

        <div className="ld-tabs">
          {templates.map((t) => (
            <button
              key={t}
              className={`ld-tab ${selected === t ? "active" : ""}`}
              onClick={() => pick(t)}
              style={selected === t ? { "--accent": templateStyles[t].accentColor } : {}}
            >
              {templateLabels[t]}
            </button>
          ))}
        </div>

        <button className="ld-download" onClick={downloadLogo}>
          Download Logo
        </button>
      </div>
    </>
  );
}
