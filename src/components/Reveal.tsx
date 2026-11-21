import { m } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props { children: ReactNode; delay?: number; className?: string; as?: 'div' | 'li' }

/** Fades and lifts content into view once. Reduced m is handled globally by MotionConfig. */
export default function Reveal({ children, delay = 0, className, as = 'div' }: Props) {
  const Tag = as === 'li' ? m.li : m.div
  return (
    <Tag className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </Tag>
  )
}
