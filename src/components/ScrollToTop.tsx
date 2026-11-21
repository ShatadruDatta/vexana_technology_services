import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route changes jump instantly (to the top, or to the #hash target); only anchor
 * links within the same page scroll smoothly. Retries briefly so targets inside
 * lazily loaded pages are found once they render.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const previousPath = useRef<string | null>(null)

  useEffect(() => {
    const routeChanged = previousPath.current !== null && previousPath.current !== pathname
    previousPath.current = pathname
    const behavior: ScrollBehavior = routeChanged ? 'instant' : 'auto'

    if (routeChanged || !hash) window.scrollTo({ top: 0, behavior: 'instant' })
    if (!hash) return

    let frame = 0
    let tries = 0
    const seek = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) { el.scrollIntoView({ behavior }); return }
      if (tries++ < 60) frame = requestAnimationFrame(seek)
    }
    seek()
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
