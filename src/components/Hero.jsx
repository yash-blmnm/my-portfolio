import { profile } from '../data/profile'

const actions = [
  { href: `mailto:${profile.email}`, label: 'Email' },
  { href: profile.resumeUrl, label: 'Resume' },
  { href: profile.linkedinUrl, label: 'LinkedIn' },
  { href: profile.githubUrl, label: 'GitHub' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[78svh] w-full max-w-6xl content-center px-5 py-20"
    >
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase text-teal-700">{profile.role}</p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] text-slate-950 sm:text-6xl lg:text-7xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{profile.summary}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {actions.map((action, index) => (
            <a
              key={action.label}
              href={action.href}
              className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 text-sm font-semibold transition ${
                index === 0
                  ? 'border-teal-700 bg-teal-700 text-white hover:bg-teal-800'
                  : 'border-stone-300 bg-white text-slate-800 hover:border-teal-700 hover:text-teal-700'
              }`}
              target={action.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={action.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
