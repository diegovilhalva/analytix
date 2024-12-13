import Header from "@/components/Header"
import Hero from "./components/Hero"
import { ReactLenis } from "lenis/react"
import Brand from "./components/Brand"

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Brand />
        </main>
      </div>
    </ReactLenis>
  )
}

export default App