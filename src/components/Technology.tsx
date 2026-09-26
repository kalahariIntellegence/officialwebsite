import type { ReactNode } from 'react'
import { TECH_PILLARS, type TechPillar } from '../lib/site'
import { LanguageOrb } from './graphics/LanguageOrb'
import { WaveformSculpture } from './graphics/WaveformSculpture'
import { EnergyGrid } from './graphics/EnergyGrid'
import { AutomationBlocks } from './graphics/AutomationBlocks'
import { Render, type RenderKey } from './graphics/Render'
import { SectionHeader } from './ui/SectionHeader'
import { Reveal } from './ui/Reveal'
import { Tag } from './ui/Tag'
import { cn } from './ui/cn'

const ART: Record<TechPillar['id'], { key: RenderKey; alt: string; fallback: ReactNode }> = {
  language: {
    key: 'language',
    alt: 'Concentric pale discs with a luminous green core, circled by orbiting nodes.',
    fallback: <LanguageOrb />,
  },
  voice: {
    key: 'voice',
    alt: 'A speech waveform built from stacked translucent discs, tapering at both ends.',
    fallback: <WaveformSculpture />,
  },
  energy: {
    key: 'energy',
    alt: 'Frosted glass towers rising from desert terrain with wind turbines and a green energy line.',
    fallback: <EnergyGrid />,
  },
  automation: {
    key: 'automation',
    alt: 'Interlocking modular blocks lit from within, linked by nodes on thin arms.',
    fallback: <AutomationBlocks />,
  },
}

/** Art sits in a taller frame on the wide cards so the rows do not look pasted. */
const ART_FRAME: Record<TechPillar['id'], string> = {
  language: 'max-w-[380px] sm:max-w-[440px]',
  voice: 'max-w-[400px]',
  energy: 'max-w-[400px]',
  automation: 'max-w-[300px] sm:max-w-[340px]',
}

/** Asymmetric 7/5 · 5/7 rhythm so no two rows read the same. */
const SPANS: Record<TechPillar['id'], string> = {
  language: 'lg:col-span-7',
  voice: 'lg:col-span-5',
  energy: 'lg:col-span-5',
  automation: 'lg:col-span-7',
}

function PillarCard({ pillar, delay }: { pillar: TechPillar; delay: number }) {
  return (
    <Reveal delay={delay} className={cn('min-w-0', SPANS[pillar.id])}>
      <article className="card card-lift flex h-full flex-col">
        {/* visual */}
        <div className="scene relative flex min-h-[248px] items-center justify-center border-b border-line px-4 py-8 sm:min-h-[300px] sm:px-8 sm:py-10">
          <span className="micro absolute top-4 left-5 sm:top-5 sm:left-7">{pillar.index}</span>
          <div className={cn('w-full', ART_FRAME[pillar.id])}>
            <Render
              art={ART[pillar.id].key}
              alt={ART[pillar.id].alt}
              fallback={ART[pillar.id].fallback}
            />
          </div>
        </div>

        {/* content */}
        <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
          <p className="micro text-intelligence-dark">{pillar.eyebrow}</p>

          <h3 className="subhead max-w-[20ch]">{pillar.headline}</h3>

          <p className="text-[15px] leading-relaxed text-muted sm:max-w-[52ch]">{pillar.copy}</p>

          <ul className="mt-auto flex flex-wrap gap-2 pt-3">
            {pillar.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export function Technology() {
  return (
    <section id="technology" aria-labelledby="technology-heading" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow="Technology"
          title={
            <span id="technology-heading">
              One intelligence layer.
              <br />
              Multiple systems.
            </span>
          }
          copy="Kalahari Intelligence develops models and intelligent systems that connect language, infrastructure, energy and operations."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          {TECH_PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}
