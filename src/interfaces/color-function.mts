/**
 * @file Interfaces - ColorFunction
 * @module colors/interfaces/ColorFunction
 */

/**
 * Function that colorizes a value.
 */
interface ColorFunction {
  /**
   * Colorize `value`.
   *
   * @this {void}
   *
   * @param {unknown} value
   *  The thing to colorize
   * @return {string}
   *  Colorized string `value`
   */
  (this: void, value: unknown): string

  /**
   * The reset sequence.
   */
  close: string

  /**
   * The sequence used to set styles.
   */
  open: string

  /**
   * The reset sequence replacement.
   */
  replace?: string | null | undefined
}

export type { ColorFunction as default }
