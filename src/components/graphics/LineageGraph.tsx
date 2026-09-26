import { ANCESTORS } from '../../lib/site'

/**
 * Knowledge lineage: inherited ways of observing the world on the left,
 * a single intelligence node in the middle, engineered systems on the right.
 * Reads simultaneously as roots, neural pathways and a river system.
 */

const LEFT_X = 108
const RIGHT_X = 892
const CENTER = { x: 500, y: 220 }
const TOP = 62
const GAP = 63

const rowY = (i: number) => TOP + i * GAP

export function LineageGraph() {
  const rootCount = ANCESTORS.roots.length
  const systemCount = ANCESTORS.systems.length

  return (
    <svg
      viewBox="0 0 1000 440"
      className="h-auto w-full"
      role="img"
      aria-label="Lineage diagram: roots of language, land, memory, observation, community and craft branch into a central intelligence node, then out into language AI, voice, energy, automation, logistics and infrastructure."
    >
      <defs>
        <radialGradient id="lg-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lg-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0" />
          <stop offset="50%" stopColor="#4ecb7c" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* incoming branches */}
      <g fill="none" stroke="#111411" strokeOpacity="0.26" strokeWidth="1">
        {ANCESTORS.roots.map((label, i) => {
          const y = rowY(i)
          const x0 = LEFT_X + 10
          return (
            <path
              key={label}
              d={`M${x0} ${y} C ${x0 + 170} ${y} ${CENTER.x - 190} ${CENTER.y} ${CENTER.x - 42} ${CENTER.y}`}
            />
          )
        })}
      </g>

      {/* outgoing branches */}
      <g fill="none" stroke="#111411" strokeOpacity="0.26" strokeWidth="1">
        {ANCESTORS.systems.map((label, i) => {
          const y = rowY(i)
          const x1 = RIGHT_X - 10
          return (
            <path
              key={label}
              d={`M${CENTER.x + 42} ${CENTER.y} C ${CENTER.x + 190} ${CENTER.y} ${x1 - 170} ${y} ${x1} ${y}`}
            />
          )
        })}
      </g>

      {/* animated signals through the middle */}
      <path
        d={`M${LEFT_X + 10} ${rowY(0)} C ${LEFT_X + 180} ${rowY(0)} ${CENTER.x - 190} ${CENTER.y} ${CENTER.x - 42} ${CENTER.y}`}
        fill="none"
        stroke="url(#lg-flow)"
        strokeWidth="2"
        className="signal-travel"
      />
      <path
        d={`M${CENTER.x + 42} ${CENTER.y} C ${CENTER.x + 190} ${CENTER.y} ${RIGHT_X - 180} ${rowY(4)} ${RIGHT_X - 10} ${rowY(4)}`}
        fill="none"
        stroke="url(#lg-flow)"
        strokeWidth="2"
        className="signal-travel"
        style={{ animationDelay: '2.5s' }}
      />

      {/* left column */}
      <g>
        <text x={LEFT_X - 82} y={TOP - 34} fill="#72766F" fontSize="10" letterSpacing="1.8">
          ROOTS
        </text>
        <line
          x1={LEFT_X - 82}
          y1={TOP - 24}
          x2={LEFT_X + 10}
          y2={TOP - 24}
          stroke="#111411"
          strokeOpacity="0.14"
        />
        {ANCESTORS.roots.map((label, i) => {
          const y = rowY(i)
          return (
            <g key={label}>
              <text
                x={LEFT_X - 8}
                y={y + 4}
                textAnchor="end"
                fill="#111411"
                fontSize="15"
                fontWeight="400"
              >
                {label}
              </text>
              <circle cx={LEFT_X + 10} cy={y} r="3.2" fill="#A99472" />
            </g>
          )
        })}
      </g>

      {/* centre node */}
      <g>
        <circle cx={CENTER.x} cy={CENTER.y} r="96" fill="url(#lg-core)" className="node-pulse" />
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="52"
          fill="none"
          stroke="#315B41"
          strokeOpacity="0.28"
          strokeDasharray="3 7"
          className="ring-rotate"
        />
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="40"
          fill="#FBFBF8"
          stroke="#315B41"
          strokeOpacity="0.5"
        />
        <circle cx={CENTER.x} cy={CENTER.y} r="13" fill="#76E89C" />
        <circle cx={CENTER.x} cy={CENTER.y} r="5" fill="#315B41" />
        <text
          x={CENTER.x}
          y={CENTER.y + 82}
          textAnchor="middle"
          fill="#72766F"
          fontSize="10"
          letterSpacing="1.8"
        >
          INTELLIGENCE
        </text>
      </g>

      {/* right column */}
      <g>
        <text x={RIGHT_X + 82} y={TOP - 34} textAnchor="end" fill="#72766F" fontSize="10" letterSpacing="1.8">
          SYSTEMS
        </text>
        <line
          x1={RIGHT_X - 10}
          y1={TOP - 24}
          x2={RIGHT_X + 82}
          y2={TOP - 24}
          stroke="#111411"
          strokeOpacity="0.14"
        />
        {ANCESTORS.systems.map((label, i) => {
          const y = rowY(i)
          return (
            <g key={label}>
              <circle cx={RIGHT_X - 10} cy={y} r="3.2" fill="#76E89C" />
              <text x={RIGHT_X + 8} y={y + 4} fill="#111411" fontSize="15" fontWeight="400">
                {label}
              </text>
            </g>
          )
        })}
      </g>

      <text x="16" y="424" fill="#72766F" fontSize="9" letterSpacing="1.4">
        {rootCount} INHERITED SYSTEMS
      </text>
      <text x="984" y="424" textAnchor="end" fill="#72766F" fontSize="9" letterSpacing="1.4">
        {systemCount} ENGINEERED SYSTEMS
      </text>
    </svg>
  )
}
