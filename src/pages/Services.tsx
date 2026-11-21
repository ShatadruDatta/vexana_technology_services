import { Check } from 'lucide-react'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Button from '@/components/Button'
import CTASection from '@/sections/CTASection'
import { services } from '@/data/services'
import { cn } from '@/lib/cn'

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Comprehensive Services. Intelligent Solutions."
        description="From strategic project execution to next-generation AI solutions, we provide integrated technology and consulting services that help businesses move forward.">
        <ul className="flex flex-wrap gap-2" aria-label="Jump to a service">
          {services.map((s) => <li key={s.id}><a href={`#${s.id}`} className="inline-block rounded-full border border-white/15 px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent">{s.shortName}</a></li>)}
        </ul>
      </PageHero>

      {services.map(({ id, title, description, capabilities, icon: Icon }, i) => {
        const light = i % 2 === 0
        return (
          <section key={id} id={id} aria-labelledby={`${id}-title`} className={cn('section-y', light ? 'bg-mist text-ink' : 'bg-navy-950 text-white')}>
            <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <span className={cn('inline-flex size-14 items-center justify-center rounded-2xl', light ? 'bg-brand text-white' : 'bg-brand/15 text-highlight')}><Icon className="size-7" aria-hidden="true" /></span>
                <h2 id={`${id}-title`} className="mt-6 text-3xl font-semibold sm:text-4xl">{title}</h2>
                <p className={cn('mt-4 text-lg', light ? 'text-muted-dark' : 'text-muted')}>{description}</p>
                <div className="mt-7"><Button to="/#contact" variant={light ? 'primary' : 'secondary'}>Discuss This Service</Button></div>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className={cn('font-display text-sm font-semibold uppercase tracking-wider', light ? 'text-brand-600' : 'text-accent')}>Key capabilities</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {capabilities.map((c) => (
                    <li key={c} className={cn('flex items-start gap-3 rounded-xl p-4', light ? 'bg-white shadow-sm' : 'border border-white/10 bg-navy-900')}>
                      <Check className={cn('mt-0.5 size-4 shrink-0', light ? 'text-brand' : 'text-accent')} aria-hidden="true" />{c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )
      })}
      <CTASection />
    </>
  )
}
