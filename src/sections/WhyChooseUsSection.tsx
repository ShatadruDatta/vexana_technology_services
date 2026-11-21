import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { whyChoose } from '@/data/home'

export default function WhyChooseUsSection() {
  return (
    <section id="why-vexana" aria-labelledby="why-title" className="section-y bg-white text-ink">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal><SectionHeading id="why-title" align="left" tone="light" eyebrow="Why VEXANA" title="Why Partner With VEXANA?"
            description="We bring business strategy and technology together to create practical, scalable, and future-ready solutions." /></Reveal>
        </div>
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {whyChoose.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 0.04} className="group flex gap-5 py-6">
                <span className="font-display text-sm font-bold text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-brand">{title}</h3>
                  <p className="mt-1 text-muted-dark">{text}</p>
                </div>
                <Icon className="mt-1 hidden size-6 shrink-0 text-brand sm:block" aria-hidden="true" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
