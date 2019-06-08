import React from 'react'
import CounterWithHooks from '../../../src/test/counter-with-hooks.jsx'

/* eslint-env mocha */
describe('CounterWithHooks component', function () {
  it.skip('works', function () {
    cy.mount(<CounterWithHooks initialCount={3} />)
    cy.contains('3')
    cy.wait(5000)
  })
})
