import React from 'react'
import { Shield, Sparkles, CreditCard, Rocket, Database, Lock } from 'lucide-react'

const features = [
  {
    icon: CreditCard,
    title: 'Card primitives',
    desc: 'Issue, tokenize, and design your card experiences with modern UI blocks.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Auth, validation, and best practices built into the stack.'
  },
  {
    icon: Database,
    title: 'Managed data',
    desc: 'Mongo-backed persistence for users, posts, and messages.'
  },
  {
    icon: Lock,
    title: 'SSO ready',
    desc: 'Bring your OAuth provider or use email to get started fast.'
  },
  {
    icon: Sparkles,
    title: 'Design‑forward',
    desc: 'Glassmorphic styling with subtle depth and motion.'
  },
  {
    icon: Rocket,
    title: 'Production tooling',
    desc: 'FastAPI + Vite, type‑safe models, and DX‑focused patterns.'
  }
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Everything you need to ship</h2>
          <p className="mt-4 text-gray-600">We sweat the plumbing so you can focus on the product.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
