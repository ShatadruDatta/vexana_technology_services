import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { m } from 'framer-motion'
import type { Service } from '@/data/services'
import { cn } from '@/lib/cn'

interface Props { service: Service; className?: string; maxCapabilities?: number }

export default function ServiceCard({ service, className, maxCapabilities = 4 }: Props) {
  const { icon: Icon, title, description, capabilities, id } = service
  return (
    <m.article whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
      className={cn('group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900 p-6 transition-colors hover:border-brand/60', className)}>
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/15 text-highlight transition-colors group-hover:bg-brand group-hover:text-white">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <ul className="mt-4 space-y-1.5">
        {capabilities.slice(0, maxCapabilities).map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-muted">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />{c}
          </li>
        ))}
      </ul>
      <Link to={{ pathname: '/services', hash: `#${id}` }} className="mt-auto inline-flex items-center gap-1.5 pt-6 font-display text-sm font-semibold text-accent hover:text-white">
        Learn More<span className="sr-only"> about {title}</span><ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </m.article>
  )
}
