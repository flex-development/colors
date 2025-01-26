declare namespace NodeJS {
  /**
   * User environment.
   *
   * @extends {Dict<string>}
   */
  interface ProcessEnv extends Dict<string> {
    /**
     * Continuous integration environment?
     */
    CI?: string | undefined

    /**
     * Enforce a specific color support.
     *
     * - `'0'`: 2 colors (disables colors)
     * - `'1'`: 16 colors
     * - `'2'`: 256 colors
     * - `'3'`: 16,777,216 colors colors
     */
    FORCE_COLOR?: string | undefined

    /**
     * Force a TTY (teletypewriter) interface, even when the standard output
     * isn't a terminal.
     *
     * Setting `FORCE_TTY` can enable colored output even in environments that
     * don't normally support it (e.g., CI/CD pipelines).
     */
    FORCE_TTY?: string | undefined

    /**
     * Disable color support.
     */
    NODE_DISABLE_COLORS?: string | undefined

    /**
     * Disable color support.
     */
    NO_COLOR?: string | undefined

    /**
     * Type of terminal being used.
     */
    TERM?: string | undefined
  }
}
