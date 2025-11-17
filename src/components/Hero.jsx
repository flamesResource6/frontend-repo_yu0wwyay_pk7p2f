import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Backend Software Engineer
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            I build resilient backends and delightful APIs
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Focused on performance, reliability, and developer experience. I ship scalable services that power products millions use.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 transition">
              Contact Me
            </a>
          </div>
        </motion.div>

        <div className="pointer-events-none" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/90 to-transparent" />
    </section>
  )
}
