/**
 * Hero visual — "the intelligence tree".
 * An acacia-inspired branching system drawn as a technical diagram:
 * half natural structure, half machine-learning architecture.
 */

type CanopyNode = {
  id: string
  label: string
  x: number
  y: number
  /** Branch path from the trunk fork to this node. */
  d: string
  r: number
}

const FORK = { x: 320, y: 322 }

const NODES: CanopyNode[] = [
  {
    id: 'language',
    label: 'LANGUAGE',
    x: 148,
    y: 214,
    r: 6.5,
    d: 'M320 322 C 292 306 236 296 196 268 C 175 253 158 232 148 214',
  },
  {
    id: 'voice',
    label: 'VOICE',
    x: 238,
    y: 168,
    r: 5,
    d: 'M320 322 C 308 288 276 226 238 168',
  },
  {
    id: 'knowledge',
    label: 'KNOWLEDGE',
    x: 330,
    y: 142,
    r: 7.5,
    d: 'M320 322 C 319 272 323 200 330 142',
  },
  {
    id: 'energy',
    label: 'ENERGY',
    x: 420,
    y: 172,
    r: 5,
    d: 'M320 322 C 334 288 380 228 420 172',
  },
  {
    id: 'systems',
    label: 'SYSTEMS',
    x: 506,
    y: 218,
    r: 6.5,
    d: 'M320 322 C 350 306 408 294 452 266 C 478 249 496 232 506 218',
  },
]

/** Thin secondary twigs — structural texture, no labels. */
const TWIGS = [
  'M196 268 C 202 246 200 228 192 208',
  'M262 214 C 268 196 266 182 258 166',
  'M290 240 C 284 220 286 202 296 186',
  'M362 214 C 372 198 376 182 372 166',
  'M452 266 C 450 244 454 228 464 212',
  'M396 208 C 404 192 404 178 398 164',
]

/** Lateral connections across the canopy — the "architecture" reading. */
const LINKS = [
  'M148 214 C 190 188 206 178 238 168',
  'M238 168 C 272 150 300 142 330 142',
  'M330 142 C 364 144 392 156 420 172',
  'M420 172 C 456 188 482 202 506 218',
  'M148 214 C 236 250 414 250 506 218',
]

const ROOTS = [
  'M318 432 C 310 452 288 462 258 470',
  'M320 432 C 322 456 340 468 372 476',
  'M319 432 C 316 458 306 472 296 486',
]

export function AcaciaNetwork() {
  return (
    <svg
      viewBox="0 0 640 540"
      className="h-auto w-full"
      role="img"
      aria-label="Abstract acacia-shaped intelligence network: branches rising from a single trunk into labelled nodes for language, voice, knowledge, energy and systems."
    >
      <defs>
        <linearGradient id="ac-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FCFCFA" />
          <stop offset="72%" stopColor="#F5F5F0" />
          <stop offset="100%" stopColor="#F0EFEA" />
        </linearGradient>
        <linearGradient id="ac-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4DBC8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#E9E6DC" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="ac-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ac-signal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0" />
          <stop offset="50%" stopColor="#4ecb7c" stopOpacity="1" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </linearGradient>
        <clipPath id="ac-frame">
          <rect x="0" y="0" width="640" height="540" rx="28" />
        </clipPath>
      </defs>

      <g clipPath="url(#ac-frame)">
        <rect x="0" y="0" width="640" height="540" fill="url(#ac-sky)" />

        {/* faint measurement grid */}
        <g stroke="#111411" strokeOpacity="0.035" strokeWidth="1">
          {[80, 160, 240, 320, 400, 480, 560].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="540" />
          ))}
          {[100, 200, 300, 400].map((y) => (
            <line key={y} x1="0" y1={y} x2="640" y2={y} />
          ))}
        </g>

        {/* Kalahari horizon + distant dune */}
        <path
          d="M0 398 C 120 386 206 404 318 396 C 432 388 520 402 640 392 L640 432 L0 432 Z"
          fill="#F2F0E9"
        />
        <path
          d="M0 398 C 120 386 206 404 318 396 C 432 388 520 402 640 392"
          stroke="#111411"
          strokeOpacity="0.09"
          strokeWidth="1"
          fill="none"
        />

        {/* ground plane */}
        <rect x="0" y="432" width="640" height="108" fill="url(#ac-ground)" />
        <line x1="0" y1="432" x2="640" y2="432" stroke="#111411" strokeOpacity="0.16" strokeWidth="1" />
        <ellipse cx="320" cy="434" rx="118" ry="7" fill="#C9B894" fillOpacity="0.32" />

        {/* ground ruling */}
        <g stroke="#111411" strokeOpacity="0.05" strokeWidth="1">
          {[452, 474, 500, 530].map((y, i) => (
            <line key={y} x1={-40 + i * 12} y1={y} x2={680 - i * 12} y2={y} />
          ))}
        </g>

        {/* roots */}
        <g fill="none" stroke="#111411" strokeOpacity="0.2" strokeWidth="1" strokeLinecap="round">
          {ROOTS.map((d) => (
            <path key={d} d={d} strokeDasharray="2 5" />
          ))}
        </g>

        {/* lateral network links */}
        <g fill="none" stroke="#111411" strokeOpacity="0.12" strokeWidth="1">
          {LINKS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>

        {/* travelling signal along the canopy */}
        <path
          d="M148 214 C 236 250 414 250 506 218"
          fill="none"
          stroke="url(#ac-signal)"
          strokeWidth="2"
          strokeLinecap="round"
          className="signal-travel"
        />

        {/* twigs */}
        <g fill="none" stroke="#111411" strokeOpacity="0.28" strokeWidth="0.9" strokeLinecap="round">
          {TWIGS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>

        {/* trunk */}
        <path
          d="M314 434 C 313 396 316 358 318 336 L322 336 C 324 358 327 396 326 434 Z"
          fill="#111411"
          fillOpacity="0.82"
        />

        {/* primary branches */}
        <g fill="none" stroke="#111411" strokeOpacity="0.72" strokeLinecap="round">
          {NODES.map((n, i) => (
            <path key={n.id} d={n.d} strokeWidth={i === 2 ? 1.8 : 1.4} />
          ))}
        </g>

        {/* fork marker */}
        <circle cx={FORK.x} cy={FORK.y} r="3" fill="#111411" fillOpacity="0.5" />

        {/* canopy nodes */}
        {NODES.map((n, i) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r * 3.4}
              fill="url(#ac-glow)"
              className="node-pulse"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
            <circle cx={n.x} cy={n.y} r={n.r} fill="#76E89C" />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r + 4}
              fill="none"
              stroke="#315B41"
              strokeOpacity="0.35"
              strokeWidth="0.9"
            />
            <line
              x1={n.x}
              y1={n.y - n.r - 9}
              x2={n.x}
              y2={n.y - n.r - 17}
              stroke="#111411"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
            <text
              x={n.x}
              y={n.y - n.r - 23}
              textAnchor="middle"
              fill="#72766F"
              fontSize="9"
              letterSpacing="1.4"
              fontWeight="500"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* floating data panels */}
        <g className="drift">
          <rect
            x="34"
            y="74"
            width="164"
            height="58"
            rx="12"
            fill="#FFFFFF"
            fillOpacity="0.82"
            stroke="#111411"
            strokeOpacity="0.1"
          />
          <text x="50" y="96" fill="#72766F" fontSize="8.5" letterSpacing="1.5">
            INTELLIGENCE LAYER
          </text>
          <line x1="50" y1="104" x2="182" y2="104" stroke="#111411" strokeOpacity="0.08" />
          <text x="50" y="121" fill="#111411" fontSize="12" fontWeight="500" letterSpacing="-0.2">
            5 connected systems
          </text>
        </g>

        <g className="drift" style={{ animationDelay: '2.4s' }}>
          <rect
            x="438"
            y="306"
            width="168"
            height="66"
            rx="12"
            fill="#FFFFFF"
            fillOpacity="0.82"
            stroke="#111411"
            strokeOpacity="0.1"
          />
          <text x="454" y="328" fill="#72766F" fontSize="8.5" letterSpacing="1.5">
            SIGNAL
          </text>
          <g>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
              const h = 6 + Math.abs(Math.sin(i * 1.1)) * 20
              return (
                <rect
                  key={i}
                  x={454 + i * 12}
                  y={356 - h}
                  width="3"
                  height={h}
                  rx="1.5"
                  fill={i === 5 || i === 6 ? '#76E89C' : '#111411'}
                  fillOpacity={i === 5 || i === 6 ? 0.9 : 0.22}
                />
              )
            })}
          </g>
        </g>

        {/* corner ticks */}
        <g stroke="#111411" strokeOpacity="0.18" strokeWidth="1">
          <path d="M28 44 h16 M28 44 v16" fill="none" />
          <path d="M612 496 h-16 M612 496 v-16" fill="none" />
        </g>
      </g>

      <rect
        x="0.5"
        y="0.5"
        width="639"
        height="539"
        rx="28"
        fill="none"
        stroke="#111411"
        strokeOpacity="0.1"
      />
    </svg>
  )
}
