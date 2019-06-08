import { HelloX, HelloState } from '../../../src/test/hello-x.jsx'
import React from 'react'

/* eslint-env mocha */
describe('HelloX component', () => {
  it('works', () => {
    cy.mount(<HelloX name='SuperMan' />)
    cy.contains('Hello SuperMan!')
    cy.wait(5000)
  })

  it('renders Unicode', () => {
    cy.mount(<HelloX name='🌎' />)
    cy.contains('Hello 🌎!')
    //cy.percySnapshot('Hello globe')
    cy.wait(1000)
    cy.wait(5000)
  })
})

describe('HelloState component', () => {
  it('changes state', () => {
    cy.mount(<HelloState />)
    cy.contains('Hello Spider-man!')
    const stateToSet = { name: 'React' }
    cy.get(HelloState).invoke('setState', stateToSet)
    cy.get(HelloState)
      .its('state')
      .should('deep.equal', stateToSet)
    cy.contains('Hello React!')
    cy.wait(5000)
  })
})
