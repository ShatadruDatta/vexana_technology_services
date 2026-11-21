import { ArrowRight, Eye, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/sections/CTASection'
import { company } from '@/data/company'
import { pillars } from '@/data/home'
import { services } from '@/data/services'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Technology Meets Business Innovation"
        description="At VEXANA, we believe technology should create meaningful business impact. We combine strategic thinking, technical expertise, and innovative digital solutions to help organizations navigate challenges, improve operations, and unlock new growth opportunities." />

      <section aria-labelledby="mv-title" className="section-y bg-mist text-ink">
        <div className="container-x">
          <h2 id="mv-title" className="sr-only">Mission and Vision</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[{ icon: Target, label: 'Our Mission', text: company.mission }, { icon: Eye, label: 'Our Vision', text: company.vision }].map(({ icon: Icon, label, text }, i) => (
              <Reveal key={label} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand text-white"><Icon className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-5 text-2xl font-semibold">{label}</h3>
                  <p className="mt-3 text-lg text-muted-dark">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="values-title" className="bg-grid section-y bg-navy-900">
        <div className="container-x">
          <SectionHeading id="values-title" eyebrow="Core Values" title="The Principles Behind Our Work" />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {company.values.map((v, i) => (
              <Reveal as="li" key={v} delay={(i % 3) * 0.06} className="bg-navy-900 p-7">
                <span className="font-display text-sm font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl font-semibold">{v}</h3>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="section-y bg-white text-ink">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading id="philosophy-title" align="left" tone="light" eyebrow="Business Philosophy" title="Strategy and Technology, Working Together"
              description="We believe the best results come when business strategy and technology are planned together. Every engagement begins with understanding your objectives, so the solutions we recommend are practical, scalable and aligned with where your organization wants to go." />
          </Reveal>
          <ol className="space-y-8 border-l-2 border-brand/20 pl-8">
            {pillars.map(({ title, text, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={i * 0.1} className="relative">
                <span className="absolute -left-[3.2rem] flex size-10 items-center justify-center rounded-full bg-brand text-white ring-4 ring-white"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-1.5 text-muted-dark">{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="overview-title" className="section-y bg-mist text-ink">
        <div className="container-x">
          <SectionHeading id="overview-title" tone="light" eyebrow="Service Overview" title="What We Offer"
            description="An integrated portfolio spanning project delivery, artificial intelligence, software, learning and growth." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ id, title, icon: Icon }) => (
              <li key={id}>
                <Link to={{ pathname: '/services', hash: `#${id}` }} className="group flex h-full items-center gap-4 rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                  <Icon className="size-6 shrink-0 text-brand" aria-hidden="true" />
                  <span className="flex-1 font-display font-semibold">{title}</span>
                  <ArrowRight className="size-4 text-muted-dark transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  )
}
