import type { SectionId } from './site'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Scroll to a section by id, honouring the sticky navbar offset. */
export function scrollToSection(id: SectionId) {
  if (typeof document === 'undefined') return

  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    return
  }

  const el = document.getElementById(id)
  if (!el) return

  const offset = 88
  const top = el.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
}
