const BASE = 'https://www.datocms-assets.com/166003'

const articles = [
  {
    href: '/articles/are-focus-groups-still-worth-it',
    title: 'Are Focus Groups Still Worth It? An Honest Answer from People Who Run Them',
    tags: ['Worldwide', 'Educational', 'Methodology'],
    img: `${BASE}/1783108883-are-focus-groups-still-worth-it.webp`,
    aspect: '638/916',
  },
  {
    href: '/articles/how-to-run-research-in-live-venues',
    title: 'How to Run Research in Live Venues',
    tags: ['Worldwide', 'Methodology', 'Educational'],
    img: `${BASE}/1780507790-filename-qualitative-research-live-venue-hospitality-jpg.webp`,
    aspect: '7/6',
  },
  {
    href: '/articles/what-bartenders-know-about-your-brand',
    title: 'What Bartenders Know About Your Brand',
    tags: ['Worldwide', 'Industry Insights', 'Customer Insights'],
    img: `${BASE}/1780333232-bartender-preparing-cocktails-premium-bar.webp`,
    aspect: '7/6',
  },
  {
    href: '/articles/restaurant-brand-perception-uk-expansion',
    title: 'How a London Restaurant Group Uncovered the Brand Perception Gap That Shaped Its UK Expansion',
    tags: ['Europe', 'Case Studies'],
    img: `${BASE}/1775828669-intercepts.webp`,
    aspect: '7/6',
  },
]

export default function Articles() {
  return (
    <div className="articles-wrap">
      <div className="articles">
        <ul className="articles_grid">
          {articles.map((a, i) => (
            <li key={i} className={`article-item article-item--${i + 1}`}>
              <div className="article-card-v2">
                <div className="article-card-v2_img-wrap" style={{ aspectRatio: a.aspect }}>
                  <div className="article-card-v2_tags">
                    {a.tags.map(tag => (
                      <span key={tag} className="article-card-v2_tag">{tag}</span>
                    ))}
                  </div>
                  <img
                    className="article-card-v2_img"
                    src={a.img}
                    alt={a.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="article-card-v2_content">
                  <h3 className={`article-card-v2_title${i === 0 ? ' article-card-v2_title--lg' : ''}`}>{a.title}</h3>
                </div>
                <a href={a.href} className="article-card-v2_link" aria-label={a.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
