import { describe, expect, it, jest } from '@jest/globals'
import {
  getAllTypescriptFiles,
  GetAllTypescriptFilesOptions,
} from './get-all-typescript-files'
import { Tree } from '@angular-devkit/schematics'

describe('get all typescript files', () => {
  const sut = getAllTypescriptFiles

  describe('should return Typescript files in the project', () => {
    const EXTENSIONS = ['.ts', '.mts']
    EXTENSIONS.forEach((extension) => {
      it(`like ${extension} files`, () => {
        const tree = Tree.empty()
        const file = `/index${extension}`
        const fileInSubdir = `/subdir/index${extension}`
        ;[file, fileInSubdir].forEach((filePath) => tree.create(filePath, ''))

        const files = getFilePathsFromResult(sut(tree))
        expect(files).toEqual([file, fileInSubdir])
      })
    })
  })

  describe('should not return Typescript definition files in the project', () => {
    const EXTENSIONS = ['.d.ts', '.d.mts']

    EXTENSIONS.forEach((extension) => {
      it(`like ${extension} files`, () => {
        const tree = Tree.empty()
        tree.create(`/index${extension}`, '')

        const files = getFilePathsFromResult(sut(tree))
        expect(files).toHaveLength(0)
      })
    })
  })

  it('should not return Typescript files inside node_modules directory', () => {
    const tree = Tree.empty()
    tree.create(`/node_modules/@angular/core/index.ts`, '')

    const files = getFilePathsFromResult(sut(tree))
    expect(files).toHaveLength(0)
  })

  it('should not return Typescript files not matching the content filter when provided', () => {
    const contentFilter = jest
      .fn<Exclude<GetAllTypescriptFilesOptions['contentFilter'], undefined>>()
      .mockReturnValue(false)
    const tree = Tree.empty()
    const DUMMY_CONTENT = 'DUMMY_CONTENT'
    tree.create(`/index.ts`, DUMMY_CONTENT)

    const files = getFilePathsFromResult(sut(tree, { contentFilter }))
    expect(files).toHaveLength(0)
    expect(contentFilter).toHaveBeenCalledWith(DUMMY_CONTENT)
    expect(contentFilter).toHaveBeenCalledTimes(1)
  })
})

const getFilePathsFromResult = (
  iterableIterator: ReturnType<typeof getAllTypescriptFiles>,
): readonly string[] => [...iterableIterator].map(([filePath]) => filePath)
