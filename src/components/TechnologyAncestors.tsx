import { ANCESTORS } from '../lib/site'
import { LineageGraph } from './graphics/LineageGraph'
import { Render } from './graphics/Render'
import { Reveal } from './ui/Reveal'
import { cn } from './ui/cn'

function LineageColumn({
  label,
  items,
  align,
}: {
  label: string
  items: readonly string[]
  align: 'left' | 'right'
}) {
  return (
    <div className={cn(align === 'right' && 'md:text-right')}>
      <p className="micro">{label}</p>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-center gap-2.5 text-[15px] tracking-[-0.012em] sm:text-[16px]',
              align === 'right' && 'md:flex-row-reverse',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'h-1.5 w-1.5 shrink-0 rounded-full',
                align === 'left' ? 'bg-earth' : 'bg-intelligence',
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TechnologyAncestors() {
  return (
    <section aria-labelledby="ancestors-heading" className="section">
      <div className="shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-earth" />
                <p className="eyebrow">Our philosophy</p>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h2 id="ancestors-heading" className="headline mt-6">
                Technology has
                <br />
                always had ancestors.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={130}>
            <div className="flex flex-col gap-5 text-[16px] leading-relaxed text-muted lg:pt-3">
              <p>Every system inherits a way of observing the world.</p>
              <p>
                Language, navigation, agriculture, trade, environmental knowledge and community
                systems are technologies too.
              </p>
              <p className="text-ink">
                We believe the next generation of African intelligence should understand what came
                before it.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="scene mt-14 rounded-[32px] border border-line px-5 py-9 sm:px-8 sm:py-12 lg:mt-20 lg:px-14 lg:py-16">
            <div className="grid grid-cols-2 items-center gap-x-6 gap-y-10 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.6fr)_minmax(0,0.7fr)] md:gap-x-8 lg:gap-x-12">
              <LineageColumn label="Roots" items={ANCESTORS.roots} align="left" />

              <div className="order-last col-span-2 md:order-none md:col-span-1">
                <Render
                  art="lineage"
                  alt="Inherited knowledge on the left flows through a glowing globe of Africa into engineered systems on the right."
                  fallback={<LineageGraph />}
                />
                <p className="micro mt-4 text-center">Intelligence connects them</p>
              </div>

              <LineageColumn label="Systems" items={ANCESTORS.systems} align="right" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
