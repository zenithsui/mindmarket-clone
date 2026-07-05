const ArrowRight = () => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 14 4-4-4-4" />
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10l4.5 4.5L16 6" stroke="var(--color-charcoal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const bullets = [
  'Fast, high-quality insights',
  'One seamless project lead',
  'Built for multi-market studies',
]

export default function Callout() {
  return (
    <div className="callout">
      <div className="callout_inner">
        <p className="callout_heading">
          Ready when<br />you are!
        </p>
        <div className="callout_body">
          <p className="callout_text">
            Whether you're launching in one market or ten, we're here to make your research simple, smart, and human from day one. Let's talk about your next project.
          </p>
          <a href="/contact-us" className="btn btn-charcoal callout_btn">
            Get a quote <ArrowRight />
          </a>
          <ul className="callout_bullets">
            {bullets.map(b => (
              <li key={b}>
                <span className="callout_bullet-icon"><CheckIcon /></span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
