import { cn } from './cn'

/** KI mark — a three-node branch: two roots resolving into one intelligence node. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn('h-5 w-5', className)} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.55">
        <path d="M12 21v-7" />
        <path d="M12 15.5 6.5 9.5" />
        <path d="M12 15.5 17.5 9.5" />
      </g>
      <circle cx="12" cy="9" r="3" fill="#76E89C" />
      <circle cx="12" cy="9" r="3" fill="none" stroke="#315B41" strokeOpacity="0.5" strokeWidth="0.8" />
      <circle cx="6" cy="8.6" r="1.6" fill="currentColor" opacity="0.32" />
      <circle cx="18" cy="8.6" r="1.6" fill="currentColor" opacity="0.32" />
    </svg>
  )
}
