class testPage{


    googleIcon(){
        return cy.get('.lnXdpd').should('be.visible');
    }
    
    searchIcon(){
        return cy.get('.QCzoEc > svg').should('be.visible');
    }

}
module.exports = new testPage();