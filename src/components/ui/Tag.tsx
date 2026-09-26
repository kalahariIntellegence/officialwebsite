import type { ReactNode } from 'react'
import { cn } from './cn'

type TagProps = {
  children: ReactNode
  tone?: 'neutral' | 'green' | 'sand'
  className?: string
}

const tones = {
  neutral: 'border-line bg-white/70 text-muted',
  green: 'border-[#bfe8cd] bg-[#eaf9ef] text-intelligence-dark',
  sand: 'border-[#e3d7bd] bg-[#f6f1e6] text-[#7a6845]',
} as const

export function Tag({ children, tone = 'neutral', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.01em] whitespace-nowrap',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
