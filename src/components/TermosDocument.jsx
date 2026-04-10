function Block({ block }) {
  if (block.pLinkLine) {
    const { pre, href, label, post } = block.pLinkLine
    return (
      <p className="text-neutral-300">
        {pre}
        <a
          href={href}
          className="text-sax-gold underline transition-colors hover:text-sax-gold-dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
        {post}
      </p>
    )
  }
  if (block.p) {
    return (
      <p className="text-neutral-300">
        {block.p}
      </p>
    )
  }
  if (block.pHighlight) {
    const { pre, bold, post } = block.pHighlight
    return (
      <p className="text-neutral-300">
        {pre}
        <strong className="text-neutral-200">{bold}</strong>
        {post}
      </p>
    )
  }
  if (block.ul) {
    return (
      <ul className="ml-6 list-disc space-y-2 text-neutral-300">
        {block.ul.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )
  }
  if (block.ulRich) {
    return (
      <ul className="ml-6 list-disc space-y-2 text-neutral-300">
        {block.ulRich.map((row, i) => (
          <li key={i}>
            {row.strong ? (
              <>
                <strong className="text-neutral-200">{row.strong}</strong>{' '}
                {row.rest}
              </>
            ) : (
              row.text
            )}
          </li>
        ))}
      </ul>
    )
  }
  if (block.dl) {
    return (
      <dl className="mt-4 space-y-2">
        {block.dl.map((row, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2 sm:flex-row sm:justify-between ${
              i < block.dl.length - 1
                ? 'border-b border-[#5C3A5C]/20 pb-2'
                : ''
            }`}
          >
            <dt className="text-sm text-sax-gold">{row.dt}</dt>
            <dd
              className={`text-neutral-200 sm:text-right ${
                row.ddClassName ?? ''
              }`}
            >
              {row.ddLink ? (
                <a
                  href={row.ddLink.href}
                  className="transition-colors hover:text-sax-gold"
                >
                  {row.ddLink.text}
                </a>
              ) : (
                row.dd
              )}
            </dd>
          </div>
        ))}
      </dl>
    )
  }
  if (block.table) {
    const { headers, rows } = block.table
    return (
      <div className="mt-6 overflow-x-auto rounded-lg border border-[#5C3A5C]/30">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#5C3A5C]/40 bg-[#1a0f1a]/50">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`px-2 pt-4 pb-3 text-sm font-semibold text-sax-gold sm:px-4 sm:text-base ${
                    i === 0 ? 'text-left' : 'text-right'
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-neutral-200">
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className={
                  ri < rows.length - 1 ? 'border-b border-[#5C3A5C]/20' : ''
                }
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-2 py-3 text-sm sm:px-4 sm:text-base ${
                      ci === 1 ? 'text-right font-semibold' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  if (block.box) {
    return (
      <div className="mt-6 rounded-lg border border-[#5C3A5C]/30 bg-[#1a0f1a]/30 p-4 sm:p-6">
        {block.box.title && (
          <p className="mb-4 font-semibold text-neutral-200">{block.box.title}</p>
        )}
        {block.box.blocks?.map((inner, i) => (
          <Block key={i} block={inner} />
        ))}
      </div>
    )
  }
  if (block.pStrongLead) {
    return (
      <p className="text-neutral-300">
        <strong className="text-neutral-200">{block.pStrongLead.lead}</strong>
        {block.pStrongLead.rest}
      </p>
    )
  }
  return null
}

export function TermosDocument({ data }) {
  return (
    <div className="mt-16 space-y-12">
      {data.sections.map((section, si) => (
        <section
          key={`${section.title}-${si}`}
          className="rounded-lg bg-[#000000]/80 px-4 py-6 shadow-xl shadow-[#5C3A5C]/20 backdrop-blur-sm sm:px-8 sm:py-10"
        >
          <h2 className="font-mono text-2xl font-semibold tracking-tight text-sax-gold sm:text-3xl">
            {section.title}
          </h2>
          <div className="mt-6 space-y-4 font-mono text-base leading-7 text-neutral-300">
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
