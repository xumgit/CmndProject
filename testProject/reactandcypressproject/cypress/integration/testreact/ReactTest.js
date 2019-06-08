describe('React Unit Test', () => {
    it('React Demo test', () => {
        cy.visit("/")
        cy.wait(3000)
        cy.get('.game-board > :nth-child(1) > :nth-child(1) > :nth-child(1)')
        .should('exist')
        .then(($firstDom) => {
            $firstDom.click()
        })
        cy.wait(2000)
        cy.get('.game-board > :nth-child(1) > :nth-child(2) > :nth-child(2)')
        .should('exist')
        .then(($secondDom) => {
            $secondDom.click()
        })
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(3)')
        .should('exist')
        .then(($thirdDom) => {
            $thirdDom.click()
        })
        cy.wait(5000)
    })
})