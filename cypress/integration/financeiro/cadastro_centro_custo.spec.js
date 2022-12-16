/// <reference types="cypress" />

import env_data from '../../support/env_cypress';
import cli_loc from '../../support/cliente-locators';
import { faker } from '@faker-js/faker/locale/pt_BR';

// TODO organizar locator no arquivo support/financeiro-locators

describe('Deve testar e validar o cadastro de centro de custos', () => {

    const MAXIMO_SUBSETORES = 5

    const numero_subsetores = Math.floor(Math.random() * MAXIMO_SUBSETORES) + 1
    const numero_subsetores_removidos = Math.floor(Math.random() * numero_subsetores - 1)
    const statuses = ['ativo', 'inativo']

    let c_custo = {
        descricao: faker.random.words(),
        status_c_custo: statuses[Math.floor(Math.random() * statuses.length)],
        subsetores: [],
    }

    beforeEach(() => {
        cy.visit(env_data.url)
        cy.get(cli_loc.MINHAS_EMPRESAS.EMPRESA('Kilback, Lebsack and Spinka')).click() // seleciona empresa dinamicamente pelo nome
        cy.xpath(cli_loc.MENU_LATERAL.FINANCEIRO).click()
        cy.xpath(cli_loc.MENU_LATERAL.CENTROS_CUSTO).click()
    })

    it('Cadastro de centro de custo', function() {
        cy.get(cli_loc.CLIENTES.MSG_CLIENTE_CRIADO).should('not.be.visible')
        cy.get(cli_loc.FINANCEIRO.BTN_CADASTRAR_CCUSTO).click()

        cy.get('form input[type="text"]:eq(0)').type(c_custo.descricao)
        if(c_custo.status_c_custo == 'inativo') {
            cy.get('label:contains("Ativo"):eq(0)').click()
        }

        for(let i = 0; i < numero_subsetores; i++) {
            let subsetor_idx = {
                descricao: faker.random.words(),
                status: statuses[ Math.floor(Math.random() * statuses.length) ]
            }
            cy.get('div:has(div.ant-card-head-title:contains("Subsetores")) ~ div input[type="text"]:eq(' + i + ')')
                .type(subsetor_idx.descricao)
            if( subsetor_idx.status == 'inativo'  ) {
                cy.get('div:has(div.ant-card-head-title:contains("Subsetores")) ~ div input[type="checkbox"]:eq(' + i + ')')
                    .click()
            }
            if( i + 1 < numero_subsetores ) {
                cy.get('div:has(div.ant-card-head-title:contains("Subsetores")) ~ div button:has(i.anticon-plus):eq(' + i + ')')
                    .click()
            }
            c_custo.subsetores.push(subsetor_idx)
        }

        for(let i = numero_subsetores - 1; i >= numero_subsetores - numero_subsetores_removidos; i--) {
            cy.get('div:has(div.ant-card-head-title:contains("Subsetores")) ~ div button:has(i.anticon-delete):eq(' + i + ')')
                .click()

            c_custo.subsetores.pop()
        }

        console.log(c_custo)

        cy.get('button:has(span:contains("Salvar"))').click()
        
    })

    it('Validação do cadastro de centro de custo', function() {

        cy.get('label:contains("Descrição") ~ input').type(c_custo.descricao)
        cy.get('button:has(span:contains("Aplicar Filtros"))').click()
    })

})