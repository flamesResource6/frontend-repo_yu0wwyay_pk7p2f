import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message')
    }

    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s build something</h2>
        <p className="text-gray-600 mt-2">Tell me about your project or role—I'll get back within 24 hours.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl">
          <input name="name" required placeholder="Your Name" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <input name="email" required type="email" placeholder="Email" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <input name="subject" required placeholder="Subject" className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea name="message" required rows="5" placeholder="Project details, timelines, and goals" className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"></textarea>

          <div className="md:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition disabled:opacity-60">
              {loading ? 'Sending…' : 'Send Message'}
            </button>
            {status && status.ok && (
              <p className="text-green-700">Thanks! Message saved. Ref: {status.id}</p>
            )}
            {status && !status.ok && (
              <p className="text-red-600">{status.msg}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
