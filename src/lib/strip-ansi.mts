/**
 * @file stripAnsi
 * @module colors/lib/stripAnsi
 */

import ANSI_PATTERN from '#internal/ansi-pattern'
import type { ToString } from '@flex-development/colors'

/**
 * Remove ANSI escape codes from `value`.
 *
 * @see {@linkcode ToString}
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The string or value to remove escape codes from. Non-string values will be
 *  converted to strings (i.e. `toString(value)`)
 * @param {ToString | null | undefined} [toString]
 *  Convert `value` to a string
 * @return {string}
 *  Stringified `value` with ANSI escape codes removed
 */
function stripAnsi(
  this: void,
  value: unknown,
  toString?: ToString | null | undefined
): string {
  return (toString ?? String)(value).replace(new RegExp(ANSI_PATTERN, 'g'), '')
}

export default stripAnsi
