import { motion } from 'framer-motion'
import { Server, Boxes, Database, Cloud, Lock, Rocket } from 'lucide-react'

const skills = [
  { icon: Server, label: 'FastAPI / Django / Node.js' },
  { icon: Database, label: 'PostgreSQL / MongoDB / Redis' },
  { icon: Boxes, label: 'Event-Driven / Kafka / Celery' },
  { icon: Cloud, label: 'AWS / Docker / Kubernetes' },
  { icon: Lock, label: 'AuthN/Z / OAuth2 / RBAC' },
  { icon: Rocket, label: 'CI/CD / Observability' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Core Skills</h2>
        <p className="text-gray-600 mt-2">Tools and platforms I use to ship production systems.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {skills.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-xl border border-gray-200 p-5 bg-gradient-to-br from-white to-gray-50"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <p className="mt-4 font-medium text-gray-800">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
