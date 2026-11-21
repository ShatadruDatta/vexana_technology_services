import { siteConfig } from '@/config/siteConfig'

export interface ContactValues { name: string; email: string; company: string; service: string; subject: string; message: string }
export type ContactErrors = Partial<Record<keyof ContactValues, string>>

export const emptyContact: ContactValues = { name: '', email: '', company: '', service: '', subject: '', message: '' }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateField(field: keyof ContactValues, value: string): string | undefined {
  const v = value.trim()
  switch (field) {
    case 'name': return v ? (v.length < 2 ? 'Please enter your full name.' : undefined) : 'Full name is required.'
    case 'email': return v ? (EMAIL_RE.test(v) ? undefined : 'Please enter a valid email address, e.g. name@company.com.') : 'Business email is required.'
    case 'service': return v ? undefined : 'Please select a service.'
    case 'subject': return v ? undefined : 'Subject is required.'
    case 'message': return v ? (v.length < 10 ? 'Please add a little more detail (at least 10 characters).' : undefined) : 'Message is required.'
    default: return undefined
  }
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  ;(Object.keys(values) as Array<keyof ContactValues>).forEach((k) => {
    const e = validateField(k, values[k])
    if (e) errors[k] = e
  })
  return errors
}

const bodyText = (v: ContactValues) =>
  `Name: ${v.name.trim()}\nEmail: ${v.email.trim()}\nCompany: ${v.company.trim() || '-'}\nService interested in: ${v.service}\n\n${v.message.trim()}`

/** Builds a mailto: URL addressed to the configured contact email. */
export function buildMailto(v: ContactValues): string {
  const subject = `[Website Enquiry] ${v.subject.trim()}`
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText(v))}`
}

/** POSTs to the configured external endpoint (Formspree-style JSON). Throws on failure. */
export async function submitToEndpoint(v: ContactValues): Promise<void> {
  const res = await fetch(siteConfig.contact.formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ name: v.name.trim(), email: v.email.trim(), company: v.company.trim(), service: v.service, subject: v.subject.trim(), message: v.message.trim() }),
  })
  if (!res.ok) throw new Error(`Form endpoint responded with ${res.status}`)
}
