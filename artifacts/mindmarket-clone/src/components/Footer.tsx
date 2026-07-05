const ArrowRight = () => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 14 4-4-4-4" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        {/* Top: pitch text + nav links */}
        <div className="footer_top">
          <div className="footer_cta-col">
            <p className="footer_cta-text">
              Have a project in mind? We'd love to hear what you're working on and show you how we can help. Whether you're exploring a new market or launching your next product, we're ready when you are.
            </p>
            <div style={{ marginTop: 24 }}>
              <a href="/contact-us" className="btn btn-charcoal">
                Get a quote <ArrowRight />
              </a>
            </div>
          </div>

          <div className="footer_nav-col">
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/methodology">Methodology</a></li>
              <li><a href="/sectors">Industry Sectors</a></li>
              <li><a href="/network">Network</a></li>
              <li><a href="/about-us">About Us</a></li>
            </ul>
            <ul>
              <li><a href="/articles">Insights</a></li>
              <li><a href="/contact-us">Contact</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li>
                <button type="button">Cookie Preferences</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Let's Connect + addresses */}
        <div className="footer_bottom">
          <div className="footer_connect">
            <p className="footer_connect_heading">
              Let's<br /><u>Connect</u>
            </p>
          </div>

          <div className="footer_offices">
            <div className="footer_office">
              <p>
                <strong>Dubai</strong><br />
                <a
                  href="https://www.google.com/maps/place/MindMarket+International/@25.1250606,55.3811616,17z"
                  target="_blank"
                  rel="noopener"
                >
                  Dubai Silicon Oasis, DDP,<br />
                  Building A2, 341041 Dubai, UAE
                </a><br />
                Mon-Fri 10:00 am - 7:00 pm (GST)
              </p>
            </div>

            <div className="footer_office">
              <p>
                <strong>London</strong><br />
                <a
                  href="https://www.google.com/maps/place/MindMarket/@51.5256447,-0.0862333,17z"
                  target="_blank"
                  rel="noopener"
                >
                  3rd Floor, 86-90 Paul Street,<br />
                  London EC2A 4NE, UK
                </a><br />
                Mon-Fri 9:00 am - 6:00 pm (GMT)
              </p>
            </div>

            <div className="footer_office">
              <p>
                <a href="mailto:curious@mindmarket.com">
                  <strong>curious@mindmarket.com</strong>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="footer_legal">
          <p className="footer_copyright">
            Copyright © 2026 MindMarket International
          </p>
          <div className="footer_esomar">
            <a href="https://www.esomar.org/" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/esomar-3f96eb5c9c.png"
                alt="ESOMAR"
                loading="lazy"
                style={{ maxWidth: 200, height: 'auto' }}
              />
            </a>
          </div>
          <div className="footer_social">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/the-mindmarket"
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
