import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition ${scrolled ? 'backdrop-blur bg-white/70 border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg">YourName<span className="text-blue-600">.dev</span></a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#work" className="hover:text-gray-900">Work</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="/test" className="px-3 py-1 rounded bg-gray-900 text-white">System Check</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-gray-900">GitHub</a>
          <a href="#" className="hover:text-gray-900">LinkedIn</a>
          <a href="mailto:you@example.com" className="hover:text-gray-900">Email</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/profile`)
        const data = await res.json()
        setProfile(data)
      } catch (e) {
        setProfile(null)
      }
    }
    fetchProfile()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <main>
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-gray-50 to-white">
              <h2 className="text-2xl font-semibold">About</h2>
              <p className="mt-3 text-gray-700">
                {profile ? profile.summary : 'I craft resilient backend systems, scalable APIs, and data pipelines with a focus on performance, reliability, and developer experience.'}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(profile?.skills || ["Python","FastAPI","PostgreSQL"]).map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded bg-gray-900 text-white">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
