export class HeadElementHarness {
  constructor(private readonly doc: Document) {}

  createDummyElement(content: string): HTMLElement {
    const element = this.doc.createElement('meta')
    element.setAttribute('name', 'dummy')
    element.setAttribute('content', content)
    return element
  }

  readonly dummySelector = "meta[name='dummy']"

  appendElement(element: HTMLElement): void {
    this.doc.head.appendChild(element)
  }

  getAllDummyElements(): NodeListOf<HTMLElement> {
    return this.doc.head.querySelectorAll(this.dummySelector)
  }

  removeAllDummyElements(): void {
    const elements = this.getAllDummyElements()
    elements.forEach((element) => {
      element.remove()
    })
  }
}
