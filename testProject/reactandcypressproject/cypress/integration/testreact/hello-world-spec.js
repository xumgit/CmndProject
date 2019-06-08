import { HelloWorld } from '../../../src/test/hello-world.jsx'
import React from 'react'

/* eslint-env mocha */
describe('HelloWorld component', () => {
  it('works', () => {
    cy.mount(<HelloWorld />)
    cy.contains('Hello World!')
    cy.wait(5000)
  })
})
