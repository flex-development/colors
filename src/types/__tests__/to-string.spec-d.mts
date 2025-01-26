/**
 * @file Type Tests - ToString
 * @module colors/types/tests/unit-d/ToString
 */

import type TestSubject from '#types/to-string'

describe('unit-d:types/ToString', () => {
  it('should match [this: void]', () => {
    expectTypeOf<TestSubject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [unknown]', () => {
      expectTypeOf<TestSubject>().parameters.toEqualTypeOf<[unknown]>()
    })
  })

  describe('returns', () => {
    it('should return string', () => {
      expectTypeOf<TestSubject>().returns.toEqualTypeOf<string>()
    })
  })
})
