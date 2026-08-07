import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type MarkdownBodyProps = {
  content: string
  /** Post folder name; relative image paths resolve under `/posts-static/[directory]/`. */
  assetDirectory: string
}

export function MarkdownBody({ content, assetDirectory }: MarkdownBodyProps) {
  return (
    <div className="md-content portfolio-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img({ src, alt, ...rest }) {
            const raw = typeof src === 'string' ? src : ''
            const resolved =
              raw.startsWith('http://') || raw.startsWith('https://')
                ? raw
                : `/posts-static/${assetDirectory}/${raw.replace(/^\.\//, '')}`
            return (
              // eslint-disable-next-line @next/next/no-img-element -- local markdown assets from /public
              <img
                {...rest}
                src={resolved}
                alt={alt ?? ''}
                className="my-6 max-w-full rounded-[var(--border-radius)] border border-[var(--lightest-navy)]"
              />
            )
          },
          a({ href, children, ...rest }) {
            const external = href?.startsWith('http://') || href?.startsWith('https://')
            return (
              <a
                {...rest}
                href={href}
                className="inline-link"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {children}
              </a>
            )
          },
          code({ className, children, ...rest }) {
            const isBlock = Boolean(className?.includes('language-'))
            if (!isBlock) {
              return (
                <code
                  {...rest}
                  className="rounded-[var(--border-radius)] bg-[var(--light-navy)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--white)]"
                >
                  {children}
                </code>
              )
            }
            return (
              <code {...rest} className={className}>
                {children}
              </code>
            )
          },
          pre({ children }) {
            return (
              <pre className="my-6 overflow-x-auto rounded-[var(--border-radius)] border border-[var(--lightest-navy)] bg-[var(--dark-navy)] p-4 text-sm leading-relaxed text-[var(--light-slate)]">
                {children}
              </pre>
            )
          },
          h2({ children }) {
            return (
              <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-[var(--lightest-slate)] first:mt-0">
                {children}
              </h2>
            )
          },
          h3({ children }) {
            return (
              <h3 className="mt-8 mb-3 text-lg font-semibold text-[var(--lightest-slate)]">
                {children}
              </h3>
            )
          },
          p({ children }) {
            return <p className="my-4 leading-relaxed text-[var(--slate)]">{children}</p>
          },
          ul({ children }) {
            return <ul className="my-4 list-disc space-y-2 pl-6 text-[var(--slate)]">{children}</ul>
          },
          ol({ children }) {
            return (
              <ol className="my-4 list-decimal space-y-2 pl-6 text-[var(--slate)]">{children}</ol>
            )
          },
          li({ children }) {
            return <li className="leading-relaxed">{children}</li>
          },
          blockquote({ children }) {
            return (
              <blockquote className="my-6 border-l border-[var(--green)] pl-6 text-[var(--light-slate)] italic">
                {children}
              </blockquote>
            )
          },
          hr() {
            return <hr className="my-10 border-[var(--lightest-navy)]" />
          },
          table({ children }) {
            return (
              <div className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm text-[var(--slate)]">
                  {children}
                </table>
              </div>
            )
          },
          th({ children }) {
            return (
              <th className="border border-[var(--lightest-navy)] bg-[var(--light-navy)] px-3 py-2 text-left font-semibold text-[var(--lightest-slate)]">
                {children}
              </th>
            )
          },
          td({ children }) {
            return <td className="border border-[var(--lightest-navy)] px-3 py-2">{children}</td>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
