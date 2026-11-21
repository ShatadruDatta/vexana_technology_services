import { m } from 'framer-motion'

const nodes = [
  { cx: 60, cy: 120, r: 5, c: '#00C2FF' }, { cx: 340, cy: 80, r: 4, c: '#A78BFA' },
  { cx: 370, cy: 260, r: 6, c: '#635BFF' }, { cx: 90, cy: 330, r: 4, c: '#00C2FF' }, { cx: 230, cy: 380, r: 5, c: '#A78BFA' },
]

/** Abstract CSS/SVG technology visual: orbit rings, network nodes and the V mark. */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[26rem] lg:max-w-[32rem]" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(99,91,255,0.4),transparent)]" />
      <svg viewBox="0 0 420 420" className="relative size-full">
        <defs>
          <linearGradient id="hv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#635BFF" /><stop offset="1" stopColor="#00C2FF" /></linearGradient>
        </defs>
        {[190, 140, 90].map((r, i) => (
          <circle key={r} cx="210" cy="210" r={r} fill="none" stroke="url(#hv)" strokeOpacity={0.22 + i * 0.1} strokeDasharray={i === 1 ? '4 8' : undefined} />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <line x1={n.cx} y1={n.cy} x2="210" y2="210" stroke={n.c} strokeOpacity="0.25" />
            <m.circle cx={n.cx} cy={n.cy} r={n.r} fill={n.c} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3 + i * 0.6, repeat: Infinity }} />
          </g>
        ))}
        <m.g style={{ originX: '210px', originY: '210px' }} animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
          <circle cx="210" cy="20" r="7" fill="#00C2FF" /><circle cx="210" cy="350" r="5" fill="#A78BFA" />
        </m.g>
        <rect x="150" y="150" width="120" height="120" rx="30" fill="#111A2E" stroke="url(#hv)" strokeWidth="1.5" />
        <path d="M180 185l30 55 30-55" fill="none" stroke="url(#hv)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M197 185l22 22" stroke="#fff" strokeWidth="7" strokeLinecap="round" opacity=".9" />
      </svg>
    </div>
  )
}
