/// <reference types="cypress" />

import env_data from '../../support/env_cypress';
import cli_loc from '../../support/cliente-locators';
import { faker } from '@faker-js/faker/locale/pt_BR';

describe('Deve testar e validar o cadastro de centro de custos', () => {

    const bancos = ['Caixa', 'Santander']
    const random_banco = Math.floor(Math.random() * bancos.length)

    let conta = {
        descricao: faker.random.words(),
        saldo_inicial: faker.datatype.number({max: 1000000}),
        banco: bancos[random_banco],
        agencia: faker.datatype.number({min:100000000, max:999999999}).toString().trim(),
        numero: faker.datatype.number({min:100000000, max:999999999}).toString().trim(),
        digito: faker.datatype.number({max:9}).toString().trim(),
    }

    beforeEach(() => {
        cy.visit(env_data.url)
        cy.get(cli_loc.MINHAS_EMPRESAS.EMPRESA('Kilback, Lebsack and Spinka')).click() // seleciona empresa dinamicamente pelo nome
        cy.xpath(cli_loc.MENU_LATERAL.FINANCEIRO).click()
        cy.xpath(cli_loc.MENU_LATERAL.CONTAS).click()
    })

    it('Cadastro de contas', function() {
        cy.get(cli_loc.FINANCEIRO.BTN_CADASTRAR_CONTAS).click()

        cy.get('input[formcontrolname="description"]').type(conta.descricao)
        cy.get('input[formcontrolname="initialBalance"]').type(conta.saldo_inicial)

        cy.get(cli_loc.CONTATOS_CONTAS.SLT_BANCO).click()
        if(conta.banco == 'Caixa') {
            cy.get(cli_loc.CONTATOS_CONTAS.OPC_SLT_CAIXA).click()
        } else if (conta.banco == 'Santander') {
            cy.get(cli_loc.CONTATOS_CONTAS.OPC_SLT_SANTANDER).click()
        }

        cy.get(cli_loc.CONTATOS_CONTAS.AGENCIA).type(conta.agencia)
        cy.get(cli_loc.CONTATOS_CONTAS.NUMERO_CONTA).type(conta.numero)
        cy.get(cli_loc.CONTATOS_CONTAS.DIGITO).type(conta.digito)
        
        cy.get('button:contains("Criar")').click()
    })

})