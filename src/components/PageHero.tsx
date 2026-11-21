import { m } from 'framer-motion'
import type { ReactNode } from 'react'
import SectionHeading from './SectionHeading'

interface Props { eyebrow: string; title: string; description?: string; children?: ReactNode }

/** Dark page header used at the top of every inner page. */
export default function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="bg-grid relative overflow-hidden bg-navy-950 pb-16 pt-32 lg:pb-24 lg:pt-44">
      <div className="pointer-events-none absolute -right-32 -top-20 size-[26rem] rounded-full bg-[radial-gradient(closest-side,rgba(99,91,255,0.3),transparent)]" aria-hidden="true" />
      <m.div className="container-x relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <SectionHeading as="h1" align="left" eyebrow={eyebrow} title={title} description={description} />
        {children && <div className="mt-8">{children}</div>}
      </m.div>
    </section>
  )
}
