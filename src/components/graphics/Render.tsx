import { useState, type ReactNode } from 'react'
import { cn } from '../ui/cn'

/**
 * Transparent-background art assets served from `public/renders/`.
 *
 * Sources live in `art-source/` as full-size PNGs; `npm run art` regenerates
 * the trimmed, resized WebP files referenced here. If an asset is ever missing,
 * the component falls back to the coded SVG equivalent rather than breaking.
 */
export const RENDERS = {
  acacia: '/renders/acacia-intelligence-tree.webp',
  language: '/renders/language-rings.webp',
  voice: '/renders/voice-waveform.webp',
  energy: '/renders/energy-towers.webp',
  automation: '/renders/automation-blocks.webp',
  sphere: '/renders/intelligence-sphere.webp',
  landscape: '/renders/kalahari-landscape.webp',
  lineage: '/renders/knowledge-lineage.webp',
  stack: '/renders/intelligence-stack.webp',
  globe: '/renders/africa-globe.webp',
} as const

export type RenderKey = keyof typeof RENDERS

type RenderProps = {
  art: RenderKey
  alt: string
  /** Coded SVG shown if the asset fails to load. */
  fallback?: ReactNode
  className?: string
  /** Decorative assets are hidden from assistive technology. */
  decorative?: boolean
  eager?: boolean
}

export function Render({ art, alt, fallback, className, decorative, eager }: RenderProps) {
  const [missing, setMissing] = useState(false)

  if (missing && fallback) return <>{fallback}</>

  return (
    <img
      src={RENDERS[art]}
      alt={decorative ? '' : alt}
      aria-hidden={decorative || undefined}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setMissing(true)}
      className={cn('h-auto w-full object-contain', className)}
    />
  )
}
