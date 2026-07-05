import { useState } from 'react'

const ArrowRight = () => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 14 4-4-4-4" />
  </svg>
)

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m5 8 5 5 5-5" />
  </svg>
)

const LogoIcon = () => (
  <svg width="1.2em" height="1em" viewBox="0 0 36 30" aria-hidden="true">
    <g fill="none">
      <path stroke="#8ED462" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M3.837 28.21C-3.478 6.354 15.187-1.665 16.235 10.905c.923 11.079-5.601 12.732-5.601 7.213s5.178-11.663 10.613-9.455c6.044 2.455 3.98 17.044-.55 15.424-3.305-1.182-.106-9.393 4.63-11.685 6.551-3.17 12.139 4.752 4.934 15.81" />
      <path fill="#8ED462" d="M22.502 5.518a2.68 2.68 0 1 0 0-5.359 2.68 2.68 0 0 0 0 5.359" />
      <path stroke="url(#nav-logo-a)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M12.988 21.127c1.764-.463 3.79-3.718 3.247-10.223a11 11 0 0 0-.218-1.46" opacity=".5" />
      <path stroke="#8ED462" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M13.815 20.71c-1.525 1.148-3.18.188-3.18-2.593 0-5.68 5.177-11.663 10.612-9.455 6.044 2.455 3.98 17.044-.55 15.424-3.304-1.182-.106-9.393 4.63-11.685 6.552-3.17 12.14 4.752 4.934 15.81" />
      <path stroke="url(#nav-logo-b)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M24.574 13.08c1.336 5.053-.641 12.164-3.877 11.006" opacity=".5" />
      <path stroke="#8ED462" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M25.328 12.4c6.551-3.168 12.138 4.753 4.933 15.81" />
      <path stroke="#8ED462" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.336" d="M20.697 24.086c-3.305-1.182-.106-9.394 4.63-11.685 6.551-3.17 12.139 4.752 4.934 15.809" />
      <defs>
        <linearGradient id="nav-logo-a" x1="16.35" x2="15.661" y1="18.015" y2="10.005" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8ED462" /><stop offset="1" stopColor="#368D32" />
        </linearGradient>
        <linearGradient id="nav-logo-b" x1="25.354" x2="24.614" y1="23.015" y2="13.372" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8ED462" /><stop offset="1" stopColor="#368D32" />
        </linearGradient>
      </defs>
    </g>
  </svg>
)

const LogoWordmark = () => (
  <svg width="6.77em" height="1em" viewBox="0 0 127.1 18.8" aria-hidden="true" style={{ fill: 'currentColor' }}>
    <path d="M126.6 16.3c-.1 0-.2 0-.4.1h-.5c-.3 0-.5 0-.8-.1-.2-.1-.4-.3-.6-.5-.2-.3-.2-.6-.2-1.1V7.3h2.7V5.2h-2.7V2h-2.6v3.2h-2v2.1h2v7.9c0 .8.2 1.5.5 2 .4.5.8.9 1.4 1.2s1.2.4 1.9.4c.4 0 .8 0 1-.1.3-.1.5-.1.6-.2zm-7.5-4.6c0-1.2-.2-2.2-.5-3.1s-.8-1.5-1.3-2.1c-.6-.5-1.2-.9-1.9-1.2-.7-.2-1.4-.4-2.2-.4q-1.8 0-3.3.9c-.9.6-1.6 1.4-2.2 2.4-.5 1-.8 2.3-.8 3.6 0 1.4.3 2.6.8 3.6s1.2 1.8 2.2 2.4 2.1.8 3.4.8c1 0 1.8-.1 2.6-.4s1.4-.7 1.9-1.3c.5-.5.9-1.2 1.1-1.9l-2.5-.4c-.2.4-.4.8-.7 1.1s-.6.5-1.1.6c-.4.1-.9.2-1.4.2-.8 0-1.4-.2-2-.5s-1-.8-1.3-1.4-.4-1.3-.5-2.1h9.5v-.8zm-9.5-1c0-.6.2-1.1.4-1.6.3-.6.7-1 1.3-1.4.5-.4 1.2-.5 1.9-.5s1.3.2 1.8.5.9.7 1.2 1.3c.3.5.4 1.1.4 1.8h-7zm-2.7 7.4c-1.2-2.3-2.1-4.1-2.9-5.7l-.2-.5c-.2-.5-.4-.9-.6-1.3 1-1.4 1.8-3.4 2.5-5.8l.1-.2h-2.9v.1c-.4 1.3-.8 2.4-1.3 3.3-1.3-1.3-3-1.4-4.1-1.1-.4.1-.6.1-.9.2V.7H94v17.9h2.6v-5.3c.4.2.8.3 1.1.3.6.1 1.8.1 3.2-.8l.5.9c.6 1.2 1.4 2.7 2.4 4.7l.1.1h3.1zm-7.2-7.8c-.5.4-1.1.6-1.6.6-.5-.1-.8-.4-.8-.6 0-.5.4-.6.7-.7h.4c.3-.1.8 0 1.3.7m-14.6 8.3V5.2h2.5v2.1h.1c.3-.7.7-1.3 1.3-1.7.7-.4 1.4-.6 2.2-.6h1.1v2.5c-.1 0-.3-.1-.6-.1s-.5-.1-.8-.1c-.6 0-1.2.1-1.6.4-.5.3-.9.6-1.1 1.1-.3.5-.4 1-.4 1.6v8.2zM52.3.7h3.3l5.7 13.9h.2L67.2.7h3.3v17.8h-2.6V5.6h-.2l-5.3 12.9h-2.1L55 5.6h-.2v12.9h-2.6V.7zm-9.1 18.1c-1.1 0-2-.3-2.9-.8-.8-.6-1.5-1.4-2-2.4s-.7-2.3-.7-3.7.2-2.7.7-3.7 1.2-1.8 2-2.4c.9-.5 1.8-.8 2.9-.8.8 0 1.5.1 2 .4s.9.6 1.2 1 .5.7.7 1h.2V.7h2.6v17.8h-2.5v-2.1H47c-.2.3-.4.6-.7 1s-.7.7-1.2 1c-.4.3-1.1.4-1.9.4m.6-2.2c.7 0 1.4-.2 1.9-.6s.9-1 1.2-1.7.4-1.5.4-2.5c0-.9-.1-1.7-.4-2.4s-.7-1.2-1.2-1.6-1.2-.6-1.9-.6c-.8 0-1.4.2-2 .6-.5.4-.9 1-1.2 1.7s-.4 1.5-.4 2.4.1 1.7.4 2.4.7 1.3 1.2 1.7 1.2.6 2 .6m-16.2-6v7.9H25V5.2h2.5v2.2h.2c.3-.7.8-1.3 1.4-1.7.7-.5 1.5-.7 2.5-.7q1.35 0 2.4.6c.7.4 1.2.9 1.6 1.7.4.7.5 1.6.5 2.7v8.5h-2.6v-8.2c0-1-.3-1.7-.8-2.3s-1.2-.8-2.1-.8c-.6 0-1.1.1-1.6.4s-.8.6-1.1 1.2q-.3.75-.3 1.8m-7.3 8V5.2h2.6v13.4zm1.4-15.5c-.5 0-.8-.2-1.2-.5-.3-.3-.5-.6-.5-1s.2-.8.5-1.1.7-.5 1.2-.5.8.2 1.2.5c.3.3.5.7.5 1.1s-.2.8-.5 1.1c-.4.3-.8.4-1.2.4M0 .7h3.3L9 14.6h.2L14.9.7h3.3v17.8h-2.6V5.6h-.2l-5.3 12.9H8L2.7 5.6h-.1v12.9H0zm77.8 4.1c-2.7 0-4.9 1.6-5.4 3.9v.2H75v-.1c.4-1.2 1.3-1.8 2.8-1.8 1.8 0 3 1 3 2.7v1.4c-.7-.5-2.1-.9-3.4-.9-3.2 0-5.5 1.8-5.5 4.3s2.3 4.4 5.4 4.4c1.5 0 2.8-.5 3.6-1.1v.8h2.6v-9c-.2-3-2.3-4.8-5.7-4.8m2.9 9v1.3c-.4.9-1.7 1.5-3.1 1.5-1.5 0-3.2-.7-3.2-2.2s1.6-2.2 3.2-2.2c1.4.1 2.7.7 3.1 1.6" />
  </svg>
)

const methodology_links = [
  { label: 'Online Bulletin Boards', href: '/methodology/online-bulletin-boards' },
  { label: 'Focus Groups', href: '/methodology/focus-groups' },
  { label: 'Taste Testing', href: '/methodology/taste-testing' },
  { label: 'Central Location Testing', href: '/methodology/central-location-testing' },
  { label: 'Customer Intercept', href: '/methodology/customer-intercept-research' },
  { label: 'Online Diary', href: '/methodology/online-diary' },
  { label: 'Mystery Shopping', href: '/methodology/mystery-shopping' },
  { label: 'Shop-Along', href: '/methodology/shop-along' },
  { label: 'UX Research', href: '/methodology/ux-research' },
  { label: 'In-depth Interviews', href: '/methodology/in-depth-interviews' },
  { label: 'Ethnographic Research', href: '/methodology/ethnographic-research' },
  { label: 'Dyads and Triads', href: '/methodology/dyads-and-triads' },
]

const sector_links = [
  { label: 'Automotive', href: '/sectors/automotive-market-research' },
  { label: 'Technology', href: '/sectors/technology-market-research' },
  { label: 'Sports', href: '/sectors/sports-market-research' },
  { label: 'Gaming', href: '/sectors/gaming-market-research' },
  { label: 'FMCG', href: '/sectors/fmcg-market-research' },
  { label: 'Food & Beverage', href: '/sectors/food-beverage-market-research' },
  { label: 'Financial Services', href: '/sectors/financial-market-research' },
  { label: 'Beauty & Cosmetics', href: '/sectors/beauty-cosmetics' },
  { label: 'Crypto', href: '/sectors/crypto-market-research' },
  { label: 'Hospitality', href: '/sectors/hospitality-market-research' },
  { label: 'Consulting', href: '/sectors/consulting-firms' },
  { label: 'Pharmaceutical', href: '/sectors/pharmaceutical-medical-device-market-research' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileMethodologyOpen, setMobileMethodologyOpen] = useState(false)
  const [mobileSectorOpen, setMobileSectorOpen] = useState(false)

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        {/* White bar */}
        <div className="nav_bar">
          {/* Logo */}
          <a href="/" className="nav_logo" aria-label="MindMarket — Home" style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <LogoIcon />
            <LogoWordmark />
          </a>

          {/* Desktop links */}
          <div className="nav_links" role="menubar">
            <a href="/services" className="nav_link">Services</a>

            <div className="nav_link-item">
              <span className="nav_link" tabIndex={0} role="button" aria-haspopup="true">
                Methodology <ChevronDown />
              </span>
              <div className="nav_dropdown" role="menu">
                {methodology_links.map(l => (
                  <a key={l.href} href={l.href} role="menuitem">{l.label}</a>
                ))}
                <a href="/methodology" role="menuitem" style={{ borderTop: '1px solid rgba(44,46,42,0.1)', marginTop: 4, paddingTop: 10 }}>See All</a>
              </div>
            </div>

            <div className="nav_link-item">
              <span className="nav_link" tabIndex={0} role="button" aria-haspopup="true">
                Industry Sectors <ChevronDown />
              </span>
              <div className="nav_dropdown" role="menu">
                {sector_links.map(l => (
                  <a key={l.href} href={l.href} role="menuitem">{l.label}</a>
                ))}
                <a href="/sectors" role="menuitem" style={{ borderTop: '1px solid rgba(44,46,42,0.1)', marginTop: 4, paddingTop: 10 }}>See All</a>
              </div>
            </div>

            <a href="/network" className="nav_link">Network</a>
            <a href="/about-us" className="nav_link">About Us</a>
            <a href="/articles" className="nav_link">Insights</a>
            <a href="/contact-us" className="nav_link">Contact</a>
          </div>

          {/* Right side: hamburger + CTA */}
          <div className="nav_right">
            {/* CTA button */}
            <a href="/contact-us" className="nav_cta" aria-label="Get a quote">
              Get a quote
            </a>

            {/* Hamburger */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="nav_burger-btn"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="nav_mobile-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="nav_mobile-close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Logo in mobile */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, fontSize: '1.25rem', color: 'var(--color-charcoal)', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
            <LogoIcon /><LogoWordmark />
          </a>

          <a href="/services" className="nav_mobile-link" onClick={() => setMobileOpen(false)}>
            Services <ArrowRight />
          </a>

          {/* Methodology accordion */}
          <button
            className="nav_mobile-link"
            style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}
            onClick={() => setMobileMethodologyOpen(v => !v)}
          >
            Methodology <ChevronDown />
          </button>
          {mobileMethodologyOpen && (
            <div style={{ paddingLeft: 16, borderBottom: '1px solid rgba(44,46,42,0.12)' }}>
              {methodology_links.map(l => (
                <a key={l.href} href={l.href} className="nav_mobile-link" style={{ fontSize: '1rem' }} onClick={() => setMobileOpen(false)}>{l.label}</a>
              ))}
            </div>
          )}

          {/* Sectors accordion */}
          <button
            className="nav_mobile-link"
            style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}
            onClick={() => setMobileSectorOpen(v => !v)}
          >
            Industry Sectors <ChevronDown />
          </button>
          {mobileSectorOpen && (
            <div style={{ paddingLeft: 16, borderBottom: '1px solid rgba(44,46,42,0.12)' }}>
              {sector_links.map(l => (
                <a key={l.href} href={l.href} className="nav_mobile-link" style={{ fontSize: '1rem' }} onClick={() => setMobileOpen(false)}>{l.label}</a>
              ))}
            </div>
          )}

          <a href="/network" className="nav_mobile-link" onClick={() => setMobileOpen(false)}>Our Network <ArrowRight /></a>
          <a href="/about-us" className="nav_mobile-link" onClick={() => setMobileOpen(false)}>About Us <ArrowRight /></a>
          <a href="/articles" className="nav_mobile-link" onClick={() => setMobileOpen(false)}>Insights <ArrowRight /></a>
          <a href="/contact-us" className="nav_mobile-link" onClick={() => setMobileOpen(false)}>Contact <ArrowRight /></a>

          <div style={{ marginTop: 32 }}>
            <a href="/contact-us" className="btn btn-charcoal" onClick={() => setMobileOpen(false)}>
              Get a quote <ArrowRight />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
