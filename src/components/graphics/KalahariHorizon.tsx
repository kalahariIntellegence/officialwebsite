type KalahariHorizonProps = {
  /** `full` adds the acacia silhouette and the sub-surface network. */
  variant?: 'full' | 'minimal'
  className?: string
}

/**
 * A very pale Kalahari landscape: layered dunes, a single acacia silhouette
 * and an abstract intelligence line running beneath the land.
 */
export function KalahariHorizon({ variant = 'full', className }: KalahariHorizonProps) {
  return (
    <svg
      viewBox="0 0 1200 420"
      className={className ?? 'h-auto w-full'}
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label="Pale Kalahari landscape with layered dunes, a single acacia silhouette and a network line running beneath the ground."
    >
      <defs>
        <linearGradient id="kh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBFBF8" />
          <stop offset="100%" stopColor="#F3F2EC" />
        </linearGradient>
        <linearGradient id="kh-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDEAE0" />
          <stop offset="100%" stopColor="#F1EFE7" />
        </linearGradient>
        <linearGradient id="kh-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E6E0D0" />
          <stop offset="100%" stopColor="#EAE6D9" />
        </linearGradient>
        <linearGradient id="kh-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#DED5BF" />
          <stop offset="100%" stopColor="#E4DCCA" />
        </linearGradient>
        <linearGradient id="kh-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#76E89C" stopOpacity="0" />
          <stop offset="45%" stopColor="#4ecb7c" />
          <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="1200" height="420" fill="url(#kh-sky)" />

      {/* sun disc — a faint circle, not a graphic cliché */}
      <circle cx="884" cy="118" r="52" fill="#EFE9DA" />
      <circle
        cx="884"
        cy="118"
        r="52"
        fill="none"
        stroke="#A99472"
        strokeOpacity="0.22"
        strokeDasharray="2 8"
      />

      {/* far dune */}
      <path
        d="M0 262 C 160 240 262 258 386 250 C 520 241 612 224 742 236 C 884 249 1002 240 1200 250 L1200 420 L0 420 Z"
        fill="url(#kh-far)"
      />
      {/* mid dune */}
      <path
        d="M0 300 C 148 282 246 304 372 300 C 532 295 660 272 812 288 C 960 303 1064 296 1200 288 L1200 420 L0 420 Z"
        fill="url(#kh-mid)"
      />
      {/* near dune */}
      <path
        d="M0 348 C 180 334 322 356 470 350 C 664 342 788 322 940 336 C 1060 347 1130 344 1200 338 L1200 420 L0 420 Z"
        fill="url(#kh-near)"
      />

      {/* horizon rules */}
      <g stroke="#111411" strokeOpacity="0.07">
        <path
          d="M0 262 C 160 240 262 258 386 250 C 520 241 612 224 742 236 C 884 249 1002 240 1200 250"
          fill="none"
        />
        <path
          d="M0 300 C 148 282 246 304 372 300 C 532 295 660 272 812 288 C 960 303 1064 296 1200 288"
          fill="none"
        />
      </g>

      {variant === 'full' && (
        <>
          {/* acacia silhouette */}
          <g fill="none" stroke="#111411" strokeOpacity="0.62" strokeLinecap="round">
            <path d="M318 350 C 316 322 320 300 321 288" strokeWidth="2.4" />
            <path d="M321 290 C 300 278 272 268 248 252" strokeWidth="1.4" />
            <path d="M321 290 C 342 278 372 268 396 252" strokeWidth="1.4" />
            <path d="M321 290 C 320 274 321 262 322 248" strokeWidth="1.2" />
            <path d="M270 262 C 268 250 270 242 274 234" strokeWidth="0.9" />
            <path d="M372 262 C 374 250 372 242 368 234" strokeWidth="0.9" />
          </g>
          {/* flat canopy */}
          <path
            d="M228 246 C 250 226 288 214 322 214 C 358 214 396 226 416 246 C 388 240 350 236 322 236 C 292 236 256 240 228 246 Z"
            fill="#111411"
            fillOpacity="0.68"
          />
          <circle cx="322" cy="222" r="3.2" fill="#76E89C" />

          {/* sub-surface intelligence network */}
          <g>
            <path
              d="M-20 392 C 180 372 300 404 470 392 C 660 379 800 404 980 392 C 1080 385 1150 388 1220 382"
              fill="none"
              stroke="#111411"
              strokeOpacity="0.14"
              strokeDasharray="3 7"
            />
            <path
              d="M-20 392 C 180 372 300 404 470 392 C 660 379 800 404 980 392 C 1080 385 1150 388 1220 382"
              fill="none"
              stroke="url(#kh-flow)"
              strokeWidth="2"
              className="signal-travel"
            />
            {[
              [170, 380],
              [470, 392],
              [742, 386],
              [980, 392],
            ].map(([x, y]) => (
              <g key={x}>
                <circle cx={x} cy={y} r="3" fill="#76E89C" className="node-pulse" />
                <line
                  x1={x}
                  y1={y}
                  x2={x}
                  y2={y - 26}
                  stroke="#111411"
                  strokeOpacity="0.12"
                  strokeDasharray="2 4"
                />
              </g>
            ))}
          </g>
        </>
      )}
    </svg>
  )
}
