import { TRUST_AREAS } from '../lib/site'
import { Reveal } from './ui/Reveal'

export function TrustStrip() {
  return (
    <section aria-label="Areas of application" className="border-y border-line bg-surface-light/70">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:gap-12 lg:py-7">
            <p className="micro shrink-0 lg:w-[120px]">Building for</p>

            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-10 lg:gap-x-12">
              {TRUST_AREAS.map((area) => (
                <li
                  key={area}
                  className="text-[15px] font-medium tracking-[-0.018em] text-ink/75 sm:text-[16px]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
