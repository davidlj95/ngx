import { TestBed } from '@angular/core/testing'
import { Meta } from '@angular/platform-browser'

export const getMetaElementsBySelector = (attrSelector: string) =>
  TestBed.inject(Meta).getTags(attrSelector)
