import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[86vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <span className="inline-flex items-center text-sm font-medium text-indigo-700 bg-indigo-100/70 px-3 py-1 rounded-full">
            New • Fintech-grade card toolkit
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-gray-900">
            Launch card products with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">glass‑morphic</span> edge
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Design, test, and ship modern card experiences. Secure auth, subscription billing, and a built‑in blog — ready out of the box.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm">
              Get started
            </a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/80 backdrop-blur text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors">
              View features
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <span>SSO-ready</span>
            <span>•</span>
            <span>PCI-aware patterns</span>
            <span>•</span>
            <span>Built with FastAPI + React</span>
          </div>
        </motion.div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}

export default Hero
