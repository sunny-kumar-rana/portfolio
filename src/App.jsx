import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
      </main>
    </>
  )
}

export default App