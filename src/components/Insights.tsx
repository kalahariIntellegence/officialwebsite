import { ArrowUpRight } from 'lucide-react'
import { INSIGHTS, type Insight } from '../lib/site'
import { Reveal } from './ui/Reveal'
import { scrollToSection } from '../lib/scroll'

/** Each card gets a different abstract header so the row is not three clones. */
function CardArt({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true" preserveAspectRatio="none">
        {Array.from({ length: 40 }, (_, i) => (
          <rect
            key={i}
            x={8 + i * 8}
            y={60 - Math.abs(Math.sin(i * 0.55)) * 44}
            width="2.5"
            height={Math.abs(Math.sin(i * 0.55)) * 88 || 3}
            rx="1.25"
            fill={i % 9 === 4 ? '#76E89C' : '#111411'}
            fillOpacity={i % 9 === 4 ? 0.9 : 0.16}
          />
        ))}
      </svg>
    )
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true" preserveAspectRatio="none">
        {[44, 30, 18, 10].map((r, i) => (
          <circle
            key={r}
            cx={70 + i * 62}
            cy="60"
            r={r}
            fill="none"
            stroke={i === 3 ? '#76E89C' : '#111411'}
            strokeOpacity={i === 3 ? 0.9 : 0.2}
            strokeWidth="1.2"
          />
        ))}
        <line x1="26" y1="60" x2="300" y2="60" stroke="#111411" strokeOpacity="0.1" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true" preserveAspectRatio="none">
      <g stroke="#111411" strokeOpacity="0.14">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={i} x1={16 + i * 36} y1="12" x2={16 + i * 36} y2="108" />
        ))}
      </g>
      <path
        d="M16 92 C 80 92 80 40 160 40 C 240 40 240 76 304 66"
        fill="none"
        stroke="#76E89C"
        strokeWidth="2"
      />
      <circle cx="160" cy="40" r="4" fill="#315B41" />
    </svg>
  )
}

function InsightCard({ insight, index }: { insight: Insight; index: number }) {
  return (
    <article className="card card-lift flex h-full flex-col">
      <div className="scene h-[120px] border-b border-line">
        <CardArt index={index} />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="micro text-intelligence-dark">{insight.kind}</span>
          <span aria-hidden="true" className="h-3 w-px bg-line" />
          <span className="micro">{insight.readingTime}</span>
        </div>

        <h3 className="text-[19px] leading-snug font-medium tracking-[-0.026em]">
          {insight.title}
        </h3>

        <p className="text-[14.5px] leading-relaxed text-muted">{insight.copy}</p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[13.5px] font-medium text-ink">
          Read
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={1.7} />
        </span>
      </div>
    </article>
  )
}

export function Insights() {
  return (
    <section aria-labelledby="insights-heading" className="section-tight">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <p className="eyebrow">Insights</p>
              <h2 id="insights-heading" className="headline mt-5 text-[clamp(30px,3.6vw,48px)]">
                Latest thinking.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="micro">Sample editorial content</p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {INSIGHTS.map((insight, i) => (
            <Reveal key={insight.title} delay={i * 70} className="min-w-0">
              <button
                type="button"
                onClick={() => scrollToSection('research')}
                className="h-full w-full text-left"
              >
                <InsightCard insight={insight} index={i} />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
