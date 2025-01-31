/**
 * @file Functional Tests - createColors
 * @module colors/functional/tests/unit/createColors
 */

import fmt from '#fixtures/fmt'
import testSubject from '#lib/create-colors'
import type { Color, Colors } from '@flex-development/colors'
import type { EmptyArray, Fn } from '@flex-development/tutils'
import { ok } from 'devlop'

describe('functional:lib/createColors', () => {
  describe('<color>', () => {
    let fn: Fn<[Color], Fn<EmptyArray, undefined>>
    let subject: Colors

    beforeAll(() => {
      subject = testSubject(true)

      ok(subject.supported, 'expected color to be supported')
      ok(subject.color, 'expected color to be enabled')

      fn = (color: Color): Fn<EmptyArray, undefined> => {
        Object.defineProperties(check, { name: { value: color } })
        return check

        /**
         * @this {void}
         *
         * @return {undefined}
         */
        function check(this: void): undefined {
          return void [import.meta.url].map(subject[color])
        }
      }
    })

    it.each(fmt)('should not throw when used as callback (%j)', color => {
      expect(fn(color)).to.not.throw()
    })
  })
})
