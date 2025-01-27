/**
 * @file Type Tests - ColorFunction
 * @module colors/interfaces/tests/unit-d/ColorFunction
 */

import type TestSubject from '#interfaces/color-function'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/ColorFunction', () => {
  it('should match [close: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('close').toEqualTypeOf<string>()
  })

  it('should match [open: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('open').toEqualTypeOf<string>()
  })

  it('should match [replace?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('replace')
      .toEqualTypeOf<Nilable<string>>()
  })

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
