/// <reference types="cypress" />

describe('Cypress basics', () => {

    it('Deve se autenticar por meio de usuario e senha', () => {
        cy.visit('http://sso.pisomtech.com.br/suite')

        cy.get('#username').type('clovis', { force:true })
        cy.get('#password').type('PISOMtech2323*', { force:true })

        cy.pause()

        // cy.get('[style="width: 304px; height: 78px;"] > div > iframe').then(iframe => {
        //     const body = iframe.contents().find('body')
        //     cy.wrap.body.find('#recaptcha-anchor > div.recaptcha-checkbox-border').click()
        // })

        cy.get('.appearance-filled').click({force:true})

        cy.get('.suite').click()

    })

})