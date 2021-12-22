/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import BannerTop from './sections/bannerTop/bannerTop.js';
import SocialMedia from './sections/socialMedia/socialMedia.js';
import Hero from './sections/hero/hero.js'
import Portfolio from './sections/portfolio/portfolio.js';
import Projects from './sections/portfolio/projects.js';
import TechCloud from './sections/techCloud/techCloud.js';
import ContactMe from './sections/contactMe/contactMe.js';
import Footer from './sections/footer/footer.js';
import ScrollToTop from '@qwp/react-scroll-up';
import pointing from './images/pointing.png';



let App = () => {
  return (
    <>
      <BannerTop />
      <Hero />
      <TechCloud />
      <Portfolio />
      <Projects />
      <SocialMedia />
      <ContactMe />
      <Footer />
      <ScrollToTop showUnder={160}>
        <div className="h-16 w-16 rounded-full shadow-lg bg-indigo-50">
          <img
            src={pointing}
            alt="little apple avatar pointing up"
          />
        </div>
      </ScrollToTop>
    </>
  )
}

export default App;