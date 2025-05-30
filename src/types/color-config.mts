/**
 * @file Type Aliases - ColorConfig
 * @module colors/types/ColorConfig
 */

/**
 * List, where the first value is the numeric code for an ANSI escape sequence,
 * and the second is the numeric code for the reset sequence. The last value is
 * an optional replacement for the reset sequence (used in complex cases to nest
 * styles without breaking existing color sequences).
 */
type ColorConfig = [
  open: number,
  close: number,
  replace?: string | null | undefined
]

export type { ColorConfig as default }
