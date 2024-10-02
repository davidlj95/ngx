import { TestBed } from '@angular/core/testing'
import { Meta } from '@angular/platform-browser'

export const clearMetasAfterEach = (attributeSelector: string) => {
  afterEach(() => {
    TestBed.inject(Meta)
      .getTags(attributeSelector)
      .forEach((tag) => tag.remove())
  })
}
