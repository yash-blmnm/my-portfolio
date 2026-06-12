export function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-16 sm:py-20 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-8 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase text-teal-700">{eyebrow}</p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
