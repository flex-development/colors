/**
 * @file hasAnsi
 * @module colors/lib/hasAnsi
 */

import ANSI_PATTERN from '#internal/ansi-pattern'
import type { ToString } from '@flex-development/colors'

/**
 * Check if `value` contains ANSI escape codes.
 *
 * @see {@linkcode ToString}
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The string or value to check.
 *  Non-string values will be converted to strings (i.e. `toString(value)`)
 * @param {ToString | null | undefined} [toString]
 *  Convert `value` to a string
 * @return {boolean}
 *  `true` if `value` contains ANSI escape codes, `false` otherwise
 */
function hasAnsi(
  this: void,
  value: unknown,
  toString?: ToString | null | undefined
): boolean {
  return !!new RegExp(ANSI_PATTERN).exec((toString ?? String)(value))
}

export default hasAnsi
