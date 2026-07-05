const SwirlLogo = () => (
  <div className="hero_logo-wrap" aria-label="Amit">
    <svg viewBox="0 0 36 30" className="hero_logo-svg" fill="none" aria-hidden="true">
      <path stroke="#2c2e2a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M3.837 28.21C-3.478 6.354 15.187-1.665 16.235 10.905c.923 11.079-5.601 12.732-5.601 7.213s5.178-11.663 10.613-9.455c6.044 2.455 3.98 17.044-.55 15.424-3.305-1.182-.106-9.393 4.63-11.685 6.551-3.17 12.139 4.752 4.934 15.81" />
      <path fill="#2c2e2a" d="M22.502 5.518a2.68 2.68 0 1 0 0-5.359 2.68 2.68 0 0 0 0 5.359" />
      <path stroke="#2c2e2a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M13.815 20.71c-1.525 1.148-3.18.188-3.18-2.593 0-5.68 5.177-11.663 10.612-9.455 6.044 2.455 3.98 17.044-.55 15.424-3.304-1.182-.106-9.393 4.63-11.685 6.552-3.17 12.14 4.752 4.934 15.81" />
      <path stroke="#2c2e2a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M25.328 12.4c6.551-3.168 12.138 4.753 4.933 15.81" />
      <path stroke="#2c2e2a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M20.697 24.086c-3.305-1.182-.106-9.394 4.63-11.685 6.551-3.17 12.139 4.752 4.934 15.809" />
    </svg>
  </div>
)

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero_container">
        <div className="hero_content">
          <SwirlLogo />
          <h1 className="hero_title">Real human insights</h1>
          <h2 className="hero_tagline">One global partner</h2>
        </div>
      </div>
    </section>
  )
}
