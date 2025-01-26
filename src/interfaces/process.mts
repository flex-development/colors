/**
 * @file Interfaces - Process
 * @module colors/interfaces/Process
 */

import type { EmptyString } from '@flex-development/pathe'

/**
 * Object containing information about the current Node.js process.
 *
 * @internal
 */
interface Process {
  /**
   * List of command-line arguments passed when the Node.js process was
   * launched.
   */
  argv: string[]

  /**
   * Browser environment?
   */
  browser?: boolean | null | undefined

  /**
   * Object containing the user environment.
   *
   * > 👉 **Note**: On Windows operating systems, environment variables are
   * > case-insensitive.
   *
   * @see http://man7.org/linux/man-pages/man7/environ.7.html
   */
  env: NodeJS.ProcessEnv

  /**
   * String identifying the operating system platform for which the Node.js
   * binary was compiled.
   *
   * @see {@linkcode EmptyString}
   * @see {@linkcode Platform}
   *
   * @readonly
   */
  readonly platform: EmptyString | NodeJS.Platform
}

export type { Process as default }
