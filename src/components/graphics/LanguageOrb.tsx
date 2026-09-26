/** Concentric language representation — rings, waveform arcs and phoneme dots. */

const PHONEMES = [
  { a: -68, r: 92 },
  { a: -24, r: 66 },
  { a: 18, r: 110 },
  { a: 62, r: 82 },
  { a: 118, r: 100 },
  { a: 156, r: 62 },
  { a: 196, r: 96 },
  { a: 238, r: 74 },
  { a: 286, r: 106 },
  { a: 322, r: 88 },
]

const polar = (angle: number, radius: number) => {
  const rad = (angle * Math.PI) / 180
  return { x: 200 + Math.cos(rad) * radius, y: 130 + Math.sin(rad) * radius }
}

export function LanguageOrb() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="lo-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0" />
          <stop offset="55%" stopColor="#4ecb7c" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="lo-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* concentric rings */}
      {[124, 100, 76, 52, 28].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="130"
          r={r}
          fill="none"
          stroke="#111411"
          strokeOpacity={0.07 + i * 0.02}
          strokeWidth="1"
          strokeDasharray={i % 2 === 1 ? '2 6' : undefined}
        />
      ))}

      {/* waveform arcs */}
      <g fill="none" strokeLinecap="round">
        <path
          d="M104 172 A 112 112 0 0 1 104 88"
          stroke="#111411"
          strokeOpacity="0.32"
          strokeWidth="1.2"
        />
        <path
          d="M296 88 A 112 112 0 0 1 296 172"
          stroke="#111411"
          strokeOpacity="0.32"
          strokeWidth="1.2"
        />
        <path
          d="M128 58 A 100 100 0 0 1 272 58"
          stroke="#A99472"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />
      </g>

      {/* travelling signal */}
      <circle
        cx="200"
        cy="130"
        r="100"
        fill="none"
        stroke="url(#lo-arc)"
        strokeWidth="2"
        className="signal-travel"
      />

      {/* radial ticks */}
      <g stroke="#111411" strokeOpacity="0.16">
        {Array.from({ length: 36 }, (_, i) => {
          const p1 = polar(i * 10, 124)
          const p2 = polar(i * 10, i % 3 === 0 ? 116 : 120)
          return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} />
        })}
      </g>

      {/* phoneme dots */}
      {PHONEMES.map((p, i) => {
        const { x, y } = polar(p.a, p.r)
        return (
          <g key={i}>
            <line
              x1="200"
              y1="130"
              x2={x}
              y2={y}
              stroke="#111411"
              strokeOpacity="0.07"
              strokeWidth="1"
            />
            <circle
              cx={x}
              cy={y}
              r={i % 4 === 0 ? 3.4 : 2.2}
              fill={i % 4 === 0 ? '#76E89C' : '#111411'}
              fillOpacity={i % 4 === 0 ? 1 : 0.42}
              className={i % 4 === 0 ? 'node-pulse' : undefined}
              style={i % 4 === 0 ? { animationDelay: `${i * 0.35}s` } : undefined}
            />
          </g>
        )
      })}

      {/* core */}
      <circle cx="200" cy="130" r="30" fill="url(#lo-core)" />
      <circle cx="200" cy="130" r="11" fill="#FBFBF8" stroke="#315B41" strokeOpacity="0.5" />
      <circle cx="200" cy="130" r="4" fill="#315B41" />
    </svg>
  )
}
