import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'
import { siteConfig } from '@/config/siteConfig'

export default function ContactSection() {
  const { email, phone, address } = siteConfig.contact
  const rows = [
    { icon: Mail, label: 'Email', value: email, href: `mailto:${email}` },
    phone && { icon: Phone, label: 'Phone', value: phone, href: `tel:${phone.replace(/\s/g, '')}` },
    address && { icon: MapPin, label: 'Address', value: address },
  ].filter(Boolean) as Array<{ icon: typeof Mail; label: string; value: string; href?: string }>

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y bg-mist text-ink">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading id="contact-title" align="left" tone="light" eyebrow="Contact Us" title="Let's Talk About Your Next Project."
            description="Whether you are looking for technology consulting, software development, AI solutions, or digital growth, we would love to hear from you." />
          <ul className="mt-10 space-y-5">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand/10 text-brand-600"><Icon className="size-5" aria-hidden="true" /></span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-dark">{label}</p>
                  {href ? <a href={href} className="break-all font-medium hover:text-brand-600">{value}</a> : <p className="font-medium">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </div>
    </section>
  )
}
