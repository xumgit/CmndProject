import { HelloX, HelloState } from '../../../src/test/hello-x.jsx'
import { Users } from '../../../src/test/users.jsx'
import { ErrorBoundary } from '../../../src/test/error-boundary.jsx'
import React from 'react'

/* eslint-env mocha */
describe('HelloX component', () => {
  it('works', () => {
    cy.mount(<HelloX name='SuperMan' />)
    cy.contains('Hello SuperMan!')
  })

  it('renders Unicode', () => {
    cy.mount(<HelloX name='🌎' />)
    cy.contains('Hello 🌎!')
    cy.screenshot('Hello globe')
    //cy.percySnapshot('Hello globe')
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

/* eslint-env mocha */
context('Users', () => {
    describe('Component', () => {
      it('fetches 3 users from remote API', () => {
        cy.mount(<Users />)
        // fetching users can take a while
        cy.get('li', { timeout: 20000 }).should('have.length', 3)
        cy.wait(5000)
      })
    })
  
    describe('Network State', () => {
      beforeEach(() => {
        cy.server()
        // cy.mount the component after defining routes in tests
        // preventing race conditions where you wait on untouched routes
      })
  
      it('can inspect real data in XHR', () => {
        cy.route('/users?_limit=3').as('users')
        cy.mount(<Users />)
        cy.wait('@users')
          .its('response.body')
          .should('have.length', 3)
        cy.wait(5000)
      })
  
      it('can display mock XHR response', () => {
        const users = [{ id: 1, name: 'foo' }]
        cy.route('GET', '/users?_limit=3', users).as('users')
        cy.mount(<Users />)
        cy.get('li')
          .should('have.length', 1)
          .first()
          .contains('foo')
        cy.wait(5000)
      })
  
      it('can inspect mocked XHR', () => {
        const users = [{ id: 1, name: 'foo' }]
        cy.route('GET', '/users?_limit=3', users).as('users')
        cy.mount(<Users />)
        cy.wait('@users')
          .its('response.body')
          .should('deep.equal', users)
        cy.wait(5000)
      })
  
      it('can delay and wait on XHR', () => {
        const users = [{ id: 1, name: 'foo' }]
        cy.route({
          method: 'GET',
          url: '/users?_limit=3',
          response: users,
          delay: 1000
        }).as('users')
        cy.mount(<Users />)
        cy.get('li').should('have.length', 0)
        cy.wait('@users')
        cy.get('li').should('have.length', 1)
        cy.wait(5000)
      })
    })
  })

  /* eslint-env mocha */
describe('Error Boundary', () => {
    const errorMessage = 'I crashed!'
    const ChildWithoutError = () => <h1>Normal Child</h1>
    const ChildWithError = () => {
      throw new Error(errorMessage)
      return null
    }
  
    it('renders normal children', () => {
      cy.mount(
        <ErrorBoundary>
          <ChildWithoutError />
        </ErrorBoundary>
      )
      cy.get('h1').should('have.text', 'Normal Child')
      cy.get(ErrorBoundary)
        .its('state.error')
        .should('not.exist')
    })
  
    it('on error, display fallback UI', () => {
      cy.mount(
        <ErrorBoundary>
          <ChildWithError />
        </ErrorBoundary>
      )
      cy.get('header h1').should('contain', 'Something went wrong.')
      cy.get('header h3').should('contain', 'failed to load')
      cy.get(ErrorBoundary)
        .its('state.error.message')
        .should('equal', errorMessage)
      cy.get(ErrorBoundary)
        .its('state.error.stack')
        .should('contain', 'ChildWithError')
    })
})
  
