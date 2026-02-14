import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Squares from "./components/Squares"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <AboutMe/>
        <Projects/>
      </main>
      <Footer/>
      <Squares/>
    </>
  )
}

export default App