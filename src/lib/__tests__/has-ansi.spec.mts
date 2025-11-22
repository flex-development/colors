/**
 * @file Unit Tests - hasAnsi
 * @module colors/lib/tests/unit/hasAnsi
 */

import testSubject from '#lib/has-ansi'
import { faker } from '@faker-js/faker'
import { ok } from 'devlop'
import { VFile } from 'vfile'

describe('unit:lib/hasAnsi', () => {
  it.each<Parameters<typeof testSubject>>([
    [faker.date.anytime()],
    [faker.datatype.boolean()],
    [faker.git.commitSha()],
    [faker.internet.emoji()],
    [faker.internet.url()],
    [faker.number.int({ max: 13, min: -13 })],
    [faker.number.romanNumeral()]
  ])('should return `false` if `value` does not contain ansi (%#)', (
    value,
    toString
  ) => {
    expect(testSubject(value, toString)).to.be.false
  })

  it.each<Parameters<typeof testSubject>>([
    ['\u001b[1mbold \u001b[0mnot bold\u001b[0m\u001b[22m'],
    [
      new VFile(`\u001b[1m${faker.string.sample()}\u001b[22m`),
      /**
       * Convert `value` to a string.
       *
       * @this {void}
       *
       * @param {VFile} file
       *  The virtual file
       * @return {string}
       *  The contents of `file`
       */
      function toString(this: void, file: VFile): string {
        ok(file instanceof VFile, 'expected `VFile` instance')
        ok(typeof file.value === 'string', 'expected string `file.value`')
        return file.path = 'random.txt', file.path + '\n---\n' + file.value
      }
    ]
  ])('should return `true` if `value` contains ansi (%#)', (
    value,
    toString
  ) => {
    expect(testSubject(value, toString)).to.be.true
  })
})
