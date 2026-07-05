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
              Let's Create Something Meaningful.<br /><br />
              Every great journey begins with a conversation. Whether you have a question, feedback, or just want to say hello, I'd love to hear from you.
            </p>
            <div style={{ marginTop: 24 }}>
              <a href="/contact-us" className="btn btn-charcoal">
                Talk to me! <ArrowRight />
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
                <strong>Digital Studio</strong><br />
                Designed with passion.<br />
                Available Worldwide.<br />
                <br />
                Open 24/7
              </p>
            </div>

            <div className="footer_office">
              <p>
                <a href="https://mindmarket-clone-seven.vercel.app" target="_blank" rel="noopener">
                  <strong>mindmarket-clone-seven.vercel.app</strong>
                </a>
              </p>
            </div>

            <div className="footer_office">
              <p>
                <a href="mailto:amit@xyz.com">
                  <strong>amit@xyz.com</strong>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="footer_legal">
          <p className="footer_copyright">
            Copyright © 2026 Amit
          </p>
          <div className="footer_social" />
        </div>
      </div>
    </footer>
  )
}
