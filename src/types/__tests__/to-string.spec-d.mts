/**
 * @file Type Tests - ToString
 * @module colors/types/tests/unit-d/ToString
 */

import type TestSubject from '#types/to-string'

describe('unit-d:types/ToString', () => {
  type T = unknown
  type Subject = TestSubject<T>

  it('should match [this: void]', () => {
    expectTypeOf<Subject>().thisParameter.toEqualTypeOf<void>()
  })

  describe('parameters', () => {
    it('should be callable with [T]', () => {
      expectTypeOf<Subject>().parameters.toEqualTypeOf<[T]>()
    })
  })

  describe('returns', () => {
    it('should return string', () => {
      expectTypeOf<Subject>().returns.toEqualTypeOf<string>()
    })
  })
})
