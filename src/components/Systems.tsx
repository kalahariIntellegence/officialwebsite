import { SYSTEM_PANELS, type SystemPanel } from '../lib/site'
import { SectionHeader } from './ui/SectionHeader'
import { Reveal } from './ui/Reveal'
import { cn } from './ui/cn'

/** 2/3 + 1/3, then reversed — architectural rhythm rather than a grid of equals. */
const SPANS: Record<string, string> = {
  'language-voice': 'lg:col-span-8',
  energy: 'lg:col-span-4',
  industry: 'lg:col-span-4',
  logistics: 'lg:col-span-8',
}

/** A quiet structural motif per panel — no two panels carry the same one. */
function PanelMotif({ id }: { id: string }) {
  const common = 'pointer-events-none absolute text-ink/[0.07]'

  if (id === 'language-voice') {
    return (
      <svg viewBox="0 0 260 120" className={cn(common, 'right-6 bottom-0 w-[220px]')} aria-hidden="true">
        {Array.from({ length: 26 }, (_, i) => {
          const h = 8 + Math.abs(Math.sin(i * 0.8)) * 62
          return (
            <rect key={i} x={i * 10} y={110 - h} width="3" height={h} rx="1.5" fill="currentColor" />
          )
        })}
      </svg>
    )
  }

  if (id === 'energy') {
    return (
      <svg viewBox="0 0 200 120" className={cn(common, 'right-5 bottom-0 w-[170px]')} aria-hidden="true">
        <path
          d="M0 100 L40 60 L80 78 L120 36 L160 58 L200 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        {[0, 40, 80, 120, 160, 200].map((x, i) => (
          <circle key={x} cx={x} cy={[100, 60, 78, 36, 58, 22][i]} r="3" fill="currentColor" />
        ))}
      </svg>
    )
  }

  if (id === 'industry') {
    return (
      <svg viewBox="0 0 200 120" className={cn(common, 'right-5 bottom-0 w-[160px]')} aria-hidden="true">
        {Array.from({ length: 5 }, (_, c) =>
          Array.from({ length: 3 }, (_, r) => (
            <rect
              key={`${c}-${r}`}
              x={c * 34}
              y={40 + r * 26}
              width="24"
              height="18"
              rx="4"
              fill="currentColor"
            />
          )),
        )}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 300 120" className={cn(common, 'right-6 bottom-0 w-[250px]')} aria-hidden="true">
      <path
        d="M0 96 C 60 96 60 40 120 40 C 180 40 180 84 240 84 C 270 84 285 70 300 62"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 8"
      />
      {[0, 120, 240].map((x, i) => (
        <circle key={x} cx={x} cy={[96, 40, 84][i]} r="5" fill="currentColor" />
      ))}
    </svg>
  )
}

function Panel({ panel, delay }: { panel: SystemPanel; delay: number }) {
  const large = panel.size === 'lg'

  return (
    <Reveal delay={delay} className={cn('min-w-0', SPANS[panel.id])}>
      <article
        className={cn(
          'card card-lift relative flex h-full flex-col justify-between overflow-hidden',
          large ? 'p-7 sm:p-10 lg:p-12' : 'p-7 sm:p-9',
        )}
      >
        <PanelMotif id={panel.id} />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-intelligence" />
            <p className="micro">{panel.label}</p>
          </div>

          <h3
            className={cn(
              'mt-6 font-medium tracking-[-0.032em]',
              large
                ? 'text-[clamp(26px,3.1vw,42px)] leading-[1.06] max-w-[18ch]'
                : 'text-[clamp(22px,2.2vw,28px)] leading-[1.1] max-w-[16ch]',
            )}
          >
            {panel.title}
          </h3>

          <p className={cn('mt-5 text-muted', large ? 'max-w-[46ch] text-[16px]' : 'text-[15px]')}>
            {panel.copy}
          </p>
        </div>

        <ul className="relative mt-10 flex flex-col gap-2.5 border-t border-line pt-6">
          {panel.points.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-[14px] text-ink/75">
              <span aria-hidden="true" className="h-px w-4 bg-line" />
              {point}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}

export function Systems() {
  return (
    <section id="systems" aria-labelledby="systems-heading" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Systems"
          title={
            <span id="systems-heading">
              Intelligence for
              <br />
              the real world.
            </span>
          }
          copy="Four system families where models, data and operations meet — each built to run inside existing infrastructure rather than beside it."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          {SYSTEM_PANELS.map((panel, i) => (
            <Panel key={panel.id} panel={panel} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}
