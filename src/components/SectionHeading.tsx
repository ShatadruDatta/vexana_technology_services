import { cn } from '@/lib/cn'

interface Props { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center'; tone?: 'dark' | 'light'; as?: 'h1' | 'h2'; id?: string }

export default function SectionHeading({ eyebrow, title, description, align = 'center', tone = 'dark', as: Tag = 'h2', id }: Props) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && <p className={cn('mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em]', tone === 'dark' ? 'text-accent' : 'text-brand-600')}>{eyebrow}</p>}
      <Tag id={id} className={cn('text-3xl font-semibold sm:text-4xl lg:text-5xl', tone === 'dark' ? 'text-white' : 'text-ink')}>{title}</Tag>
      {description && <p className={cn('mt-5 text-base sm:text-lg', tone === 'dark' ? 'text-muted' : 'text-muted-dark')}>{description}</p>}
    </div>
  )
}
