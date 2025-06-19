import Customerlogos from "./components/Customerlogos"
import { HeroSection } from "./components/HeroSection"
import { InteractiveCards } from "./components/Interactive-cards"
import { ParallaxSection } from "./components/Parallax-section"
import { Navbar } from "./components/Navbar"
import FeaturesSection from "./components/FeaturesSection"
import { StatsSection } from "./components/Stats-section"
import TestimonialsSection from "./components/Testimonials"
import Footer from "./components/Footer"
export default function App() {
  return (
    <div className="w-screen">
      <Navbar/>
      <HeroSection/>
      <Customerlogos/>
      <InteractiveCards/>
      <FeaturesSection/>
      <ParallaxSection/>
      <StatsSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  )
}