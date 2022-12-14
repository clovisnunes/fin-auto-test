/// <reference types="cypress" />

import env_data from '../../support/env_cypress';
import cli_loc from '../../support/cliente-locators';
import { faker } from '@faker-js/faker/locale/pt_BR';

describe('Deve testar e validar o cadastro de centro de custos', () => {

    beforeEach(() => {
        cy.visit(env_data.url)
        cy.get(cli_loc.MINHAS_EMPRESAS.EMPRESA('Kilback, Lebsack and Spinka')).click() // seleciona empresa dinamicamente pelo nome
        cy.xpath(cli_loc.MENU_LATERAL.FINANCEIRO).click()
        cy.xpath(cli_loc.MENU_LATERAL.CENTROS_CUSTO).click()
    })

    it('Cadastro de centro de custo', function() {



    })

})