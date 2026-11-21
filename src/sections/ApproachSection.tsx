import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { approach } from '@/data/home'

export default function ApproachSection() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="section-y bg-mist text-ink">
      <div className="container-x">
        <SectionHeading id="approach-title" tone="light" eyebrow="Our Approach" title="Turning Challenges Into Opportunities" />
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <span className="absolute left-[1.35rem] top-2 h-[calc(100%-1rem)] w-px bg-brand/25 lg:left-[12%] lg:right-[12%] lg:top-[1.35rem] lg:h-px lg:w-auto" aria-hidden="true" />
          {approach.map(({ n, title, text, icon: Icon }, i) => (
            <Reveal as="li" key={n} delay={i * 0.1} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-white ring-4 ring-mist"><Icon className="size-5" aria-hidden="true" /></span>
                <div>
                  <p className="font-display text-xs font-bold tracking-widest text-brand-600">STEP {n}</p>
                  <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-muted-dark">{text}</p>
                </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
