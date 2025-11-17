import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Auth from './components/Auth'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200/60">
        <div className="container mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-gray-900">Cardify</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#blog" className="hover:text-gray-900">Blog</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#auth" className="inline-flex items-center rounded-lg bg-gray-900 text-white px-3 py-1.5 text-sm hover:bg-black">Sign in</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Auth />
        <Blog />
        <Contact />
      </main>

      <footer className="py-10 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Cardify — All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="/test" className="hover:text-gray-700">System status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
