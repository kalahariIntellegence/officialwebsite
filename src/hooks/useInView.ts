import { useEffect, useRef, useState } from 'react'

/** Observes an element once and reports when it first enters the viewport. */
export function useInView<T extends HTMLElement>(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin, threshold: 0.08 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, inView }
}
