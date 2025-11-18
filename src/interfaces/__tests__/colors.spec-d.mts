/**
 * @file Type Tests - Colors
 * @module colors/interfaces/tests/unit-d/Colors
 */

import type TestSubject from '#interfaces/colors'
import type { ColorConfigs, ColorFunctions } from '@flex-development/colors'
import type { ReadonlyKeys } from '@flex-development/tutils'

describe('unit-d:interfaces/Colors', () => {
  type RK = ReadonlyKeys<TestSubject>

  it('should extend ColorFunctions', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<ColorFunctions>()
  })

  it('should match [color: boolean]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('color')
      .toEqualTypeOf<boolean>()
  })

  it('should match [readonly styles: ColorConfigs]', () => {
    // Arrange
    type T = ColorConfigs

    // Expect
    expectTypeOf<RK>().extract<'styles'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('styles').toEqualTypeOf<T>()
  })

  it('should match [readonly supported: boolean]', () => {
    // Arrange
    type T = boolean

    // Expect
    expectTypeOf<RK>().extract<'supported'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('supported').toEqualTypeOf<T>()
  })
})
