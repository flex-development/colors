/**
 * @file Interfaces - ColorFunctions
 * @module colors/interfaces/ColorFunctions
 */

import type { ColorFunction } from '@flex-development/colors'

/**
 * Registry of color functions.
 *
 * This interface can be augmented to register custom color functions.
 *
 * @example
 *  declare module '@flex-development/colors' {
 *    interface ColorFunctions {}
 *  }
 */
interface ColorFunctions {
  bgBlack: ColorFunction
  bgBlackBright: ColorFunction
  bgBlue: ColorFunction
  bgBlueBright: ColorFunction
  bgCyan: ColorFunction
  bgCyanBright: ColorFunction
  bgGreen: ColorFunction
  bgGreenBright: ColorFunction
  bgMagenta: ColorFunction
  bgMagentaBright: ColorFunction
  bgRed: ColorFunction
  bgRedBright: ColorFunction
  bgWhite: ColorFunction
  bgWhiteBright: ColorFunction
  bgYellow: ColorFunction
  bgYellowBright: ColorFunction
  black: ColorFunction
  blackBright: ColorFunction
  blue: ColorFunction
  blueBright: ColorFunction
  bold: ColorFunction
  cyan: ColorFunction
  cyanBright: ColorFunction
  dim: ColorFunction
  gray: ColorFunction
  green: ColorFunction
  greenBright: ColorFunction
  hidden: ColorFunction
  inverse: ColorFunction
  italic: ColorFunction
  magenta: ColorFunction
  magentaBright: ColorFunction
  red: ColorFunction
  redBright: ColorFunction
  reset: ColorFunction
  strikethrough: ColorFunction
  underline: ColorFunction
  white: ColorFunction
  whiteBright: ColorFunction
  yellow: ColorFunction
  yellowBright: ColorFunction
}

export type { ColorFunctions as default }
