import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="flex min-h-screen items-center justify-center">
          <h1 className="text-4xl font-bold">Portfolio</h1>
        </section>
      </main>
    </>
  )
}

export default App