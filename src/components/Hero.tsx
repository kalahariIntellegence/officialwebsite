import { AcaciaNetwork } from './graphics/AcaciaNetwork'
import { Render } from './graphics/Render'
import { ArrowButton } from './ui/ArrowButton'
import { Reveal } from './ui/Reveal'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-10 pb-16 sm:pt-16 lg:pt-20 lg:pb-24"
    >
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-16">
          {/* Message */}
          <div className="max-w-[640px]">
            <Reveal>
              <p className="eyebrow">African intelligence systems</p>
            </Reveal>

            <Reveal delay={90}>
              <h1 id="hero-heading" className="display mt-6">
                Ancient wisdom.
                <br />
                <span className="text-muted/85">Future systems.</span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-7 flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-intelligence-dark/40" />
                <p className="micro">An African AI &amp; intelligence company</p>
              </div>
            </Reveal>

            <Reveal delay={230}>
              <p className="lede mt-6 max-w-[48ch] text-[17px] sm:text-[19px]">
                We build language, voice, energy and automation intelligence designed around
                African environments, data and realities.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ArrowButton target="technology" size="lg">
                  Explore our technology
                </ArrowButton>
                <ArrowButton target="research" variant="secondary" size="lg">
                  Research
                </ArrowButton>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={200} className="lg:pl-4">
            <figure className="scene relative m-0 overflow-hidden rounded-[28px] border border-line">
              {/* micro labels frame the art as a technical diagram */}
              <figcaption className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-7">
                <span className="micro">Intelligence tree</span>
                <span className="micro">Language · Energy · Systems</span>
              </figcaption>

              <div className="px-4 pt-12 pb-8 sm:px-8 sm:pb-10">
                <Render
                  art="acacia"
                  alt="An acacia tree whose roots and branches carry luminous data pathways, with floating panels showing a map of Africa, a speech waveform and system readouts."
                  eager
                  fallback={<AcaciaNetwork />}
                />
              </div>

              {/* ground line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-[68px] h-px bg-gradient-to-r from-transparent via-ink/12 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-line/80 px-5 py-3 sm:px-7">
                <span className="micro">Roots</span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-intelligence" />
                <span className="micro">Future systems</span>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
