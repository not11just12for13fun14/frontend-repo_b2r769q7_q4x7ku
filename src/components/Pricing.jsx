import React from 'react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    features: ['1 project', 'Basic auth', 'Community support'],
    cta: 'Start free',
    highlighted: false
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    features: ['Unlimited projects', 'SSO + email auth', 'Email support'],
    cta: 'Choose Growth',
    highlighted: true
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/mo',
    features: ['Priority routing', 'Audit logs', 'SLA + priority support'],
    cta: 'Talk to sales',
    highlighted: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600">Scale as you grow. No hidden fees.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlighted ? 'border-indigo-600' : 'border-gray-200'} bg-white p-6 shadow-sm`}> 
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">Popular</div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-gray-900">{t.price}</span>
                <span className="text-gray-500">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-gray-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full justify-center rounded-lg px-4 py-2 ${t.highlighted ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} transition-colors`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
