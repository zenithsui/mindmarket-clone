const articles = [
  {
    href: '#',
    title: 'Passion, creativity, and love for design — every piece tells a story',
    tags: ['Design', 'Creative', 'Worldwide'],
    img: '/images/amit-img-3.jpg',
    aspect: '638/916',
  },
  {
    href: '#',
    title: 'Built from scratch with vision and dedication',
    tags: ['Personal', 'Brand'],
    img: '/images/amit-img-4.jpg',
    aspect: '7/6',
  },
  {
    href: '#',
    title: 'Original ideas brought to life through craftsmanship',
    tags: ['Creative', 'Art'],
    img: '/images/amit-img-5.jpg',
    aspect: '7/6',
  },
  {
    href: '#',
    title: 'One vision, one creator — thank you for being part of this journey',
    tags: ['Community', 'Journey'],
    img: '/images/amit-img-6.jpg',
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
