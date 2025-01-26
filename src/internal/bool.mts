/**
 * @file Internal - bool
 * @module colors/internal/bool
 */

/**
 * Convert `value` to a boolean.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The value to parse
 * @param {ReadonlyArray<string> | null | undefined} [choices=['1','true']]
 *  Choices for boolean flags
 * @return {boolean}
 *  Parsed `value`
 */
function bool(
  this: void,
  value: unknown,
  choices?: readonly string[] | null | undefined
): boolean {
  if (typeof value === 'boolean') return value
  return (choices ?? ['1', 'true']).includes(String(value).trim())
}

export default bool
