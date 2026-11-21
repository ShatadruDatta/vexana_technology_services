import { m } from 'framer-motion'
import Button from '@/components/Button'
import HeroVisual from '@/components/HeroVisual'

export default function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-title" className="bg-grid relative overflow-hidden bg-navy-950 pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute -left-40 top-0 size-[32rem] rounded-full bg-[radial-gradient(closest-side,rgba(99,91,255,0.28),transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(0,194,255,0.14),transparent)]" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />Innovating Today. Empowering Tomorrow.
          </p>
          <h1 id="hero-title" className="text-4xl font-extrabold sm:text-5xl lg:text-6xl xl:text-7xl">
            Transforming Ideas Into <span className="text-gradient">Intelligent Digital Solutions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
            VEXANA Technologies and Consulting Services empowers businesses through strategic project management, artificial intelligence, innovative software development, and digital transformation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/#services">Explore Our Services</Button>
            <Button to="/#contact" variant="secondary">Let's Talk</Button>
          </div>
        </div>
        <m.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
          <HeroVisual />
        </m.div>
      </div>
    </section>
  )
}
