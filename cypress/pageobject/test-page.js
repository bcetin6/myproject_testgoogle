export class testcase {
    navigate() {
        cy.visit('https://www.google.com/')
    }

    checkIcon() {
        cy.get('.lnXdpd').should('be.visible')
    }
    
}