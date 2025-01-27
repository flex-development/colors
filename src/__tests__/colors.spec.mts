/**
 * @file Unit Tests - colors
 * @module colors/tests/unit/colors
 */

import testSubject from '#colors'
import { omit } from '@flex-development/tutils'

describe('unit:colors', () => {
  it('should be colorizer object', () => {
    expect(testSubject).to.have.property('color').be.a('boolean')
    expect(testSubject).to.have.property('supported').be.a('boolean')
    expect(omit(testSubject, ['color', 'supported'])).toMatchSnapshot()
  })
})
