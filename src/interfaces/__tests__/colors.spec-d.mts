/**
 * @file Type Tests - Colors
 * @module colors/interfaces/tests/unit-d/Colors
 */

import type TestSubject from '#interfaces/colors'
import type { ColorFunctions } from '@flex-development/colors'
import type { ReadonlyKeys } from '@flex-development/tutils'

describe('unit-d:interfaces/Colors', () => {
  it('should extend ColorFunctions', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<ColorFunctions>()
  })

  it('should match [color: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('color')
      .toEqualTypeOf<boolean>()
  })

  it('should match [readonly supported: boolean]', () => {
    // Arrange
    type K = ReadonlyKeys<TestSubject>
    type T = boolean

    // Expect
    expectTypeOf<K>().extract<'supported'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('supported').toEqualTypeOf<T>()
  })
})
