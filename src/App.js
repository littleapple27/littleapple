/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import BannerTop from './sections/bannerTop/bannerTop.js';
import SocialMedia from './sections/socialMedia/socialMedia.js';
import Hero from './sections/hero/hero.js'
import Portfolio from './sections/portfolio/portfolio.js';
import TechCloud from './sections/techCloud/techCloud.js';
import ContactMe from './sections/contactMe/contactMe.js';
import Footer from './sections/footer/footer.js';


let App = () => {
  return (
    <>
      <BannerTop />
      <Hero />
      <TechCloud />
      <Portfolio />
      <SocialMedia />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App;