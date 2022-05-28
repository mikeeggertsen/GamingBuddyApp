describe('Cypress', () => {
    it('Tests editting profile', () => {
        cy.visit('http://localhost:3000')

        //Sign in with Cypress test account
        cy.get('[type="email"]').click().type('cypress@test.com')
        cy.get('[type="password"]').click().type('1234')
        cy.get('.bg-theme-green').click()
        cy.wait(500)

        //Click profile
        cy.get(':nth-child(5) > .items-center > .svg-inline--fa > path').click()
        cy.wait(500)

        //Edit Username and Bio
        cy.get('.my-6').click().clear().type('Cypress')
        cy.get('textarea.rounded-md').click().clear().type('Cypress automated test procedure: "Tests editting profile"')
        cy.get(':nth-child(3) > .flex-col > .text-white').click()

        //Add platforms to profile
        if(!cy.contains('Steam')){
            cy.get(':nth-child(6) > .text-md > .svg-inline--fa > path').click()
            cy.wait(500)
            cy.get('.scale-100 > .flex-col > .py-2').select('Steam')
            cy.get('.scale-100 > .flex-col > .bg-theme-green').click()
            cy.get('.scale-100 > .flex-row > .svg-inline--fa > path').click()
        }

        //add games to profile
        if(!cy.contains('World of Warcraft')){
            cy.get(':nth-child(9) > .text-md > .svg-inline--fa > path').click()
            cy.wait(500)
            cy.get('.scale-100 > .flex-col > .py-2').select('World of Warcraft')
            cy.get('.scale-100 > .flex-col > .bg-theme-green').click()
            cy.get('.scale-100 > .flex-row > .svg-inline--fa > path').click()
        }
    })
}) 