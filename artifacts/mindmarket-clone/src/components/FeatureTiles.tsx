import { useEffect, useRef, useState } from 'react';

const tiles = [
  {
    title: 'No more chaos.',
    description: 'Managing multiple vendors, juggling time zones, translating insights across cultures — it adds up fast. At Amit, we bring it all under one roof. No misalignment, no friction, just seamless collaboration from start to finish.',
    cta: 'Services',
    href: '/services',
    bg: '#ff705d',
    textColor: '#fff',
    btnBg: 'rgba(255,255,255,0.22)',
    btnHover: 'rgba(255,255,255,0.32)',
  },
  {
    title: 'One brief. One team.',
    description: 'You brief us once and we take it from there. From methodology design and recruitment to local moderation and synthesis, a single dedicated team owns the entire project, end to end.',
    cta: 'Methodology',
    href: '/methodology',
    bg: '#f5e211',
    textColor: '#2c2e2a',
    btnBg: 'rgba(44,46,42,0.12)',
    btnHover: 'rgba(44,46,42,0.20)',
  },
  {
    title: 'Speak their language.',
    description: 'From gaming to fintech, hospitality to consumer goods, each industry speaks its own language. Our in-depth sector knowledge means we ask the right questions and understand the answers in context.',
    cta: 'Industry Sectors',
    href: '/sectors',
    bg: '#2ba0ff',
    textColor: '#fff',
    btnBg: 'rgba(255,255,255,0.22)',
    btnHover: 'rgba(255,255,255,0.32)',
  },
  {
    title: 'Global, for real.',
    description: 'Whether you\'re researching one market or launching in ten, we scale with you. One partner. Global reach. Local depth. Consistent quality across every market, every time.',
    cta: 'Our Network',
    href: '/network',
    bg: '#ebc1ff',
    textColor: '#2c2e2a',
    btnBg: 'rgba(44,46,42,0.10)',
    btnHover: 'rgba(44,46,42,0.18)',
  },
];

function Tile({ tile, index }: { tile: typeof tiles[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: tile.bg,
        borderRadius: 20,
        padding: 'clamp(28px, 3.5vw, 48px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 24,
        minHeight: 320,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3 style={{
          fontSize: 'clamp(24px, 2.5vw, 36px)',
          fontWeight: 500,
          color: tile.textColor,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}>
          {tile.title}
        </h3>
        <p style={{
          fontSize: 'clamp(14px, 1.1vw, 17px)',
          lineHeight: 1.55,
          color: tile.textColor,
          opacity: 0.85,
          maxWidth: 380,
        }}>
          {tile.description}
        </p>
      </div>
      <div>
        <a
          href={tile.href}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 20px',
            backgroundColor: hovered ? tile.btnHover : tile.btnBg,
            color: tile.textColor,
            fontWeight: 500,
            fontSize: 15,
            borderRadius: 8,
            transition: 'background-color 0.18s ease',
            textDecoration: 'none',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="m8 14 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {tile.cta}
        </a>
      </div>
    </div>
  );
}

export default function FeatureTiles() {
  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 120px) var(--container-pad)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 16,
      }}>
        {tiles.map((tile, i) => (
          <Tile key={tile.title} tile={tile} index={i} />
        ))}
      </div>
    </section>
  );
}
