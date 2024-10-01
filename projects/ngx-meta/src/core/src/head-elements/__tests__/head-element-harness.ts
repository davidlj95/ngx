export class HeadElementHarness {
  constructor(private readonly doc: Document) {}

  createDummyElement(content: string): HTMLElement {
    const element = this.doc.createElement('meta')
    element.setAttribute('name', 'dummy')
    element.setAttribute('content', content)
    return element
  }

  get dummySelector(): string {
    return "meta[name='dummy']"
  }

  appendElement(element: HTMLElement): void {
    this.doc.head.appendChild(element)
  }

  getAll(selector: string): NodeListOf<HTMLElement> {
    return this.doc.querySelectorAll(selector)
  }

  remove(selector: string): void {
    const elements = this.getAll(selector)
    elements.forEach((element) => {
      element.remove()
    })
  }
}
