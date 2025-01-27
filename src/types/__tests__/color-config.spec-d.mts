/**
 * @file Type Tests - ColorConfig
 * @module colors/types/tests/unit-d/ColorConfig
 */

import type TestSubject from '#types/color-config'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:types/ColorConfig', () => {
  it('should match [0: number]', () => {
    expectTypeOf<TestSubject>().toHaveProperty(0).toEqualTypeOf<number>()
  })

  it('should match [1: number]', () => {
    expectTypeOf<TestSubject>().toHaveProperty(1).toEqualTypeOf<number>()
  })

  it('should match [2?: string | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty(2)
      .toEqualTypeOf<Nilable<string>>()
  })
})
