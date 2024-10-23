import { Rule } from '@angular-devkit/schematics'

export type AddRootProvider = (opts: { name: string; project: string }) => Rule
