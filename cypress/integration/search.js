/// <reference types="Cypress" />

describe("Search Validations", () => {

    it("Validate URL after search", () => {
        
        cy.visit("https://www.bitfinex.com/")
        cy.get('.bp3-tab-list a.landing-tickers__search', { timeout: 2000 })
        .click()
        cy.get('div.visible-desktop .bp3-input-group.landing-tickers__search-group > input', { timeout: 4000 })
        .type('Unus Sed Leo')
        cy.get('.symbol-col', { timeout: 5000 })
        .click()
        
        
        

    })
})