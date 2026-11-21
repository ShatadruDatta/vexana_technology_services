import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import Button from './Button'
import { siteConfig } from '@/config/siteConfig'
import { serviceFormOptions } from '@/data/services'
import { buildMailto, emptyContact, submitToEndpoint, validateContact, validateField, type ContactErrors, type ContactValues } from '@/lib/contact'
import { cn } from '@/lib/cn'

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'mailto' } | { kind: 'sent' } | { kind: 'error' }

const control = 'block w-full rounded-lg border bg-white px-4 py-3 text-base text-ink placeholder:text-ink/55 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30'

interface FieldProps { id: keyof ContactValues; label: string; required?: boolean; error?: string; children: ReactNode; className?: string }
function Field({ id, label, required, error, children, className }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}{required ? <span className="text-red-600" aria-hidden="true"> *</span> : <span className="font-normal text-muted-dark"> (optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700"><AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />{error}</p>}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyContact)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const formRef = useRef<HTMLFormElement>(null)
  const useEndpoint = Boolean(siteConfig.contact.formEndpoint)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const id = e.target.name as keyof ContactValues
    setValues((v) => ({ ...v, [id]: e.target.value }))
    if (errors[id]) setErrors((er) => ({ ...er, [id]: validateField(id, e.target.value) }))
  }
  const onBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const id = e.target.name as keyof ContactValues
    setErrors((er) => ({ ...er, [id]: validateField(id, e.target.value) }))
  }
  const props = (id: keyof ContactValues) => ({
    id, name: id, value: values[id], onChange, onBlur,
    'aria-invalid': errors[id] ? true : undefined,
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
    className: cn(control, errors[id] ? 'border-red-500' : 'border-ink/15'),
  })

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validateContact(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) { setStatus({ kind: 'idle' }); formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus(); return }

    if (useEndpoint) {
      setStatus({ kind: 'sending' })
      try { await submitToEndpoint(values); setStatus({ kind: 'sent' }); setValues(emptyContact) }
      catch { setStatus({ kind: 'error' }) }
    } else {
      setStatus({ kind: 'mailto' })
      window.location.href = buildMailto(values)
    }
  }

  const errorCount = Object.values(errors).filter(Boolean).length

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full Name" required error={errors.name}><input {...props('name')} type="text" autoComplete="name" placeholder="Jane Doe" /></Field>
        <Field id="email" label="Business Email" required error={errors.email}><input {...props('email')} type="email" autoComplete="email" placeholder="jane@company.com" /></Field>
        <Field id="company" label="Company Name" error={errors.company}><input {...props('company')} type="text" autoComplete="organization" placeholder="Your company" /></Field>
        <Field id="service" label="Service Interested In" required error={errors.service}>
          <select {...props('service')}>
            <option value="">Select a service…</option>
            {serviceFormOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="subject" label="Subject" required error={errors.subject} className="sm:col-span-2"><input {...props('subject')} type="text" placeholder="How can we help?" /></Field>
        <Field id="message" label="Message" required error={errors.message} className="sm:col-span-2"><textarea {...props('message')} rows={5} placeholder="Tell us about your project or challenge." /></Field>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status.kind === 'sending'} className="w-full shrink-0 sm:w-auto">
          {status.kind === 'sending' ? <><Loader2 className="size-4 animate-spin" aria-hidden="true" />Sending…</> : <><Send className="size-4" aria-hidden="true" />Send Message</>}
        </Button>
        <p className="text-sm text-muted-dark">
          {useEndpoint ? 'Your message is sent securely to our team.' : 'This opens your email app with the message pre-filled, ready to send.'}
        </p>
      </div>

      <div aria-live="polite" className="mt-5 empty:hidden">
        {errorCount > 0 && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">Please fix {errorCount} {errorCount === 1 ? 'field' : 'fields'} above and try again.</p>}
        {status.kind === 'mailto' && (
          <p className="flex gap-2 rounded-lg bg-brand/10 px-4 py-3 text-sm text-ink">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
            <span>Your email app should now be open with your message. Nothing is sent until you press send there. If nothing opened, email us directly at <a className="font-semibold underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</span>
          </p>
        )}
        {status.kind === 'sent' && <p className="flex gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-900"><CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />Thank you. Your message has been sent and we will be in touch soon.</p>}
        {status.kind === 'error' && (
          <p role="alert" className="flex gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>Sorry, your message could not be sent. Please try again, or email us at <a className="font-semibold underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</span>
          </p>
        )}
      </div>
    </form>
  )
}
