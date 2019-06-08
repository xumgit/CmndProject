import React from 'react'
import Button from '../../../src/test/pure-component.jsx'

/* eslint-env mocha */
describe('Button pure component', function () {
  it('works', function () {
    cy.mount(<Button>Hello</Button>)
    cy.contains('Hello')
    cy.wait(5000)
  })
})
