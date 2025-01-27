/**
 * @file Internal - map
 * @module colors/internal/map
 */

import type { Color, ColorConfig } from '@flex-development/colors'

/**
 * Color function config map.
 *
 * @internal
 *
 * @const {Record<Color, ColorConfig>} map
 */
const map: Record<Color, ColorConfig> = {
  bgBlack: [40, 49],
  bgBlackBright: [100, 49],
  bgBlue: [44, 49],
  bgBlueBright: [104, 49],
  bgCyan: [46, 49],
  bgCyanBright: [106, 49],
  bgGreen: [42, 49],
  bgGreenBright: [102, 49],
  bgMagenta: [45, 49],
  bgMagentaBright: [105, 49],
  bgRed: [41, 49],
  bgRedBright: [101, 49],
  bgWhite: [47, 49],
  bgWhiteBright: [107, 49],
  bgYellow: [43, 49],
  bgYellowBright: [103, 49],
  black: [30, 39],
  blackBright: [90, 39],
  blue: [34, 39],
  blueBright: [94, 39],
  bold: [1, 22, '\x1b[22m\x1b[1m'],
  cyan: [36, 39],
  cyanBright: [96, 39],
  dim: [2, 22, '\x1b[22m\x1b[2m'],
  gray: [90, 39],
  green: [32, 39],
  greenBright: [92, 39],
  hidden: [8, 28],
  inverse: [7, 27],
  italic: [3, 23],
  magenta: [35, 39],
  magentaBright: [95, 39],
  red: [31, 39],
  redBright: [91, 39],
  reset: [0, 0],
  strikethrough: [9, 29],
  underline: [4, 24],
  white: [37, 39],
  whiteBright: [97, 39],
  yellow: [33, 39],
  yellowBright: [93, 39]
}

export default map
