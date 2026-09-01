import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(
        location.hash.substring(1)
      )

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
          })
        }, 50)
      }
    }
  }, [location])

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />
      </Routes>
    </>
  )
}

export default App