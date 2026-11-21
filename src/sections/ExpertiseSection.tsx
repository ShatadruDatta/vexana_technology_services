import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { expertise } from '@/data/home'

export default function ExpertiseSection() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="bg-grid section-y bg-navy-900">
      <div className="container-x">
        <SectionHeading id="expertise-title" eyebrow="Our Expertise" title="Technology. Strategy. Transformation."
          description="Core capabilities across technology, delivery and growth, brought together for each engagement." />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={(i % 4) * 0.06} className="group bg-navy-900 p-7 transition-colors hover:bg-brand/10">
                <Icon className="size-7 text-accent" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
