import { profile } from '../data/profile'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" className="border-t border-stone-200 text-center">
      <p className="mb-3 text-sm font-semibold uppercase text-teal-700">Contact</p>
      <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Let us connect.</h2>
      <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-600">
        I am currently looking for full-time software development opportunities and would be happy
        to talk.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md border border-teal-700 bg-teal-700 px-5 text-sm font-semibold text-white hover:bg-teal-800"
      >
        {profile.email}
      </a>
    </Section>
  )
}
