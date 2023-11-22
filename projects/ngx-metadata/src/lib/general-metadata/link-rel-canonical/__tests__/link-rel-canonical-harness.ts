export class LinkRelCanonicalHarness {
  public static readonly TAG = 'link'
  public static readonly REL_ATTR = 'rel'
  public static readonly CANONICAL_ATTR_VALUE = 'canonical'
  public static readonly HREF_ATTR = 'href'
  public static readonly SELECTOR = `${this.TAG}[${this.REL_ATTR}="${this.CANONICAL_ATTR_VALUE}"]`

  constructor(private readonly document: Document) {}

  create(url: string): void {
    const linkElement = this.document.createElement(LinkRelCanonicalHarness.TAG)
    linkElement.setAttribute(
      LinkRelCanonicalHarness.REL_ATTR,
      LinkRelCanonicalHarness.CANONICAL_ATTR_VALUE,
    )
    linkElement.setAttribute(LinkRelCanonicalHarness.HREF_ATTR, url)
    this.document.head.appendChild(linkElement)
  }

  get(): HTMLLinkElement | null {
    return this.document.querySelector(LinkRelCanonicalHarness.SELECTOR)
  }

  getAll(): NodeListOf<HTMLLinkElement> {
    return this.document.querySelectorAll(LinkRelCanonicalHarness.SELECTOR)
  }

  remove(): void {
    const elements = this.getAll()
    elements.forEach((element) => {
      element.remove()
    })
  }
}
