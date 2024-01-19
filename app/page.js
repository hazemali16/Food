import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Products from './components/Products'
import Location from './components/Location'
import Services from './components/Services'
import HowItWork from './components/HowItWork'
import Testimonials from './components/Testimonials'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

export default function Home() {
  return (
<>
<div className='sm:w-[80%] mx-auto w-[95%]'>
      <NavBar />
      <Hero />
      <Location />
      <Products />
      <Services />
      <HowItWork />
      <Testimonials />
      <Subscribe />

    </div>
          <Footer />
</>
  )
}
