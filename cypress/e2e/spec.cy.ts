/// <reference types="cypress" />

import { contains } from "cypress/types/jquery"

describe('Cookie test', () => {
    beforeEach(() => {
        Cypress.Cookies.debug(true)

        cy.visit('index.html')

        // clear cookies again after visiting to remove
        // any 3rd party cookies picked up such as cloudflare
        cy.clearCookies()
    })

    it('shoud contains no cookies', () => {
        cy.getCookies().should('be.empty')
    })

    it("shoud show the banner", () => {
        cy.get('#dcc-container')
        cy.get('#dcc-overlay')
        cy.get('#dcc-banner')
    })

    it("shoud create cookie", () => {
        cy.get('#dcc-banner-accept-all').click()
        cy.getCookie('dcc').should('not.be.empty')
    })
})