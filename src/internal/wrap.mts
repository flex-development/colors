/**
 * @file Internal - wrap
 * @module colors/internal/wrap
 */

/**
 * Create an escape sequence.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {number} n
 *  Numeric code for escape sequence
 * @return {string}
 *  Escape sequence
 */
function wrap(this: void, n: number): string {
  return `\x1b[${n}m`
}

export default wrap
