import { profile } from '../data/profile'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#fbfaf7]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="text-base font-semibold text-slate-950">
          {profile.name}
        </a>
        <div className="flex gap-5 overflow-x-auto text-sm font-medium text-slate-600">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 hover:text-teal-700">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
