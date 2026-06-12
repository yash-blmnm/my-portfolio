import { skills } from '../data/profile'
import { Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-4 sm:grid-cols-3">
        {skills.map((group) => (
          <article key={group.category} className="rounded-md border border-stone-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-950">{group.category}</h3>
            <p className="mt-3 leading-7 text-slate-600">{group.items.join(', ')}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
