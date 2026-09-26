import type { ElementType, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from './cn'

type RevealProps = {
  children: ReactNode
  /** Stagger in milliseconds. */
  delay?: number
  as?: ElementType
  className?: string
}

/** Fades + lifts content into place the first time it enters the viewport. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      className={cn('reveal', inView && 'reveal-in', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
