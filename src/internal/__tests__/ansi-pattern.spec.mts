/**
 * @file Unit Tests - ANSI_PATTERN
 * @module colors/internal/tests/unit/ANSI_PATTERN
 */

import TEST_SUBJECT from '#internal/ansi-pattern'

describe('unit:internal/ANSI_PATTERN', () => {
  it('should be pattern matching ansi escape codes', () => {
    expect(TEST_SUBJECT).toMatchSnapshot()
  })
})
