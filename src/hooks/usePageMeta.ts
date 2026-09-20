import { useEffect } from "react"

const DEFAULT_TITLE = "Deets Pro — One link for everything you are"

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Sets the document title and description for a route. React Router does not
 * touch either on client-side navigation, so without this every page keeps the
 * title from index.html — which screen readers announce and crawlers index.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    setMeta('meta[property="og:title"]', "content", title)
    setMeta('meta[name="twitter:title"]', "content", title)

    if (description) {
      setMeta('meta[name="description"]', "content", description)
      setMeta('meta[property="og:description"]', "content", description)
      setMeta('meta[name="twitter:description"]', "content", description)
    }

    // Strip the query and hash: "?utm_source=..." and "/#products" are the same
    // document as "/", and pointing canonical at them invents duplicate pages.
    const url = `${window.location.origin}${window.location.pathname}`
    setMeta('meta[property="og:url"]', "content", url)
    const canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    )
    if (canonical) canonical.href = url

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title, description])
}
