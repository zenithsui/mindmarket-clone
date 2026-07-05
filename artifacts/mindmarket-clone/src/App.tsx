import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import Callout from './components/Callout'
import Stats from './components/Stats'
import Articles from './components/Articles'
import Brands from './components/Brands'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <Callout />
        <Stats />
        <Articles />
        <Brands />
      </main>
      <Footer />
    </>
  )
}
