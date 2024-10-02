import { TestBed } from '@angular/core/testing'
import { Meta, MetaDefinition } from '@angular/platform-browser'

export const addMetaElements = (tags: ReadonlyArray<MetaDefinition>) =>
  TestBed.inject(Meta).addTags(tags as MetaDefinition[])
