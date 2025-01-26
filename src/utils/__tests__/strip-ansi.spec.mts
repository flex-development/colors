/**
 * @file Unit Tests - stripAnsi
 * @module colors/utils/tests/unit/stripAnsi
 */

import testSubject from '#utils/strip-ansi'

describe('unit:utils/stripAnsi', () => {
  it.each<Parameters<typeof testSubject>>([
    ['\x1B[1mbold text\x1B[22m'],
    ['\x1B[34m\x1B[1mbold blue text\x1B[22m\x1B[39m'],
    ['\x1B[104m\x1B[1mbold text with bright blue background\x1B[22m\x1B[49m'],
    ['\x1B[4m\x1B[34m\x1B[1mbold blue underlined text\x1B[22m\x1B[39m\x1B[24m']
  ])('should return `value` with ansi escape codes removed (%j)', value => {
    expect(testSubject(value)).toMatchSnapshot()
  })
})
