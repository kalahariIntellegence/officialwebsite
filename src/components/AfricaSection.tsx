import { KalahariHorizon } from './graphics/KalahariHorizon'
import { Render } from './graphics/Render'
import { Reveal } from './ui/Reveal'

export function AfricaSection() {
  return (
    <section
      id="company"
      aria-labelledby="rooted-heading"
      className="relative overflow-hidden border-y border-line bg-surface-light"
    >
      <div className="section-tight relative">
        <div className="shell">
          <div className="max-w-[720px]">
            <Reveal>
              <h2 id="rooted-heading" className="display text-[clamp(52px,9vw,116px)]">
                Rooted here.
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <p className="lede mt-7 max-w-[52ch] text-[17px] sm:text-[20px]">
                Designed from African languages, environments and systems — not retrofitted onto
                them.
              </p>
            </Reveal>
          </div>

          {/* landscape */}
          <Reveal delay={140}>
            <div className="relative mt-12 lg:mt-16">
              <Render
                art="landscape"
                alt="Pale Kalahari dunes with acacia trees and rocky outcrops, a line of green light tracing a path through the sand."
                fallback={<KalahariHorizon />}
                className="mx-auto w-full max-w-[1200px]"
              />
            </div>
          </Reveal>

          {/* three-part philosophy line */}
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3 lg:mt-16">
            {[
              { k: 'Nature', v: 'gives us systems.' },
              { k: 'Culture', v: 'gives us meaning.' },
              { k: 'Technology', v: 'gives us scale.' },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 70}>
                <p className="text-[17px] tracking-[-0.022em]">
                  <span className="font-medium">{item.k}</span>{' '}
                  <span className="text-muted">{item.v}</span>
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={210}>
            <p className="mt-8 text-[17px] tracking-[-0.022em]">
              <span className="font-medium text-intelligence-dark">Intelligence</span>{' '}
              <span className="text-muted">connects them.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
