const AmitLogo = () => (
  <svg
    className="hero_logo"
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Amit"
  >
    <rect width="180" height="180" rx="36" fill="rgba(44,46,42,0.12)" />
    <text
      x="90"
      y="138"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="130"
      fontWeight="bold"
      textAnchor="middle"
      fill="#2c2e2a"
    >
      A
    </text>
  </svg>
)

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero_container">
        <div className="hero_content">
          <AmitLogo />
          <h1 className="hero_title">Real human insights</h1>
          <h2 className="hero_tagline">One global partner</h2>
        </div>
      </div>
    </section>
  )
}
