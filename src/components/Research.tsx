import { RESEARCH_AREAS, type ResearchArea, type ResearchStatus } from '../lib/site'
import { SectionHeader } from './ui/SectionHeader'
import { Reveal } from './ui/Reveal'
import { Tag } from './ui/Tag'
import { cn } from './ui/cn'

const SPAN: Record<ResearchArea['span'], string> = {
  wide: 'lg:col-span-3',
  half: 'lg:col-span-3',
  third: 'lg:col-span-2',
}

const STATUS_TONE: Record<ResearchStatus, 'green' | 'sand' | 'neutral'> = {
  Research: 'green',
  'In development': 'sand',
  Experimental: 'neutral',
}

/** Small technical ornament so the research cards are not plain text blocks. */
function CardGlyph({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 64 40" className="h-10 w-16" aria-hidden="true">
      {Array.from({ length: 8 }, (_, c) =>
        Array.from({ length: 5 }, (_, r) => {
          const on = (c * 5 + r + index * 3) % 7 < 2
          return (
            <rect
              key={`${c}-${r}`}
              x={c * 8}
              y={r * 8}
              width="4"
              height="4"
              rx="1"
              fill={on ? '#76E89C' : '#111411'}
              fillOpacity={on ? 0.9 : 0.14}
            />
          )
        }),
      )}
    </svg>
  )
}

export function Research() {
  return (
    <section id="research" aria-labelledby="research-heading" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Research"
          title={
            <span id="research-heading">
              Models built around
              <br />
              African data.
            </span>
          }
          copy="We research multilingual language models, speech systems, translation, efficient adaptation and smaller models designed for local and edge deployment."
          aside={
            <p className="text-[13px] text-muted/80">
              Work below is active research and engineering direction, not shipped product.
            </p>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-6 lg:gap-6">
          {RESEARCH_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={i * 60} className={cn('min-w-0', SPAN[area.span])}>
              <article className="card card-lift flex h-full flex-col gap-5 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="micro">{String(i + 1).padStart(2, '0')}</span>
                  <CardGlyph index={i} />
                </div>

                <h3 className="text-[21px] leading-tight font-medium tracking-[-0.026em]">
                  {area.title}
                </h3>

                <p className="text-[14.5px] leading-relaxed text-muted">{area.copy}</p>

                <div className="mt-auto pt-2">
                  <Tag tone={STATUS_TONE[area.status]}>{area.status}</Tag>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
