import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../lib/scroll'
import { Reveal } from './ui/Reveal'

export function CompanyStatement() {
  return (
    <section
      aria-labelledby="statement-heading"
      className="relative overflow-hidden bg-night text-ivory"
    >
      {/* faint structural grid + one green horizon line */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
          <defs>
            <linearGradient id="cs-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#76E89C" stopOpacity="0" />
              <stop offset="50%" stopColor="#76E89C" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#76E89C" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="#EEF0EA" strokeOpacity="0.05">
            {Array.from({ length: 12 }, (_, i) => (
              <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="600" />
            ))}
          </g>
          <path
            d="M0 470 C 220 452 360 486 600 470 C 840 454 980 484 1200 466"
            fill="none"
            stroke="url(#cs-line)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="section relative">
        <div className="shell">
          <div className="max-w-[900px]">
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-intelligence" />
                <p className="eyebrow text-ivory/55">Company</p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="statement-heading"
                className="mt-8 text-[clamp(34px,5.2vw,72px)] leading-[1.04] font-medium tracking-[-0.038em]"
              >
                Africa should not only
                <br />
                use intelligence.
                <br />
                <span className="text-intelligence">It should build it.</span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-9 max-w-[54ch] text-[17px] leading-relaxed text-ivory/65">
                Kalahari Intelligence exists to help build the models, systems and technical
                capability required for an intelligent African economy.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="group mt-11 inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-ivory/20 bg-ivory/[0.06] px-6 py-3 text-[15px] font-medium text-ivory transition-colors hover:border-intelligence/50 hover:bg-ivory/10"
              >
                Work with us
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
