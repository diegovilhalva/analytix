import Header from "@/components/Header"
import Hero from "./components/Hero"
import { ReactLenis } from "lenis/react"
import Brand from "./components/Brand"
import Feature from "./components/Feature"
import Proccess from "./components/Proccess"
import Overview from "./components/Overview"
import Review from "./components/Review"
import Blog from "./components/Blog"
import Cta from "./components/Cta"
import Footer from "./components/Footer"

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Brand />
          <Feature />
          <Proccess />
          <Overview />
          <Review />
          <Blog />
          <Cta />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App