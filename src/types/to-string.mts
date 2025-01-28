/**
 * @file Type Aliases - ToString
 * @module colors/types/ToString
 */

/**
 * Convert `value` to a string.
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to stringify
 * @return {string}
 *  Stringified `value`
 */
type ToString = (this: void, value: unknown) => string

export type { ToString as default }
