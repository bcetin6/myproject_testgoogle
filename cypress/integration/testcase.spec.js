//import { testPage } from "../pageobject/test-page";

//const testPage = new testPage()


    it('Visit the URL', () => {
        cy.visit('https://www.google.com/');
    });

describe('Checking UI', ()=>{

    it('Check GOOGLE icon', () =>{
        cy.get('.lnXdpd').should('be.visible');
    });

    describe('Checking search bar elements', ()=>{
        it('Check the search icon', () => {
            cy.get('.QCzoEc > svg').should('be.visible');
        })
        it('Check the search by voice icon', ()=>{
            cy.get('.goxjub').should('be.visible');
        })
        it('Check the search bar input area', ()=>{
            cy.get('.SDkEP').should('be.visible');
            cy.get('.gLFyf').click();
            cy.get('.gLFyf').type('wikipedia{enter}');        
            cy.go('back');    
        })

    })

    describe('Checking the buttons below the search bar', () =>{
        it('Check the button "google search"', () =>{
            cy.get('.gNO89b').should('be.visible').contains("Google'da Ara").click();
            
        })
    })

}
)