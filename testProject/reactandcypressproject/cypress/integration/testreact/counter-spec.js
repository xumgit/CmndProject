import { Counter } from '../../../src/test/counter.jsx'
import React from 'react'

/* eslint-env mocha */
describe('Counter', () => {
  it('counts clicks', () => {
    cy.mount(<Counter />)
    cy.contains('count: 0')
      .click()
      .contains('count: 1')
      .click()
      .contains('count: 2')
    cy.wait(5000)
  })

  it('counts clicks 2', () => {
    cy.mount(<Counter />)
    cy.contains('count: 0')
      .click()
      .contains('count: 1')
      .click()
      .contains('count: 2')
    cy.wait(5000)
  })
})

describe('Counter cy.mounted before each test', () => {
  beforeEach(() => {
    cy.mount(<Counter />)
  })

  it('goes to 3', () => {
    cy.contains('count: 0')
      .click()
      .click()
      .click()
      .contains('count: 3')
    cy.wait(5000)
  })

  it('has count in state', () => {
    cy.contains('count: 0')
      .click()
      .click()
      .click()
    cy.get(Counter)
      .its('state')
      .should('deep.equal', { count: 3 })
    cy.wait(5000)
  })
})
