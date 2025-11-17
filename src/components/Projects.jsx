import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        setProjects([])
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Selected Work</h2>
        <p className="text-gray-600 mt-2">Production-grade systems that solve real problems.</p>

        {loading ? (
          <p className="mt-8 text-gray-500">Loading projects...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.map((p, i) => (
              <motion.a
                href={p.url}
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group block rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition"
              >
                <div className="text-xs font-medium text-blue-700 bg-blue-50 inline-block px-2 py-1 rounded">
                  {p.stack?.join(' • ')}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-700">{p.name}</h3>
                <p className="mt-2 text-gray-600">{p.description}</p>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
