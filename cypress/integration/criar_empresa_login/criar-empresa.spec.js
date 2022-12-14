/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Deve testar o cadastro de empresas', () => {

    it('Não criar uma empresa', () => {
        cy.visit('http://finances.pisomtech.com.br/authentication/login?continue=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJjbG92aXMiLCJuYW1lIjoiQ2xvdmlzIiwiaXNBZG1pbmlzdHJhdG9yIjpmYWxzZSwiaXNSb290IjpmYWxzZSwiZW1haWwiOiJjbG92aXMubnVuZXNAcGlzb210ZWNoLmNvbS5iciIsImFwcHMiOlsiQVBQX0ZJTkFOQ0VTIl0sImlhdCI6MTY3MDUxMTUyNiwiZXhwIjoxNjcwNTI5NTI2fQ.bVT2pnxZbJZ22CenM0yWIHLwt4SbHMu94hxfJ53ufz4')

        cy.get('.button-new').click()

        cy.get('.ng-tns-c137-2 > .ant-input').type(faker.datatype.number({min: 10000000000000}))
        cy.get('.ng-tns-c137-3 > .ant-input').type(faker.company.name())

        cy.get('[nztype="default"]').click() // cancelar

        // TODO validar não criação da empresa

    })

    it('Criar uma empresa', () => {

        cy.visit('http://finances.pisomtech.com.br/authentication/login?continue=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJjbG92aXMiLCJuYW1lIjoiQ2xvdmlzIiwiaXNBZG1pbmlzdHJhdG9yIjpmYWxzZSwiaXNSb290IjpmYWxzZSwiZW1haWwiOiJjbG92aXMubnVuZXNAcGlzb210ZWNoLmNvbS5iciIsImFwcHMiOlsiQVBQX0ZJTkFOQ0VTIl0sImlhdCI6MTY3MDUxMTUyNiwiZXhwIjoxNjcwNTI5NTI2fQ.bVT2pnxZbJZ22CenM0yWIHLwt4SbHMu94hxfJ53ufz4')

        cy.get('.button-new').click()

        cy.get('.ng-tns-c137-2 > .ant-input').type(faker.datatype.number({min: 10000000000000}))
        cy.get('.ng-tns-c137-3 > .ant-input').type(faker.company.name())

        cy.get('.m-l-10').click() // concluir

        // TODO validar criação da empresa

    })

})

