import { useEffect, useState } from 'react'

/** Scroll-spy: returns the id of the section currently crossing the upper part of the viewport. */
export function useActiveSection(ids: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join('|')

  useEffect(() => {
    if (!enabled) { setActive(null); return }
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)))
        setActive(ids.find((id) => visible.has(id)) ?? null)
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled])

  return active
}
