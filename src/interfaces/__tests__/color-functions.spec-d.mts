/**
 * @file Type Tests - ColorFunctions
 * @module colors/interfaces/tests/unit-d/ColorFunctions
 */

import type TestSubject from '#interfaces/color-functions'
import type { Color, ColorFunction } from '@flex-development/colors'

describe('unit-d:interfaces/ColorFunctions', () => {
  it('should allow Record<Color, ColorFunction>', () => {
    assertType<TestSubject>({} as Record<Color, ColorFunction>)
  })

  it('should be indexable with Color', () => {
    expectTypeOf<TestSubject[Color]>().toEqualTypeOf<ColorFunction>()
  })
})
