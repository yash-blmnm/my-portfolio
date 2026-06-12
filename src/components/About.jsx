import { profile } from '../data/profile'
import { Section } from './Section'

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A practical portfolio for now, with room to grow.">
      <div className="grid gap-6 border-y border-stone-200 py-8 text-base leading-8 text-slate-600">
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p>{profile.future}</p>
      </div>
    </Section>
  )
}
