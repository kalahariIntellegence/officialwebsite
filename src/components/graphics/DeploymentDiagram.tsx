/** Cloud → private → local → edge, linked by one thin intelligence line. */

const STOPS = [
  { x: 120, label: 'CLOUD' },
  { x: 340, label: 'PRIVATE' },
  { x: 560, label: 'LOCAL' },
  { x: 780, label: 'EDGE' },
]

const Y = 96

export function DeploymentDiagram() {
  return (
    <svg
      viewBox="0 0 900 200"
      className="h-auto w-full"
      role="img"
      aria-label="Deployment line connecting cloud, private, local and edge environments."
    >
      <defs>
        <linearGradient id="dd-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0" />
          <stop offset="50%" stopColor="#4ecb7c" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </linearGradient>
      </defs>

      <line x1="60" y1={Y} x2="840" y2={Y} stroke="#111411" strokeOpacity="0.16" strokeWidth="1" />
      <line
        x1="60"
        y1={Y}
        x2="840"
        y2={Y}
        stroke="url(#dd-line)"
        strokeWidth="2"
        className="signal-travel"
      />

      {STOPS.map((s, i) => (
        <g key={s.label}>
          {/* scale indicator: shrinking footprint from cloud to edge */}
          <rect
            x={s.x - (44 - i * 8)}
            y={Y - (26 - i * 4)}
            width={(44 - i * 8) * 2}
            height={(26 - i * 4) * 2}
            rx="14"
            fill="#FBFBF8"
            stroke="#111411"
            strokeOpacity="0.12"
          />
          <circle
            cx={s.x}
            cy={Y}
            r={i === 3 ? 4 : 5}
            fill={i === 3 ? '#76E89C' : '#111411'}
            fillOpacity={i === 3 ? 1 : 0.45}
            className={i === 3 ? 'node-pulse' : undefined}
          />
          <text
            x={s.x}
            y={Y + 54}
            textAnchor="middle"
            fill="#111411"
            fontSize="12"
            fontWeight="500"
            letterSpacing="1.6"
          >
            {s.label}
          </text>
          <line
            x1={s.x}
            y1={Y + 30}
            x2={s.x}
            y2={Y + 38}
            stroke="#111411"
            strokeOpacity="0.16"
          />
        </g>
      ))}

      <text x="60" y="34" fill="#72766F" fontSize="9" letterSpacing="1.6">
        SCALE
      </text>
      <text x="840" y="34" textAnchor="end" fill="#72766F" fontSize="9" letterSpacing="1.6">
        PROXIMITY
      </text>
    </svg>
  )
}
