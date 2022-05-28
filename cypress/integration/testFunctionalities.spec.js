describe('Cypress', () => {
    it('Tests if swiping is possible', () => {
        cy.visit('http://localhost:3000')

        //Sign in with Cypress test account
        cy.get('[type="email"]').click().type('cypress@test.com')
        cy.get('[type="password"]').click().type('1234')
        cy.get('.bg-theme-green').click()
        cy.wait(500)

        //Click find buddies
        cy.get(':nth-child(2) > .items-center > .svg-inline--fa > path').click()
        cy.wait(500)

        //Swipe left on the first buddy
        cy.get('.grid > :nth-child(1)')
        cy.get(':nth-child(1) > .justify-around > .bg-red-500 > .svg-inline--fa').click()
        cy.wait(2000)

        //swipe right on the new second buddy
        cy.get(':nth-child(2) > .justify-around > .bg-theme-green').click()
        cy.wait(2000)

    })
}) 