import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { navItems, type NavItem } from '@/data/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'

const hashIds = navItems.flatMap((n) => (n.hash ? [n.hash] : []))
const toLink = (n: NavItem) => ({ pathname: n.to, hash: n.hash ? `#${n.hash}` : '' })

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const activeHash = useActiveSection(hashIds, pathname === '/')

  const isActive = (n: NavItem) => {
    if (n.hash) return pathname === '/' && activeHash === n.hash
    if (n.to === '/') return pathname === '/' && !activeHash
    return pathname === n.to
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-colors duration-300', open ? 'border-b border-white/10 bg-navy-950' : scrolled ? 'border-b border-white/10 bg-navy-950/95 backdrop-blur-xl' : 'bg-transparent')}>
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between lg:h-20">
        <Link to="/" aria-label="VEXANA home"><Logo /></Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.label}>
              <Link to={toLink(n)} aria-current={isActive(n) ? 'page' : undefined}
                className={cn('relative rounded-full px-4 py-2 font-display text-sm font-medium transition-colors', isActive(n) ? 'text-white' : 'text-muted hover:text-white')}>
                {n.label}
                <span aria-hidden="true" className={cn('absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand to-accent transition-transform duration-300', isActive(n) ? 'scale-x-100' : 'scale-x-0')} />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block"><Button to="/#contact">Let's Talk</Button></div>

        <button type="button" className="-mr-2 inline-flex size-11 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div id="mobile-menu" className="overflow-hidden border-t border-white/10 lg:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
            <ul className="container-x flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-4"
              onClick={(e) => { if ((e.target as HTMLElement).closest('a')) setOpen(false) }}>
              {navItems.map((n) => (
                <li key={n.label}>
                  <Link to={toLink(n)} aria-current={isActive(n) ? 'page' : undefined}
                    className={cn('flex min-h-12 items-center rounded-lg px-3 font-display text-lg font-medium', isActive(n) ? 'bg-white/5 text-white' : 'text-muted')}>
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3"><Button to="/#contact" className="w-full">Let's Talk</Button></li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
