
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { scrollToSection } from '../../lib/scroll'
import type { SectionId } from '../../lib/site'
import { cn } from './cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse'

type ArrowButtonProps = {
  children: ReactNode
  /** Section scrolled to on activation. Everything on this site is in-page. */
  target: SectionId
  variant?: Variant
  size?: 'md' | 'lg'
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-[#f4f5f1] border border-ink hover:bg-[#1e241e] hover:border-[#1e241e]',
  secondary:
    'bg-white text-ink border border-line hover:border-[#c9cbc2] hover:bg-surface-light',
  ghost: 'bg-transparent text-ink border border-transparent hover:bg-white/70',
  inverse:
    'bg-intelligence text-[#0f1a12] border border-intelligence hover:bg-[#8cefad] hover:border-[#8cefad]',
}

export function ArrowButton({
  children,
  target,
  variant = 'primary',
  size = 'md',
  className,
}: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(target)}
      className={cn(
        'group inline-flex min-h-[44px] items-center gap-2 rounded-full font-medium transition-colors',
        size === 'lg' ? 'px-6 py-3 text-[15px]' : 'px-5 py-2.5 text-[14px]',
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.6}
      />
    </button>
  )
}
