export const likeWhenNullOrUndefined = (
  specDefinitions: (testCase: null | undefined) => void,
) => {
  const TEST_CASES = [null, undefined]
  TEST_CASES.forEach((testCase) => {
    describe(`like when ${testCase}`, () => {
      specDefinitions(testCase)
    })
  })
}
