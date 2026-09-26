import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE, type SectionId } from '../lib/site'
import { scrollToSection } from '../lib/scroll'
import { useScrolled } from '../hooks/useScrolled'
import { LogoMark } from './ui/Logo'
import { cn } from './ui/cn'

export function Navbar() {
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  const go = (target: SectionId) => {
    setOpen(false)
    scrollToSection(target)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-line bg-background/78 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="shell">
        <nav
          aria-label="Primary"
          className="flex h-[74px] items-center justify-between gap-6"
        >
          {/* Left: wordmark */}
          <button
            type="button"
            onClick={() => go('top')}
            className="group flex shrink-0 items-center gap-2.5 text-ink"
            aria-label={`${SITE.name} — back to top`}
          >
            <LogoMark className="h-[22px] w-[22px] text-ink transition-transform duration-500 group-hover:rotate-[8deg]" />
            <span className="text-[15px] font-medium tracking-[-0.022em] whitespace-nowrap">
              Kalahari Intelligence
            </span>
          </button>

          {/* Centre: sections */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.target}>
                <button
                  type="button"
                  onClick={() => go(link.target)}
                  className="rounded-full px-3.5 py-2 text-[14px] text-muted transition-colors hover:bg-white/60 hover:text-ink"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={() => go('contact')}
              className="rounded-full px-3.5 py-2 text-[14px] text-muted transition-colors hover:text-ink"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => go('contact')}
              className="group inline-flex min-h-[40px] items-center gap-2 rounded-full border border-ink bg-ink px-4 py-2 text-[14px] font-medium text-[#f4f5f1] transition-colors hover:bg-[#1e241e]"
            >
              Request a conversation
              <ArrowRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.7}
              />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 text-ink lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-background/97 backdrop-blur-xl lg:hidden"
      >
        <div className="shell py-5">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.target} className="border-b border-line/70">
                <button
                  type="button"
                  onClick={() => go(link.target)}
                  className="flex min-h-[56px] w-full items-center justify-between py-3 text-left text-[19px] font-medium tracking-[-0.02em]"
                >
                  {link.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-muted"
                    strokeWidth={1.5}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => go('contact')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-ink bg-ink px-5 text-[15px] font-medium text-[#f4f5f1]"
            >
              Request a conversation
              <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={() => go('contact')}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-line bg-white px-5 text-[15px] font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
