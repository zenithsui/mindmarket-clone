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
  <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.01em', color: 'var(--color-charcoal)' }}>
    Amit
  </span>
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
          <a href="/" className="nav_logo" aria-label="Amit — Home" style={{ fontSize: '1.25rem', color: 'var(--color-charcoal)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
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
            <a href="/contact-us" className="nav_cta" aria-label="Talk to me!">
              Talk to me!
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
              Talk to me! <ArrowRight />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
