import { Render } from './graphics/Render'
import { Reveal } from './ui/Reveal'

const LAYERS = ['Models', 'Data', 'Systems', 'Deployment']

export function PlatformStatement() {
  return (
    <section aria-labelledby="platform-heading" className="section-tight border-y border-line bg-surface-light/60">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <h2 id="platform-heading" className="display text-[clamp(38px,6.4vw,84px)]">
                Build intelligence.
                <br />
                Not just software.
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <p className="lede mt-8 max-w-[56ch] text-[17px]">
                Our work sits below the interface — models, data systems and intelligent
                infrastructure designed to become building blocks for African products and
                industries.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="lg:border-l lg:border-line lg:pl-10">
              <div className="mx-auto mb-8 w-full max-w-[260px] lg:mb-10 lg:max-w-[300px]">
                <Render
                  art="sphere"
                  alt=""
                  decorative
                  className="drift"
                />
              </div>

              <ul>
                {LAYERS.map((layer, i) => (
                  <li
                    key={layer}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-4 last:border-b-0"
                  >
                    <span className="text-[17px] font-medium tracking-[-0.022em]">{layer}</span>
                    <span className="micro">{String(i + 1).padStart(2, '0')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
