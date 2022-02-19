//import { testPage } from "../pageobject/test-page";

//const testPage = new testPage()


    it('Visit the URL', () => {
        cy.visit('https://www.google.com.tr/');
    });

describe('Checking UI', ()=>{

    it('Check GOOGLE icon', () =>{
        cy.get('.lnXdpd').should('be.visible'); //normal icon varken tekrar bak
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
        it('Check the button googleda ara', () =>{
            cy.visit('https://www.google.com/'); //bunu sonradan sil
            cy.get('.FPdoLc > center > .gNO89b').should('be.visible').contains("Google'da Ara");
            cy.get('.gLFyf').click().type('huawei');
            cy.get('[jsmodel=" vWNDde "]').click({ position:'topLeft'}); //disarida yere tikladim, covered problemini cozmek icin
            cy.get('.FPdoLc > center > .gNO89b').click();
            cy.go('back'); 

            
        })
        it('Check the button kendimi sansli hissediyorum', () => {
            cy.visit('https://www.google.com/'); //bunu sonradan sil
            cy.get('.FPdoLc > center > .RNmpXc').contains('Kendimi Şanslı Hissediyorum').click();
            cy.go('back');
        

        })

    })

    describe('Checking elements on the bottom of the page', ()=> {
        it('Check the location', ()=> {
            cy.get('.uU7dJb').contains('Türkiye');
        })
        it('Check carbon notr page', ()=> {
            cy.get('.Pb9hCb').should('be.visible');
            cy.get('.ktLKi').click();
            cy.go('back');
        })
        it('Check About button', ()=> {
            cy.get('[href="https://about.google/?utm_source=google-TR&utm_medium=referral&utm_campaign=hp-footer&fg=1"]').contains('Hakkında').should('be.visible');
        })
        it('Check Advertisement button', ()=> {
            cy.get('[href="https://www.google.com/intl/tr_tr/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"]').contains('Reklam').should('be.visible');
        })
        it('Check Management button', ()=> {
            cy.get('[href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1"]').contains('İşletme').should('be.visible');
        })
    })

}
)