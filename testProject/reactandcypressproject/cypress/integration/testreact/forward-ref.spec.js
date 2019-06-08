import React from 'react'
import Button from '../../../src/test/forward-ref.jsx'

/* eslint-env mocha */
describe('Button component', function () {
  it('works', function () {
    cy.mount(<Button>Hello, World</Button>)
    cy.contains('Hello, World')
    cy.wait(5000)
  })

  it('forwards refs as expected', function () {
    const ref = React.createRef();

    cy.mount(<Button className="testing" ref={ref}>Hello, World</Button>);
    expect(ref).to.have.property('current');
    // expect(ref.current).not.be.null;
    cy.wait(5000)
  })
})
