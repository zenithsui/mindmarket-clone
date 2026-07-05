const GlobeIcon = () => (
  <svg viewBox="0 0 66 66" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M15.5 32.995a17.495 17.495 0 1 1 34.99 0 17.495 17.495 0 0 1-34.99 0M32.995 18h-.125c.23.45.48.988.705 1.585.607 1.615 1.16 3.98.177 6.07-.905 1.925-2.462 2.425-3.625 2.725l-.17.043c-1.13.292-1.6.412-1.937.925-.315.48-.26 1.082.1 2.25l.08.262c.143.455.313.995.4 1.505.112.635.142 1.43-.258 2.2a3.75 3.75 0 0 1-1.554 1.628 5.5 5.5 0 0 1-1.66.525l-.173.03c-.895.157-1.35.237-1.785.705-.343.367-.555 1.005-.68 1.93-.05.377-.08.752-.112 1.14l-.015.204c-.035.426-.08.91-.175 1.326l-.06.275a14.95 14.95 0 0 0 10.867 4.664 14.9 14.9 0 0 0 7.635-2.087 8 8 0 0 1-.645-.715c-.593-.745-1.36-2.017-1.095-3.515.127-.717.513-1.322.89-1.79.385-.475.85-.915 1.258-1.292l.277-.253c.313-.288.583-.533.81-.773q.17-.17.313-.364a1 1 0 0 0 .077-.133c.125-.417-.025-.725-.21-.867-.138-.106-.487-.263-1.115.132q-.314.203-.633.395a2.5 2.5 0 0 1-.687.293 1.335 1.335 0 0 1-1.585-.9 1.5 1.5 0 0 1-.07-.5 2.5 2.5 0 0 1 .04-.473c.063-.525.157-1.3-.143-2.455-.242-.928-.595-1.635-.955-2.355q-.257-.51-.49-1.03c-.22-.5-.46-1.15-.417-1.84.05-.8.453-1.45 1.105-1.94.793-.595 1.79-1.957 2.653-3.335a38 38 0 0 0 1.017-1.725l.058-.105A14.93 14.93 0 0 0 32.995 18" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg viewBox="0 0 66 66" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M33 15.5C23.35 15.5 15.5 23.35 15.5 33S23.35 50.5 33 50.5 50.5 42.65 50.5 33 42.65 15.5 33 15.5zm9.207 11.293a1 1 0 0 0-1.414-1.414L30 36.172l-4.586-4.586a1 1 0 0 0-1.414 1.414l5.293 5.293a1 1 0 0 0 1.414 0l10.5-10.5z" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 66 66" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M33 51.3 29.55 48C19.15 38.45 12 32.1 12 24.25 12 17.4 17.3 12 24 12c3.85 0 7.55 1.8 10 4.65C36.45 13.8 40.15 12 44 12c6.7 0 12 5.4 12 12.25 0 7.85-7.15 14.2-18.55 23.75L33 51.3Z" />
  </svg>
)

const cards = [
  {
    modifier: '-blue',
    icon: <GlobeIcon />,
    stat: '100%',
    desc: 'Built with passion, creativity, and dedication from day one.',
  },
  {
    modifier: '-green',
    icon: <CheckCircleIcon />,
    stat: '∞',
    desc: 'Unlimited ideas, always creating something new.',
  },
  {
    modifier: '-red',
    icon: <HeartIcon />,
    stat: '1',
    desc: 'One vision. One creator. One brand — Made by Amit.',
  },
]

export default function Stats() {
  return (
    <div className="stats_wrap">
      <div className="stats_inner">
        <div className="stats_left">
          <h2 className="stats_title">
            A few things that define{' '}
            <strong>this brand</strong>
          </h2>
          <p className="stats_desc">
            This brand wasn't created to chase numbers—it was created to bring original ideas to life. Every design reflects creativity, craftsmanship, and a commitment to making something meaningful.
          </p>
        </div>

        <div className="stats_cards">
          {cards.map((card) => (
            <div key={card.modifier} className={`stat-card ${card.modifier}`}>
              <div className="stat-card_top">
                <div className="stat-card_icon">{card.icon}</div>
              </div>
              <div>
                <div className="stat-card_stat">{card.stat}</div>
                <p className="stat-card_desc" style={{ marginTop: '12px' }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
