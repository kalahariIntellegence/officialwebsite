import { FOOTER_COLUMNS, SITE } from '../lib/site'
import { scrollToSection } from '../lib/scroll'
import { Newsletter } from './Newsletter'
import { LogoMark } from './ui/Logo'

const SIGNATURE = ['People', 'Land', 'Knowledge', 'Intelligence']

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface-light">
      <div className="shell py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
          {/* identity */}
          <div>
            <button
              type="button"
              onClick={() => scrollToSection('top')}
              className="flex items-center gap-2.5 text-ink"
              aria-label={`${SITE.name} — back to top`}
            >
              <LogoMark className="h-[22px] w-[22px] text-ink" />
              <span className="text-[16px] font-medium tracking-[-0.022em]">
                Kalahari Intelligence
              </span>
            </button>

            <ul className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1.5">
              {SIGNATURE.map((word, i) => (
                <li key={word} className="flex items-center gap-2">
                  <span className="micro">{word}</span>
                  {i < SIGNATURE.length - 1 && (
                    <span aria-hidden="true" className="text-[10px] text-muted/50">
                      ×
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Newsletter />
            </div>
          </div>

          {/* link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="micro">{column.title}</p>
                <ul className="mt-4 space-y-1">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.target)}
                        className="-mx-2 flex min-h-[36px] items-center rounded px-2 text-left text-[14px] text-muted transition-colors hover:text-ink"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* base line */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-muted">
            © {year} {SITE.name}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${SITE.email}`}
              className="text-[13px] text-muted transition-colors hover:text-ink"
            >
              {SITE.email}
            </a>
            <p className="micro">Ancient wisdom · Future systems</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
