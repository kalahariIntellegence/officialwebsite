/** Architectural grid of distributed energy nodes with one flowing intelligence line. */

const NODES = [
  { x: 76, y: 92, k: 'gen' },
  { x: 160, y: 64, k: 'node' },
  { x: 160, y: 148, k: 'node' },
  { x: 248, y: 104, k: 'hub' },
  { x: 330, y: 68, k: 'node' },
  { x: 330, y: 150, k: 'gen' },
  { x: 76, y: 176, k: 'node' },
  { x: 248, y: 190, k: 'node' },
]

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [6, 2],
  [2, 7],
  [7, 5],
]

export function EnergyGrid() {
  return (
    <svg viewBox="0 0 400 260" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="eg-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0" />
          <stop offset="50%" stopColor="#4ecb7c" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* grid field */}
      <g stroke="#111411" strokeOpacity="0.05">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={34 + i * 42} y1="28" x2={34 + i * 42} y2="212" />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line key={`h${i}`} x1="34" y1={28 + i * 46} x2="370" y2={28 + i * 46} />
        ))}
      </g>

      {/* edges */}
      <g stroke="#111411" strokeOpacity="0.24" strokeWidth="1">
        {EDGES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
          />
        ))}
      </g>

      {/* flowing intelligence line */}
      <path
        d="M76 92 L160 64 L248 104 L330 150"
        fill="none"
        stroke="url(#eg-flow)"
        strokeWidth="2"
        strokeLinejoin="round"
        className="signal-travel"
      />

      {/* nodes */}
      {NODES.map((n, i) => {
        if (n.k === 'hub') {
          return (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="16" fill="#76E89C" fillOpacity="0.14" />
              <rect
                x={n.x - 9}
                y={n.y - 9}
                width="18"
                height="18"
                rx="5"
                fill="#FBFBF8"
                stroke="#315B41"
                strokeOpacity="0.55"
              />
              <circle cx={n.x} cy={n.y} r="3.4" fill="#315B41" />
            </g>
          )
        }
        if (n.k === 'gen') {
          return (
            <g key={i}>
              <circle
                cx={n.x}
                cy={n.y}
                r="10"
                fill="#76E89C"
                fillOpacity="0.16"
                className="node-pulse"
                style={{ animationDelay: `${i * 0.8}s` }}
              />
              <circle cx={n.x} cy={n.y} r="4.6" fill="#76E89C" />
            </g>
          )
        }
        return (
          <rect
            key={i}
            x={n.x - 4}
            y={n.y - 4}
            width="8"
            height="8"
            rx="2"
            fill="#111411"
            fillOpacity="0.45"
          />
        )
      })}

      {/* load profile strip */}
      <g>
        <line x1="34" y1="232" x2="370" y2="232" stroke="#111411" strokeOpacity="0.12" />
        <path
          d="M34 232 C 70 222 82 208 112 210 C 146 212 158 196 190 190 C 226 184 240 204 272 206 C 306 208 330 194 370 198"
          fill="none"
          stroke="#A99472"
          strokeOpacity="0.7"
          strokeWidth="1.2"
        />
      </g>
      <text x="34" y="250" fill="#72766F" fontSize="9" letterSpacing="1.4">
        FORECAST HORIZON
      </text>
    </svg>
  )
}
