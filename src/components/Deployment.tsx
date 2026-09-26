import { DEPLOYMENT_DRIVERS, DEPLOYMENT_TARGETS } from '../lib/site'
import { DeploymentDiagram } from './graphics/DeploymentDiagram'
import { Reveal } from './ui/Reveal'

export function Deployment() {
  return (
    <section aria-labelledby="deployment-heading" className="section">
      <div className="shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-intelligence-dark/70" />
                <p className="eyebrow">Deployment</p>
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h2 id="deployment-heading" className="headline mt-6">
                Built close to
                <br />
                where intelligence
                <br />
                happens.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={130}>
            <div className="lg:pt-4">
              <p className="text-[19px] leading-snug font-medium tracking-[-0.026em]">
                Cloud when it makes sense.
                <br />
                <span className="text-muted">Local when it matters.</span>
              </p>

              <p className="lede mt-6 max-w-[46ch]">
                We design systems that can operate across cloud, private environments, local
                infrastructure and edge devices — because cost, connectivity, privacy, latency and
                resilience differ across the continent.
              </p>

              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                {DEPLOYMENT_DRIVERS.map((driver) => (
                  <li key={driver} className="micro">
                    {driver}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* diagram */}
        <Reveal delay={100}>
          <div className="scene mt-14 rounded-[32px] border border-line px-5 py-10 sm:px-10 lg:mt-18 lg:px-14">
            <div className="hidden sm:block">
              <DeploymentDiagram />
            </div>

            {/* stacked on mobile */}
            <ol className="flex flex-col gap-3 sm:hidden">
              {DEPLOYMENT_TARGETS.map((target, i) => (
                <li key={target.key} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: i === 3 ? '#76E89C' : 'rgba(17,20,17,0.35)' }}
                  />
                  <div>
                    <p className="text-[15px] font-medium tracking-[-0.02em]">{target.title}</p>
                    <p className="mt-0.5 text-[13.5px] text-muted">{target.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* target detail on larger screens */}
        <div className="mt-6 hidden grid-cols-2 gap-5 sm:grid lg:grid-cols-4 lg:gap-6">
          {DEPLOYMENT_TARGETS.map((target, i) => (
            <Reveal key={target.key} delay={i * 60}>
              <div className="border-t border-line pt-5">
                <p className="text-[15px] font-medium tracking-[-0.02em]">{target.title}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{target.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 max-w-[70ch] text-[13px] text-muted/80">
            Deployment options describe our engineering direction and system design, not a list of
            certified environments.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
