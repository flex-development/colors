/**
 * @file Unit Tests - wrap
 * @module colors/internal/tests/unit/wrap
 */

import map from '#internal/map'
import testSubject from '#internal/wrap'

describe('unit:internal/wrap', () => {
  it('should return escape sequence', () => {
    expect(testSubject(map.reset[0])).toMatchSnapshot()
  })
})
