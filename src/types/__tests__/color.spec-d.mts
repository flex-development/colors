/**
 * @file Type Tests - Color
 * @module colors/types/tests/unit-d/Color
 */

import type TestSubject from '#types/color'
import type { ColorFunctions } from '@flex-development/colors'

describe('unit-d:types/Color', () => {
  it('should equal keyof ColorFunctions', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<keyof ColorFunctions>()
  })
})
