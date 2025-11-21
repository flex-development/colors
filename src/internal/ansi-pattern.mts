/**
 * @file Internal - ANSI_PATTERN
 * @module colors/internal/ANSI_PATTERN
 */

/**
 * Regular expression pattern matching ANSI escape codes.
 *
 * @internal
 *
 * @const {string} ANSI_PATTERN
 */
const ANSI_PATTERN: string = [
  // osc sequences only.
  // valid string terminator sequences are BEL, ESC\, and 0x9c.
  '(?:\\u001B\\][\\s\\S]*?(?:\\u0007|\\u001B\\u005C|\\u009C))',
  // csi and related.
  // esc/c1, optional intermediates & params (supports ; and :), then final byte
  '[\\u001B\\u009B][[\\]()#;?]*(?:\\d{1,4}(?:[;:]\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]'
].join('|')

export default ANSI_PATTERN
