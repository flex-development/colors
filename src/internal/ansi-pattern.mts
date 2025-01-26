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
  String
    .raw`[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)`,
  String.raw`(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))`
].join('|')

export default ANSI_PATTERN
