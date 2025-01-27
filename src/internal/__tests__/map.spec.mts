/**
 * @file Unit Tests - map
 * @module colors/internal/tests/unit/map
 */

import testSubject from '#internal/map'

describe('unit:internal/map', () => {
  it('should be color function config map', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
