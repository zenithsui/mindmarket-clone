const ArrowRight = () => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 14 4-4-4-4" />
  </svg>
)

const tiles = [
  {
    color: 'var(--color-red)',
    textColor: 'var(--color-charcoal)',
    title: 'No more chaos.',
    desc: 'Managing multiple vendors, juggling time zones, translating insights across cultures — it adds up fast. At MindMarket, we bring it all under one roof. No misalignment, no friction, just seamless collaboration from start to finish.',
    cta: 'Services',
    href: '/services',
  },
  {
    color: 'var(--color-yellow)',
    textColor: 'var(--color-charcoal)',
    title: 'One brief. One team.',
    desc: 'You brief us once and we take it from there. From methodology design and recruitment to local moderation and reporting, everything is managed by a single point of contact who leads your study from start to finish. You get clear updates, fast turnarounds, and high-quality insights—without compromise.',
    cta: 'Methodology',
    href: '/methodology',
  },
  {
    color: 'var(--color-blue)',
    textColor: '#fff',
    title: 'Speak their language.',
    desc: "From gaming to fintech, hospitality to consumer goods, each industry speaks its own language. Our in-market experts don't just understand people, they understand the context. We bring cultural insight shaped by the sector you're in, so your message hits home in every market.",
    cta: 'Industry Sectors',
    href: '/sectors',
  },
  {
    color: 'var(--color-pink)',
    textColor: 'var(--color-charcoal)',
    title: 'Global, for real.',
    desc: "Whether you're researching one market or launching in ten, we scale with you. One partner. Global reach. Consistent quality. Our global network spans regions and industries, giving you on-demand access to the right participants in the right places, without starting from scratch.",
    cta: 'Our Network',
    href: '/network',
  },
]

// Static character illustrations (approximation of the Rive animation)
const KaisCharacter = () => (
  <div className="timeline_character timeline_character--kais" aria-hidden="true">
    <img
      src="/images/1762710839-sina_sinah_mindmarket.jpg"
      alt=""
      className="timeline_char-img"
      loading="eager"
    />
  </div>
)

const NydiaCharacter = () => (
  <div className="timeline_character timeline_character--nydia" aria-hidden="true">
    <img
      src="/images/1758762238-nydia-photo-website.avif"
      alt=""
      className="timeline_char-img"
      loading="eager"
    />
  </div>
)

export default function Timeline() {
  return (
    <section className="timeline">
      {/* Illustration + intro */}
      <div className="timeline_intro">
        {/* Background illustration */}
        <div className="timeline_illustration" aria-hidden="true">
          <img
            src="/images/hero-background-illustration.svg"
            alt=""
            className="timeline_illustration-bg"
            width="971"
            height="540"
            fetchPriority="high"
          />
          {/* Character photos layered over illustration */}
          <div className="timeline_chars">
            <div className="timeline_char-kais">
              <img
                src="/images/1758761960-kais-website-photo.avif"
                alt=""
                loading="eager"
                width="200"
              />
            </div>
            <div className="timeline_char-nydia">
              <img
                src="/images/1758762238-nydia-photo-website.avif"
                alt=""
                loading="eager"
                width="200"
              />
            </div>
          </div>
        </div>

        {/* Intro text */}
        <div className="timeline_desc">
          <div className="timeline_desc_inner">
            <p>
              MindMarket delivers global qualitative market research through real people who understand local cultures. We connect you with the voices that matter— wherever they are — to help you make smarter, faster business decisions with confidence.
            </p>
            <div>
              <a href="/contact-us" className="btn btn-green">
                Get a quote <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tiles */}
      <div className="tiles">
        <div className="tiles_grid">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="tile"
              style={{ background: tile.color, color: tile.textColor }}
            >
              <h3 className="tile_title">{tile.title}</h3>
              <p className="tile_desc" style={{ color: tile.textColor }}>{tile.desc}</p>
              <a
                href={tile.href}
                className="tile_link"
                style={{
                  background: tile.textColor === '#fff' ? 'rgba(255,255,255,0.22)' : 'rgba(44,46,42,0.1)',
                  color: tile.textColor,
                }}
              >
                <ArrowRight /> {tile.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
