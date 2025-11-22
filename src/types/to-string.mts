/**
 * @file Type Aliases - ToString
 * @module colors/types/ToString
 */

/**
 * Convert `value` to a string.
 *
 * @template {any} [T=any]
 *  The thing to stringify
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The thing to stringify
 * @return {string}
 *  The stringified `value`
 */
type ToString<T = any> = (this: void, value: T) => string

export type { ToString as default }
