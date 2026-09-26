import { KalahariHorizon } from './graphics/KalahariHorizon'
import { ArrowButton } from './ui/ArrowButton'
import { Reveal } from './ui/Reveal'

export function FinalCTA() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="relative overflow-hidden">
      <div className="shell relative z-10 pt-[clamp(72px,9vw,140px)] pb-[clamp(150px,18vw,260px)]">
        <div className="max-w-[760px]">
          <Reveal>
            <p className="eyebrow">Start here</p>
          </Reveal>

          <Reveal delay={80}>
            <h2 id="cta-heading" className="display mt-7 text-[clamp(40px,7.4vw,96px)]">
              From the Kalahari
              <br />
              to the future.
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="lede mt-7 text-[18px]">Build with African intelligence.</p>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <ArrowButton target="contact" size="lg">
                Start a conversation
              </ArrowButton>
              <ArrowButton target="research" variant="secondary" size="lg">
                Explore research
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* minimal horizon under the CTA */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(140px,20vw,260px)]"
      >
        <KalahariHorizon variant="minimal" className="h-full w-full" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      </div>
    </section>
  )
}
