import { cn } from '@/lib/cn'

interface LogoProps { variant?: 'dark' | 'light'; className?: string; showWordmark?: boolean }

/** Text-based VEXANA logo with a V/X geometric mark. Swap the SVG for an official asset later. */
export default function Logo({ variant = 'dark', className, showWordmark = true }: LogoProps) {
  const id = `vx-${variant}`
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)} aria-label="VEXANA">
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#635BFF" />
            <stop offset="1" stopColor="#00C2FF" />
          </linearGradient>
        </defs>
        <path d="M5 6l11 20L27 6" fill="none" stroke={`url(#${id})`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 6l10 10" stroke={variant === 'dark' ? '#fff' : '#172033'} strokeWidth="3" strokeLinecap="round" opacity=".9" />
      </svg>
      {showWordmark && (
        <span className={cn('font-display text-xl font-extrabold tracking-[0.18em]', variant === 'dark' ? 'text-white' : 'text-ink')}>
          VEXANA
        </span>
      )}
    </span>
  )
}
