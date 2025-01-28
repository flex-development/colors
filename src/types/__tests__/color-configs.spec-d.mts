/**
 * @file Type Tests - ColorConfigs
 * @module colors/types/tests/unit-d/ColorConfigs
 */

import type TestSubject from '#types/color-configs'
import type { Color, ColorConfig } from '@flex-development/colors'

describe('unit-d:types/ColorConfigs', () => {
  it('should equal Record<Color, ColorConfig>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Record<Color, ColorConfig>>()
  })
})
