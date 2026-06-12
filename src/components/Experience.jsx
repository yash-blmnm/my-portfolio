import { experience } from '../data/profile'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Background">
      <div className="grid gap-4 md:grid-cols-2">
        {experience.map((item) => (
          <article key={item.title} className="rounded-md border border-stone-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase text-teal-700">{item.period}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
