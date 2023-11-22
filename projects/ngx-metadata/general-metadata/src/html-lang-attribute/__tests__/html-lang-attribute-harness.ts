export class HtmlLangAttributeHarness {
  private readonly attributeName = 'lang'

  constructor(private readonly document: Document) {}

  get() {
    return this.document.documentElement.getAttributeNode(this.attributeName)
  }

  set(locale: string) {
    this.document.documentElement.setAttribute(this.attributeName, locale)
  }

  remove() {
    const attribute = this.get()
    if (attribute) {
      document.documentElement.removeAttributeNode(attribute)
    }
  }
}
