/**
 * @file Unit Tests - createColors
 * @module colors/tests/unit/createColors
 */

import c from '#colors'
import testSubject from '#create-colors'
import fmt from '#fixtures/fmt'
import wrap from '#internal/wrap'
import type { ColorFunction, Colors } from '@flex-development/colors'

describe('unit:createColors', () => {
  describe('<color>', () => {
    let color: boolean
    let subject: Colors

    afterEach(() => {
      subject.color = color
    })

    beforeAll(() => {
      subject = testSubject(color = true)
    })

    it.each(fmt)('should return colorized `value` (%j)', (color, args) => {
      // Arrange
      const close: string = wrap(args[1])
      const open: string = wrap(args[0])

      // Expect
      expect(subject).to.have.property(color).be.a('function')
      expect(subject).to.have.nested.property(`${color}.close`, close)
      expect(subject).to.have.nested.property(`${color}.open`, open)
      expect(subject[color](color)).to.eq(open + color + close)
    })

    it.each(fmt)('should return `value` if color is disabled (%j)', (
      color,
      args
    ) => {
      // Arrange
      subject.color = false

      // Expect
      expect(subject).to.have.property('color').be.false
      expect(subject).to.have.property(color).be.a('function')
      expect(subject).to.have.nested.property(`${color}.close`, wrap(args[1]))
      expect(subject).to.have.nested.property(`${color}.open`, wrap(args[0]))
      expect(subject[color](color)).to.eq(color)
    })
  })

  describe('nesting', () => {
    let subject: Colors

    beforeAll(() => {
      subject = testSubject({ color: true })
    })

    it('should return colorized `value` with proper nesting', () => {
      expect(subject.bold(
        `BOLD ${subject.red(`RED ${subject.dim('DIM')} RED`)} BOLD`
      )).toMatchSnapshot()
    })
  })

  describe('replace close sequence', () => {
    it.each<Parameters<ColorFunction>>([
      [c.red(`foo ${c.yellow('bar')} baz`)],
      [c.bold(`foo ${c.red(c.dim('bar'))} baz`)],
      [c.yellow(`foo ${c.red(c.bold('red'))} bar ${c.cyan('cyan')} baz`)]
    ])('should handle close sequence replacement (%#)', value => {
      expect(value).toMatchSnapshot()
    })
  })

  describe('wrapping', () => {
    it.each<Parameters<ColorFunction>>([
      [c.red(c.bold('==TEST=='))],
      [c.bold(c.yellow(c.bgRed(c.italic('==TEST=='))))]
    ])('should return colorized `value` with proper wrapping (%#)', value => {
      expect(value).toMatchSnapshot()
    })
  })
})
