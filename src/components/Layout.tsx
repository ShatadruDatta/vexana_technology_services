import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { m } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import Seo from './Seo'

export default function Layout() {
  const { pathname } = useLocation()
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => setHasMounted(true), [])

  return (
    <>
      <Seo />
      <a href="#main" className="sr-only z-[60] rounded-md bg-brand px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      {/* Fades each new page in; the first load is not animated so content paints immediately. */}
      <m.main id="main" key={pathname} initial={hasMounted ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
        <Outlet />
      </m.main>
      <Footer />
    </>
  )
}
