/**
 * @file Unit Tests - styles
 * @module colors/internal/tests/unit/styles
 */

import testSubject from '#internal/styles'

describe('unit:internal/styles', () => {
  it('should be color function config map', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
