import About from "./components/About"
import Cursor from "./components/Cursor"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"
import Services from "./components/Services"


const App = () => {
  return (
    <main>
      <Cursor/>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Marquee/>
      <section className="h-dvh w-screen"></section>
    </main>
  )
}

export default App
