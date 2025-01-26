/**
 * @file Unit Tests - bool
 * @module colors/internal/tests/unit/bool
 */

import testSubject from '#internal/bool'

describe('unit:internal/bool', () => {
  it.each<Parameters<typeof testSubject>>([
    ['0', null],
    [true, null],
    [3, ['1', '2', '3']]
  ])('should return `value` as boolean (%j, %j)', (value, choices) => {
    expect(testSubject(value, choices)).toMatchSnapshot()
  })
})
