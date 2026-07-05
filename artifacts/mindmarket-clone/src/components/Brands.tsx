interface BrandItem {
  name: string
  img: string
}

const rail1: BrandItem[] = [
  { name: 'Discord', img: '/images/1755458576-discord-icon-1.svg' },
  { name: 'Paypal', img: '/images/1758543241-logo-paypal.png' },
  { name: 'Walmart', img: '/images/1758633618-logo-walmart.png' },
  { name: 'Moët & Chandon', img: '/images/1758633714-logo-moet-chandon.png' },
  { name: 'Coinbase', img: '/images/1758633775-logo-coinbase.png' },
  { name: 'Airbnb', img: '/images/1758633823-logo-airbnb.png' },
  { name: 'Apple', img: '/images/1776187970-apple-logo.webp' },
]

const rail2: BrandItem[] = [
  { name: 'Google', img: '/images/1758542873-logo-google.png' },
  { name: 'Youtube', img: '/images/1758633552-logo-youtube.png' },
  { name: 'Uber', img: '/images/1758633638-logo-uber.png' },
  { name: 'Meta', img: '/images/1758633737-logo-meta.png' },
  { name: 'Citizens Bank', img: '/images/1758633791-logo-citizens-bank.svg' },
  { name: 'American Express', img: '/images/1763465938-american-express.png' },
  { name: 'Amazon', img: '/images/1758543222-logo-amazon.svg' },
  { name: 'WhatsApp', img: '/images/1758633590-logo-whatsapp.png' },
  { name: 'NielsenIQ', img: '/images/1758633680-logo-nielseniq.png' },
  { name: 'HP', img: '/images/1758633756-logo-hp.png' },
  { name: 'AnswerLab', img: '/images/1758633805-logo-answerlab.png' },
  { name: 'Starbucks', img: '/images/1763478625-starbucks-edited.png' },
]

function BrandPill({ brand }: { brand: BrandItem }) {
  return (
    <div className="brand-pill">
      <div className="brand-pill_icon">
        <img src={brand.img} alt={brand.name} loading="lazy" />
      </div>
      <span className="brand-pill_name">{brand.name}</span>
    </div>
  )
}

function Rail({ brands, reverse }: { brands: BrandItem[]; reverse?: boolean }) {
  const doubled = [...brands, ...brands]
  return (
    <div className={`brands_rail${reverse ? ' -reverse' : ''}`}>
      <div className="brands_rail_track">
        {doubled.map((brand, i) => (
          <BrandPill key={`${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  )
}

export default function Brands() {
  return (
    <section className="brands">
      <h2 className="brands_title">Brands that choose Amit</h2>
      <div className="brands_rails">
        <Rail brands={rail1} />
        <Rail brands={rail2} reverse />
      </div>
    </section>
  )
}
