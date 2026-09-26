import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { cn } from './cn'

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  copy?: ReactNode
  /** Right-hand slot, e.g. a CTA or a micro list. */
  aside?: ReactNode
  align?: 'split' | 'stack'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  aside,
  align = 'split',
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('w-full', className)}>
      <Reveal>
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-intelligence-dark/70"
          />
          <p className="eyebrow">{eyebrow}</p>
        </div>
      </Reveal>

      <div
        className={cn(
          'mt-6 gap-x-16 gap-y-8',
          align === 'split'
            ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end'
            : 'max-w-3xl',
        )}
      >
        <Reveal delay={60}>
          <h2 className="headline max-w-[16ch]">{title}</h2>
        </Reveal>

        {(copy || aside) && (
          <Reveal delay={120}>
            <div className="flex flex-col gap-6">
              {copy && <p className="lede max-w-[46ch]">{copy}</p>}
              {aside}
            </div>
          </Reveal>
        )}
      </div>
    </div>
  )
}
