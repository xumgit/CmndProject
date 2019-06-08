import HelloWorld from '../../../src/test/stateless-alert.jsx'
import React from 'react'

/* eslint-env mocha */
describe('Stateless alert', () => {
  beforeEach(() => {
    const spy = cy.spy().as('alert')
    cy.on('window:alert', spy)
    cy.mount(<HelloWorld name='Alert' />)
    cy.wait(5000)
  })

  it('shows link', () => {
    cy.contains('a', 'Say Hi')
    cy.wait(5000)
  })

  it('alerts with name', () => {
    cy.contains('Say Hi').click()
    cy.get('@alert').should('have.been.calledOnce')
    cy.wait(5000)
  })
})
