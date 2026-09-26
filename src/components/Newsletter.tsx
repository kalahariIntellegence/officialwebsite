import { useId, useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from './ui/cn'

type Status = { kind: 'idle' | 'error' | 'success'; message: string }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const IDLE: Status = { kind: 'idle', message: '' }

/**
 * Front-end only. There is no backend submission yet — the form validates the
 * address and confirms locally.
 */
export function Newsletter() {
  const inputId = useId()
  const statusId = useId()
  const [value, setValue] = useState('')
  const [status, setStatus] = useState<Status>(IDLE)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = value.trim()

    if (!email) {
      setStatus({ kind: 'error', message: 'Enter your email address.' })
      return
    }
    if (!EMAIL.test(email)) {
      setStatus({ kind: 'error', message: 'Enter a valid email address.' })
      return
    }

    setStatus({ kind: 'success', message: 'You’re subscribed.' })
    setValue('')
  }

  const invalid = status.kind === 'error'

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-[380px]">
      <label htmlFor={inputId} className="micro">
        Intelligence from the Kalahari
      </label>

      <div
        className={cn(
          'mt-3.5 flex items-center gap-2 rounded-full border bg-white px-1.5 py-1.5 pl-4 transition-colors',
          invalid ? 'border-[#c98b7c]' : 'border-line focus-within:border-[#c2c4ba]',
        )}
      >
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email address"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            if (status.kind !== 'idle') setStatus(IDLE)
          }}
          aria-invalid={invalid || undefined}
          aria-describedby={status.message ? statusId : undefined}
          className="min-w-0 flex-1 bg-transparent text-[14.5px] text-ink outline-none placeholder:text-muted/70"
        />

        <button
          type="submit"
          className="group inline-flex h-10 min-w-[44px] items-center justify-center gap-1.5 rounded-full bg-ink px-4 text-[13.5px] font-medium text-[#f4f5f1] transition-colors hover:bg-[#1e241e]"
        >
          <span className="hidden sm:inline">Subscribe</span>
          <ArrowRight
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            strokeWidth={1.7}
          />
        </button>
      </div>

      <p
        id={statusId}
        role="status"
        aria-live="polite"
        className={cn(
          'mt-2.5 flex min-h-[18px] items-center gap-1.5 text-[13px]',
          status.kind === 'error' && 'text-[#9d5c4c]',
          status.kind === 'success' && 'text-intelligence-dark',
        )}
      >
        {status.kind === 'success' && (
          <Check aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
        )}
        {status.message}
      </p>
    </form>
  )
}
