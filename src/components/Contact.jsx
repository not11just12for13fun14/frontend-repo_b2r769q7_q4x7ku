import React, { useState } from 'react'

const Contact = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ ok: true, message: 'Thanks — we\'ll get back to you shortly!' })
      setName(''); setEmail(''); setMessage('')
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Let\'s talk</h2>
            <p className="mt-4 text-gray-600">Questions about pricing, security, or the roadmap? Send us a note.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-3">
              <label className="text-sm">
                <span className="text-gray-700">Name</span>
                <input className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={name} onChange={(e)=>setName(e.target.value)} />
              </label>
              <label className="text-sm">
                <span className="text-gray-700">Email</span>
                <input type="email" className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </label>
            </div>
            <label className="block text-sm mt-3">
              <span className="text-gray-700">Message</span>
              <textarea className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={5} value={message} onChange={(e)=>setMessage(e.target.value)} />
            </label>
            <button className="mt-4 w-full rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">Send message</button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : status==='loading' ? 'text-gray-500' : 'text-red-600'}`}>
                {status==='loading' ? 'Sending…' : status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
