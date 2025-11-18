/**
 * @file Interfaces - Colors
 * @module colors/interfaces/Colors
 */

import type {
  Color,
  ColorConfigs,
  ColorFunctions
} from '@flex-development/colors'

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
   * > 👉 **Note**: Even if enabled, color output will be disabled
   * > if it is not supported.
   *
   * @param {boolean | null | undefined} color
   *  Whether color output should be enabled
   */
  set color(color: boolean | null | undefined)

  /**
   * Record, where each key is the name of a color or style and each value is
   * the configuration for a color function.
   *
   * @see {@linkcode ColorConfigs}
   *
   * @readonly
   */
  readonly styles: ColorConfigs

  /**
   * Whether color output is supported.
   *
   * @readonly
   */
  readonly supported: boolean
}

export type { Colors as default }
