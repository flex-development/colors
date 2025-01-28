/**
 * @file Interfaces - ColorizerOptions
 * @module colors/interfaces/ColorizerOptions
 */

import type { ColorConfigs } from '@flex-development/colors'

/**
 * Options for creating a colorizer.
 */
interface ColorizerOptions {
  /**
   * Color output enabled?
   *
   * @default isColorSupported()
   */
  color?: boolean | null | undefined

  /**
   * Color function config map.
   *
   * @see {@linkcode ColorConfigs}
   */
  colors?: Partial<ColorConfigs> | null | undefined
}

export type { ColorizerOptions as default }
