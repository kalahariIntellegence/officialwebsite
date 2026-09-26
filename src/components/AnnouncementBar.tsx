import { ArrowRight } from 'lucide-react'
import { ANNOUNCEMENT } from '../lib/site'
import { scrollToSection } from '../lib/scroll'

export function AnnouncementBar() {
  if (!ANNOUNCEMENT.enabled) return null

  return (
    <div className="border-b border-line bg-surface-light">
      <div className="shell">
        <button
          type="button"
          onClick={() => scrollToSection(ANNOUNCEMENT.target)}
          className="group flex min-h-[40px] w-full items-center justify-center gap-2.5 py-2 text-center"
        >
          <span className="micro text-intelligence-dark">{ANNOUNCEMENT.label}</span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-line sm:block" />
          <span className="text-[12.5px] leading-snug text-muted transition-colors group-hover:text-ink">
            {ANNOUNCEMENT.text}
          </span>
          <ArrowRight
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-ink"
            strokeWidth={1.6}
          />
        </button>
      </div>
    </div>
  )
}
