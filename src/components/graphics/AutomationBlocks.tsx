/** Stacked modular cube system — operations composed of interchangeable units. */

type Cube = { cx: number; cy: number; accent?: boolean; faded?: boolean }

const W = 42
const H = 24

const CUBES: Cube[] = [
  { cx: 200, cy: 196 },
  { cx: 156, cy: 172 },
  { cx: 244, cy: 172 },
  { cx: 200, cy: 148, accent: true },
  { cx: 112, cy: 148, faded: true },
  { cx: 288, cy: 148, faded: true },
  { cx: 156, cy: 124 },
  { cx: 244, cy: 124 },
  { cx: 200, cy: 100 },
]

function cubePath(cx: number, cy: number) {
  const top = `M${cx} ${cy - H} L${cx + W} ${cy} L${cx} ${cy + H} L${cx - W} ${cy} Z`
  const left = `M${cx - W} ${cy} L${cx} ${cy + H} L${cx} ${cy + H + 26} L${cx - W} ${cy + 26} Z`
  const right = `M${cx + W} ${cy} L${cx} ${cy + H} L${cx} ${cy + H + 26} L${cx + W} ${cy + 26} Z`
  return { top, left, right }
}

export function AutomationBlocks() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" aria-hidden="true">
      {/* isometric base plane */}
      <g stroke="#111411" strokeOpacity="0.07">
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`a${i}`} x1={114 + i * 38} y1={244 - i * 22} x2={286 + i * 38} y2={146 - i * 22} />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <line key={`b${i}`} x1={286 - i * 38} y1={244 - i * 22} x2={114 - i * 38} y2={146 - i * 22} />
        ))}
      </g>

      {CUBES.map((c, i) => {
        const { top, left, right } = cubePath(c.cx, c.cy)
        const o = c.faded ? 0.35 : 1
        return (
          <g key={i} opacity={o}>
            <path d={left} fill="#111411" fillOpacity="0.1" stroke="#111411" strokeOpacity="0.2" />
            <path d={right} fill="#111411" fillOpacity="0.16" stroke="#111411" strokeOpacity="0.2" />
            <path
              d={top}
              fill={c.accent ? '#76E89C' : '#FBFBF8'}
              fillOpacity={c.accent ? 0.85 : 1}
              stroke={c.accent ? '#315B41' : '#111411'}
              strokeOpacity={c.accent ? 0.45 : 0.24}
            />
            {c.accent && (
              <circle
                cx={c.cx}
                cy={c.cy}
                r="5"
                fill="#315B41"
                fillOpacity="0.8"
                className="node-pulse"
              />
            )}
          </g>
        )
      })}

      {/* dashed connective routing */}
      <g
        fill="none"
        stroke="#111411"
        strokeOpacity="0.28"
        strokeWidth="1"
        strokeDasharray="3 5"
      >
        <path d="M200 76 L200 44 L322 44" />
        <path d="M322 44 L322 96" />
      </g>
      <circle cx="322" cy="100" r="3.2" fill="#76E89C" />
      <text x="336" y="48" fill="#72766F" fontSize="9" letterSpacing="1.4">
        AGENT
      </text>

      <text x="40" y="60" fill="#72766F" fontSize="9" letterSpacing="1.4">
        OPERATIONS
      </text>
      <line x1="40" y1="70" x2="112" y2="70" stroke="#111411" strokeOpacity="0.12" />
    </svg>
  )
}
