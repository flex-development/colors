/**
 * @file Unit Tests - stripAnsi
 * @module colors/lib/tests/unit/stripAnsi
 */

import testSubject from '#lib/strip-ansi'
import type { ToString } from '@flex-development/colors'

describe('unit:lib/stripAnsi', () => {
  let hrc: (value: string, toString?: ToString | null | undefined) => string

  beforeAll(() => {
    /**
     * Make control characters in `value` human-readable.
     *
     * @this {void}
     *
     * @param {unknown} value
     *  The string containing control characters.
     *  Non-string values will be converted to strings (i.e. `toString(value)`)
     * @param {ToString | null | undefined} [toString]
     *  Convert `value` to a string
     * @return {string}
     *  `value` with human-readable control characters
     */
    hrc = function hrc(
      this: void,
      value: unknown,
      toString?: ToString | null | undefined
    ): string {
      toString ??= String

      /**
       * Regular expression matching control characters.
       *
       * @const {RegExp} re
       */
      const re: RegExp = /[\u0000-\u001F\u007F-\u009F]/g

      return toString(value).replace(re, hr)

      /**
       * Convert a control `character` to a human-readable string.
       *
       * @this {void}
       *
       * @param {string} character
       *  The control character
       * @return {string}
       *  The control `character` as a human-readable string
       */
      function hr(this: void, character: string): string {
        return `\\u${character.codePointAt(0)!.toString(16).padStart(4, '0')}`
      }
    }
  })

  it.each<Parameters<typeof testSubject>>([
    [
      { value: '\x1B[1mbold text\u001B[22m' },
      /**
       * Convert `value` to a string.
       *
       * @this {void}
       *
       * @param {{ value: string } | string} file
       *  The virtual file, or its contents
       * @return {string}
       *  The contents of `file`
       */
      function toString(this: void, file: { value: string } | string): string {
        return typeof file === 'string' ? file : file.value
      }
    ],
    ['\x1B[34m\x1B[1mbold blue text\u001B[22m\x1B[39m'],
    ['\x1B[104m\u001B[1mbold text with bright blue background\x1B[22m\x1B[49m'],
    ['\x1B[4m\x1B[34m\x1B[1mbold blue underlined text\x1B[22m\x1B[39m\x1B[24m'],
    ['\x1B[35m✨ purple text with emojis ✨\x1B[0m'],
    ['✅ \u001b[1mbold text with emoji prefix\u001b[22m'],

    // nested csi sequences
    ['\x1B[31mRed \x1B[1mBold Red\x1B[22m Normal Red\x1B[0m'],

    // osc with bel terminator
    ['\u001B]0;Terminal title\u0007Some text'],

    // csi sequences that are not sgr (cursor movement, etc.)
    ['\x1B[2JClear screen\x1B[HHome'],

    // reset-only sequences
    ['\x1B[0mReset only\x1B[0m'],

    // random control characters mixed in
    ['\x1B[31mRed\x07Text\x1B[0m'],

    // ansi hyperlink (osc 8)
    ['\u001B]8;;https://example.com\u001B\\Click here\u001B]8;;\u001B\\'],

    // color hyperlink
    ['\x1b[32m\u001B]8;;https://example.com\u001B\\green link\u001B]8;;\u001B\\\x1b[0m'],

    // multiple hyperlinks in one string
    ['\u001B]8;;https://a.com\u001B\\A\u001B]8;;\u001B\\ and \u001B]8;;https://b.com\u001B\\B\u001B]8;;\u001B\\']
  ])('should return `value` with ansi escape codes removed (%j)', (
    value,
    toString
  ) => {
    expect(hrc(testSubject(value, toString), toString)).toMatchSnapshot()
  })
})
