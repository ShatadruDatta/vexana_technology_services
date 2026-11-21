import Button from '@/components/Button'
import Reveal from '@/components/Reveal'

export default function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="section-y relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(99,91,255,0.35),transparent)]" aria-hidden="true" />
      <Reveal className="container-x relative text-center">
        <h2 id="cta-title" className="mx-auto max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">Let's Build Something <span className="text-gradient">Exceptional</span> Together.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">Have a business challenge or an innovative idea? Let's explore how VEXANA can help you transform it into reality.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/#contact">Start a Conversation</Button>
          <Button to="/#services" variant="secondary">Explore Our Services</Button>
        </div>
      </Reveal>
    </section>
  )
}
