import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { pillars } from '@/data/home'

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y bg-mist text-ink">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading id="about-title" align="left" tone="light" eyebrow="About VEXANA" title="Technology Meets Business Innovation"
            description="At VEXANA, we believe technology should create meaningful business impact. We combine strategic thinking, technical expertise, and innovative digital solutions to help organizations navigate challenges, improve operations, and unlock new growth opportunities." />
          <div className="mt-8"><Button to="/about">About Us</Button></div>
        </Reveal>
        <ol className="space-y-8 border-l-2 border-brand/20 pl-8">
          {pillars.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 0.1} className="relative">
                <span className="absolute -left-[3.2rem] flex size-10 items-center justify-center rounded-full bg-brand text-white ring-4 ring-mist"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-1.5 text-muted-dark">{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
