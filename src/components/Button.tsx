import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
interface ButtonProps {
  children: ReactNode
  variant?: Variant
  to?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const base = 'inline-flex min-h-11 whitespace-nowrap items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold transition-colors duration-200 disabled:opacity-60'
const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white shadow-glow hover:bg-brand-600',
  secondary: 'border border-white/20 text-white hover:border-accent hover:text-accent',
  ghost: 'text-accent hover:text-white',
}

/** Renders a router Link, anchor or button depending on props. */
export default function Button({ children, variant = 'primary', to, href, type = 'button', onClick, className, disabled }: ButtonProps) {
  const cls = cn(base, variants[variant], className)
  const tap = { whileTap: { scale: 0.97 } }
  const wrap = className?.includes('w-full') ? 'flex w-full' : 'inline-flex'
  if (to) return <m.span {...tap} className={wrap}><Link to={to} className={cls}>{children}</Link></m.span>
  if (href) return <m.span {...tap} className={wrap}><a href={href} className={cls}>{children}</a></m.span>
  return <m.button {...tap} type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</m.button>
}
