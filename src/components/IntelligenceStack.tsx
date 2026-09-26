import { STACK_APPLICATIONS, STACK_LAYERS } from '../lib/site'
import { Render } from './graphics/Render'
import { Reveal } from './ui/Reveal'

export function IntelligenceStack() {
  return (
    <section
      aria-labelledby="stack-heading"
      className="section-tight border-y border-line bg-surface-light/60"
    >
      <div className="shell">
        <Reveal>
          <p className="eyebrow">African language intelligence stack</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          {/* layer ladder */}
          <div>
            <Reveal>
              <h2 id="stack-heading" className="subhead max-w-[22ch]">
                From audio to applications, in one path.
              </h2>
            </Reveal>

            <ol className="mt-9">
              {STACK_LAYERS.map((layer, i) => (
                <Reveal key={layer.label} delay={i * 60}>
                  <li className="relative pb-5 pl-9 last:pb-0">
                    {/* connector */}
                    {i < STACK_LAYERS.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-4 bottom-0 left-[9px] w-px bg-gradient-to-b from-intelligence-dark/30 to-line"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute top-[7px] left-0 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-line bg-white"
                    >
                      <span className="h-[7px] w-[7px] rounded-full bg-intelligence" />
                    </span>

                    <div className="card rounded-[18px] px-5 py-3.5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <span className="text-[16px] font-medium tracking-[-0.022em]">
                          {layer.label}
                        </span>
                        <span className="micro">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <p className="mt-1 text-[13.5px] text-muted">{layer.detail}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* art + applications */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col">
              <div className="scene flex flex-1 items-center justify-center rounded-[28px] border border-line px-6 py-8">
                <div className="w-full max-w-[300px]">
                  <Render
                    art="stack"
                    alt="Four stacked translucent planes connected by a vertical green axis, each plane carrying a different data surface."
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="micro">Applications</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {STACK_APPLICATIONS.map((app) => (
                    <li
                      key={app}
                      className="rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[13px] text-ink/80"
                    >
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
