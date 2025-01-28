/**
 * @file Interfaces - Colors
 * @module colors/interfaces/Colors
 */

import type { Color, ColorFunctions } from '@flex-development/colors'

/**
 * A colorizer.
 *
 * Colorizers contain {@linkcode Color} functions. Each function corresponds to
 * a terminal color or style. The `color` property ({@linkcode Colors.color}) is
 * an accessor that can be used to disable or enable color output.
 *
 * @see {@linkcode ColorFunctions}
 *
 * @extends {ColorFunctions}
 */
interface Colors extends ColorFunctions {
  /**
   * Color output enabled?
   *
   * @return {boolean}
   *  `true` if color is enabled, `false` otherwise
   */
  get color(): boolean

  /**
   * Enable or disable color output.
   *
   * > 👉 **Note**: Even if color output is enabled, it will be disabled if it
   * > is not supported.
   *
   * @param {boolean | null | undefined} color
   *  Color output enabled?
   */
  set color(color: boolean | null | undefined)

  /**
   * Color output supported?
   *
   * @readonly
   */
  readonly supported: boolean
}

export type { Colors as default }
