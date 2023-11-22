export class JsonLdScriptHarness {
  public static readonly TAG = 'script'
  public static readonly TYPE_ATTR = 'type'
  public static readonly JSONLD_TYPE = 'application/ld+json'
  public static readonly SELECTOR = `${this.TAG}[${this.TYPE_ATTR}='${this.JSONLD_TYPE}']`

  constructor(private readonly document: Document) {}

  create(jsonLd: object): void {
    const scriptElement = this.document.createElement(JsonLdScriptHarness.TAG)
    scriptElement.setAttribute(
      JsonLdScriptHarness.TYPE_ATTR,
      JsonLdScriptHarness.JSONLD_TYPE,
    )
    scriptElement.innerHTML = JSON.stringify(jsonLd)
    this.document.head.appendChild(scriptElement)
  }

  get(): HTMLScriptElement | null {
    return this.document.querySelector(JsonLdScriptHarness.SELECTOR)
  }

  getAll(): NodeListOf<HTMLScriptElement> {
    return this.document.querySelectorAll(JsonLdScriptHarness.SELECTOR)
  }

  getJsonLdFromElement(jsonLdScriptElement: HTMLScriptElement): object {
    return JSON.parse(jsonLdScriptElement.innerHTML)
  }

  remove(): void {
    const elements = this.getAll()
    elements.forEach((element) => {
      element.remove()
    })
  }
}
