import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/blog`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">From the blog</h2>
          <p className="mt-4 text-gray-600">Insights on fintech, design, and infrastructure.</p>
        </div>
        {loading ? (
          <p className="mt-12 text-gray-500">Loading posts…</p>
        ) : (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.slug} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
                {p.excerpt && <p className="mt-2 text-gray-600">{p.excerpt}</p>}
                <div className="mt-4 text-sm text-gray-500 flex items-center gap-3">
                  {p.author && <span>By {p.author}</span>}
                  {p.tags && p.tags.length > 0 && (
                    <span className="inline-flex items-center gap-1">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs rounded-full bg-indigo-50 text-indigo-700">{t}</span>
                      ))}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
