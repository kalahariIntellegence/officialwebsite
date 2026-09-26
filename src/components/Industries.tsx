import { useState } from 'react'
import { Plus } from 'lucide-react'
import { INDUSTRIES } from '../lib/site'
import { Render } from './graphics/Render'
import { SectionHeader } from './ui/SectionHeader'
import { Reveal } from './ui/Reveal'
import { cn } from './ui/cn'

export function Industries() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section aria-labelledby="industries-heading" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Industries"
          title={
            <span id="industries-heading">
              Built for systems
              <br />
              that move society.
            </span>
          }
          copy="The same intelligence layer, shaped to the operating reality of each sector."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:gap-16">
          {/* accordion */}
          <div className="border-t border-line">
            {INDUSTRIES.map((industry, i) => {
              const isOpen = open === i
              return (
                <Reveal key={industry.name} delay={i * 40}>
                  <div className="border-b border-line">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        aria-controls={`industry-panel-${i}`}
                        id={`industry-trigger-${i}`}
                        className="group flex min-h-[64px] w-full items-center justify-between gap-6 py-4 text-left"
                      >
                        <span className="flex items-baseline gap-4 sm:gap-6">
                          <span className="micro w-5 shrink-0 tabular-nums">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={cn(
                              'text-[19px] font-medium tracking-[-0.028em] transition-colors sm:text-[23px]',
                              isOpen ? 'text-ink' : 'text-ink/70 group-hover:text-ink',
                            )}
                          >
                            {industry.name}
                          </span>
                        </span>

                        <span
                          aria-hidden="true"
                          className={cn(
                            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                            isOpen
                              ? 'rotate-45 border-intelligence-dark/30 bg-[#eaf9ef]'
                              : 'border-line bg-white/60 group-hover:border-[#c9cbc2]',
                          )}
                        >
                          <Plus
                            className={cn(
                              'h-4 w-4',
                              isOpen ? 'text-intelligence-dark' : 'text-muted',
                            )}
                            strokeWidth={1.5}
                          />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={`industry-panel-${i}`}
                      role="region"
                      aria-labelledby={`industry-trigger-${i}`}
                      hidden={!isOpen}
                      className="pb-6 sm:pl-[52px]"
                    >
                      <ul className="flex flex-wrap gap-x-2.5 gap-y-2">
                        {industry.applications.map((app) => (
                          <li
                            key={app}
                            className="rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[13.5px] text-ink/80"
                          >
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* art */}
          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28">
              <div className="scene flex items-center justify-center rounded-[28px] border border-line px-6 py-10">
                <div className="w-full max-w-[280px]">
                  <Render
                    art="globe"
                    alt="A translucent globe showing the African continent in luminous green, encircled by orbiting nodes."
                    className="drift"
                  />
                </div>
              </div>

              <p className="mt-6 max-w-[38ch] text-[14.5px] leading-relaxed text-muted">
                One intelligence layer, deployed into the sectors that carry daily life —
                communication, power, movement, money and learning.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
