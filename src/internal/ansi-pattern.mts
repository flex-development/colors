/**
 * @file Internal - ANSI_PATTERN
 * @module colors/internal/ANSI_PATTERN
 */

/**
 * Human-readable regular expression pattern matching ANSI escape codes.
 *
 * @internal
 *
 * @const {string} ANSI_PATTERN
 */
const ANSI_PATTERN: string = String.raw`
  (?<ansi>
    # === OSC (Operating System Command) ===
    (?:
      (?<osc>
        (?<osc_introducer>[\u001B\u009B])\]         # ESC ] or CSI ]
        (?<osc_command>\d{1,4})                     # command number (e.g. 8)
        (?<osc_sep>;)?
        (?<osc_data>                                # everything until BEL or ST
          (?:
            (?!\u0007|(?:\u001B\\))                 # not BEL or ESC \
            [\s\S]
          )*
        )
        (?<osc_terminator>\u0007|\u001B\\)          # BEL or ST
      )
    )

    |

    # === CSI (Control Sequence Introducer) ===
    (?:
      (?<csi>
        (?<csi_introducer>[\u001B\u009B])\[          # ESC [
        (?<csi_params>[0-9]{0,4}(?:;[0-9]{0,4})*)?   # numbers + ;
        (?<csi_intermediate>[\x20-\x2F]*)            # intermediates
        (?<csi_final>[\x40-\x7E])                    # final command byte
      )
    )

    |

    # === ESC single-character ===
    (?:
      (?<esc>
        \u001B(?<esc_final>[A-PR-TZcf-nq-uy=><~])
      )
    )
  )
`

export default trim(ANSI_PATTERN)

/**
 * Remove comments and whitespace from pattern.
 *
 * @internal
 *
 * @this {void}
 *
 * @param {string} pattern
 *  The regular expression pattern to trim
 * @return {string}
 *  The trimmed `pattern`
 */
function trim(this: void, pattern: string): string {
  return pattern.replace(/\s+#.*$/gm, '').replace(/\s+/g, '')
}
