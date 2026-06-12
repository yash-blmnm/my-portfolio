import { blogs } from '../data/blogs'
import { Section } from './Section'

export function Blogs() {
  return (
    <Section id="writing" eyebrow="Writing" title="Featured notes and blogs">
      <div className="grid gap-3">
        {blogs.map((blog) => (
          <article
            key={blog.title}
            className="flex flex-col gap-4 rounded-md border border-stone-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold uppercase text-teal-700">{blog.type}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-950">
                {blog.title}
              </h3>
            </div>
            <a
              href={blog.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-slate-950 hover:text-teal-700"
            >
              Read
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
