import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import Button from '@/components/Button'
import { services } from '@/data/services'
import { cn } from '@/lib/cn'

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y bg-navy-950">
      <div className="container-x">
        <SectionHeading id="services-title" eyebrow="Our Services" title="Comprehensive Services. Intelligent Solutions."
          description="From strategic project execution to next-generation AI solutions, we provide integrated technology and consulting services that help businesses move forward." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 0.07} className={cn('md:last:col-span-2 xl:last:col-span-4', i < 4 ? 'xl:col-span-3' : 'xl:col-span-4')}>
              <ServiceCard service={s} maxCapabilities={i < 4 ? 3 : 4} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center"><Button to="/services" variant="secondary">View All Services</Button></div>
      </div>
    </section>
  )
}
