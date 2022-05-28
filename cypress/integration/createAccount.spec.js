describe('Cypress', () => {
    let username = Math.floor((Math.random() * 10000) + 1)
    let email = username + '@' + Math.floor((Math.random() * 10000) + 1) + '.com'
    it('Creates an account and logs in', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Sign Up')
        //Click Sign up Button to show form
        cy.get('.text-theme-green').click()

        //Enter information
        cy.get('[type="email"]').click().type(email)
        cy.get('[type="text"]').click().type(username)
        cy.get('[placeholder="Password"]').click().type('1234')
        cy.get('[placeholder="Repeat password"]').click().type('1234')

        //Click sign up to create account
        cy.get('.bg-theme-green').click()
        cy.wait(3000)

        //Sign in with new account
        cy.get('[type="email"]').click().type(email)
        cy.get('[placeholder="Password"]').click().type('1234')

        //Click Sign in
        cy.get('.bg-theme-green').click()
        cy.wait(500)

        //Fetch successful
        cy.contains('Dashboard')
        cy.contains('Platforms')
        cy.contains('Games')

        //Visit subpages
        cy.visit('http://localhost:3000/findbuddies')
        cy.wait(1000)
        cy.get('.grid > :nth-child(1)')

        cy.visit('http://localhost:3000/matches')
        cy.wait(1000)
        cy.contains('so what are you waiting for?')

        cy.visit('http://localhost:3000/inbox')
        cy.wait(1000)
        cy.contains('so what are you waiting for?')
        
    })
}) 