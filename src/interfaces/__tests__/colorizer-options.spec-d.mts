/**
 * @file Type Tests - ColorizerOptions
 * @module colors/interfaces/tests/unit-d/ColorizerOptions
 */

import type TestSubject from '#interfaces/colorizer-options'
import type { ColorConfigs } from '@flex-development/colors'
import type { Nilable } from '@flex-development/tutils'

describe('unit-d:interfaces/ColorizerOptions', () => {
  it('should match [color?: boolean | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('color')
      .toEqualTypeOf<Nilable<boolean>>()
  })

  it('should match [colors?: Partial<ColorConfigs> | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('colors')
      .toEqualTypeOf<Nilable<Partial<ColorConfigs>>>()
  })
})
