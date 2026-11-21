import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import { siteConfig } from '@/config/siteConfig'
import { company } from '@/data/company'
import { legalLinks, navItems } from '@/data/navigation'
import { services } from '@/data/services'

const socials = [
  ['LinkedIn', siteConfig.social.linkedin],
  ['Facebook', siteConfig.social.facebook],
  ['Instagram', siteConfig.social.instagram],
  ['YouTube', siteConfig.social.youtube],
].filter(([, url]) => url)

const heading = 'font-display text-sm font-semibold uppercase tracking-wider text-white'
const linkCls = 'inline-block py-1.5 text-sm text-muted transition-colors hover:text-white'

export default function Footer() {
  const { email, phone, address } = siteConfig.contact
  return (
    <footer className="border-t border-white/10 bg-navy-900">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Logo />
          <p className="mt-4 font-display text-sm font-semibold text-white">{siteConfig.legalName}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">{company.footerBlurb}</p>
          {socials.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Social media">
              {socials.map(([label, url]) => (
                <li key={label}><a href={url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent">{label}</a></li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Quick links">
          <h2 className={heading}>Quick Links</h2>
          <ul className="mt-3 space-y-0.5">
            {navItems.map((n) => <li key={n.label}><Link className={linkCls} to={{ pathname: n.to, hash: n.hash ? `#${n.hash}` : '' }}>{n.label}</Link></li>)}
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h2 className={heading}>Our Services</h2>
          <ul className="mt-3 space-y-0.5">
            {services.map((s) => <li key={s.id}><Link className={linkCls} to={{ pathname: '/services', hash: `#${s.id}` }}>{s.shortName}</Link></li>)}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" /><span><span className="block text-xs uppercase tracking-wider text-muted/70">Business Email</span><a className="inline-block break-all py-1 hover:text-white" href={`mailto:${email}`}>{email}</a></span></li>
            <li className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" /><span><span className="block text-xs uppercase tracking-wider text-muted/70">Phone</span>{phone ? <a className="hover:text-white" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a> : <span className="italic">[ADD BUSINESS PHONE]</span>}</span></li>
            <li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" /><span><span className="block text-xs uppercase tracking-wider text-muted/70">Address</span>{address ? address : <span className="italic">[ADD BUSINESS ADDRESS]</span>}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {siteConfig.year} {siteConfig.legalName}. All Rights Reserved.</p>
          <ul className="flex gap-5">
            {legalLinks.map((l) => <li key={l.to}><Link className="inline-block py-1.5 hover:text-white" to={l.to}>{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
    </footer>
  )
}
