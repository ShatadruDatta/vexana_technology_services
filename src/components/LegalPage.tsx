import { AlertTriangle } from 'lucide-react'
import PageHero from './PageHero'
import type { LegalSection } from '@/data/legal'

/** Highlights [BRACKETED PLACEHOLDERS] so they cannot be missed before publication. */
function Highlighted({ text }: { text: string }) {
  return <>{text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith('[') ? <mark key={i} className="rounded bg-amber-100 px-1 text-amber-900">{part}</mark> : <span key={i}>{part}</span>)}</>
}

interface Props { eyebrow: string; title: string; sections: LegalSection[] }

export default function LegalPage({ eyebrow, title, sections }: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description="Last updated: [LAST UPDATED DATE]" />
      <section className="section-y bg-mist text-ink">
        <div className="container-x grid gap-12 lg:grid-cols-[16rem_1fr]">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 font-display text-xs font-semibold uppercase tracking-wider text-muted-dark">On this page</p>
            <ol className="space-y-2 text-sm">
              {sections.map((s, i) => <li key={s.id}><a className="text-muted-dark hover:text-brand-600" href={`#${s.id}`}>{i + 1}. {s.title}</a></li>)}
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p role="note" className="flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
              <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <span><strong>Draft for review.</strong> This page is a template. Highlighted placeholders must be confirmed or replaced, and the full text reviewed before this website is published.</span>
            </p>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="mt-10" aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`} className="text-2xl font-semibold">{i + 1}. {s.title}</h2>
                {s.paragraphs.map((p, j) => <p key={j} className="mt-3 text-muted-dark"><Highlighted text={p} /></p>)}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
