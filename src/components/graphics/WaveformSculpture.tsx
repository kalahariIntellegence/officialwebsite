/** Minimal waveform sculpture — a spoken utterance rendered as a standing object. */

const BARS = Array.from({ length: 48 }, (_, i) => {
  const envelope = Math.sin((i / 47) * Math.PI) ** 0.7
  const detail =
    0.42 + 0.58 * Math.abs(Math.sin(i * 0.72) * 0.6 + Math.sin(i * 0.23) * 0.4)
  return Math.max(4, envelope * detail * 96)
})

export function WaveformSculpture() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="wf-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#111411" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#111411" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* baseline plate */}
      <line x1="24" y1="186" x2="376" y2="186" stroke="#111411" strokeOpacity="0.16" />
      <line x1="24" y1="192" x2="376" y2="192" stroke="#111411" strokeOpacity="0.06" />

      {/* frequency guides */}
      <g stroke="#111411" strokeOpacity="0.05">
        {[70, 100, 130, 160].map((y) => (
          <line key={y} x1="24" y1={y} x2="376" y2={y} />
        ))}
      </g>

      {BARS.map((h, i) => {
        const x = 26 + i * 7.2
        const accent = i === 21 || i === 22 || i === 23
        return (
          <g key={i}>
            <rect
              x={x}
              y={186 - h}
              width="3"
              height={h}
              rx="1.5"
              fill={accent ? '#76E89C' : 'url(#wf-bar)'}
            />
            {/* mirrored reflection */}
            <rect
              x={x}
              y={192}
              width="3"
              height={h * 0.22}
              rx="1.5"
              fill="#111411"
              fillOpacity="0.07"
            />
          </g>
        )
      })}

      {/* segmentation markers */}
      <g>
        {[74, 158, 242, 326].map((x, i) => (
          <g key={x}>
            <line
              x1={x}
              y1="52"
              x2={x}
              y2="186"
              stroke="#111411"
              strokeOpacity="0.1"
              strokeDasharray="2 5"
            />
            <circle cx={x} cy="52" r="2.4" fill="#A99472" fillOpacity={0.5 + i * 0.1} />
          </g>
        ))}
      </g>

      <text x="26" y="216" fill="#72766F" fontSize="9" letterSpacing="1.4">
        UTTERANCE
      </text>
      <text x="376" y="216" textAnchor="end" fill="#72766F" fontSize="9" letterSpacing="1.4">
        TOKENS · 4
      </text>
    </svg>
  )
}
