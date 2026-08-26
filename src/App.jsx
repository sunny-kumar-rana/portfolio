import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <About />
      </main>
    </>
  )
}

export default App