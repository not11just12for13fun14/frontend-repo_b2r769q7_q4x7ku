import React, { useState } from 'react'

const Input = ({ label, type = 'text', value, onChange, placeholder }) => (
  <label className="block text-sm">
    <span className="text-gray-700">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </label>
)

const Auth = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [mode, setMode] = useState('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/register'
      const body = mode === 'login' ? { email, password } : { name, email, password }
      const res = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setStatus({ ok: true, message: `${mode === 'login' ? 'Welcome back' : 'Account created'}, ${data.name}` })
    } catch (e) {
      setStatus({ ok: false, message: e.message })
    }
  }

  return (
    <section id="auth" className="py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Authentication built‑in</h2>
            <p className="mt-4 text-gray-600">Email-based auth ready to go. Upgrade to SSO when you need it.</p>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 text-sm">
              <button type="button" onClick={() => setMode('login')} className={`px-3 py-1 rounded-lg ${mode==='login'?'bg-indigo-600 text-white':'bg-gray-100 text-gray-900'}`}>Login</button>
              <button type="button" onClick={() => setMode('register')} className={`px-3 py-1 rounded-lg ${mode==='register'?'bg-indigo-600 text-white':'bg-gray-100 text-gray-900'}`}>Register</button>
            </div>
            <div className="mt-4 space-y-3">
              {mode === 'register' && (
                <Input label="Name" value={name} onChange={setName} placeholder="Ada Lovelace" />
              )}
              <Input label="Email" type="email" value={email} onChange={setEmail} placeholder="you@company.com" />
              <Input label="Password" type="password" value={password} onChange={setPassword} placeholder="••••••••" />
            </div>
            <button className="mt-4 w-full rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">Continue</button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : status==='loading' ? 'text-gray-500' : 'text-red-600'}`}>
                {status==='loading' ? 'Processing…' : status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Auth
