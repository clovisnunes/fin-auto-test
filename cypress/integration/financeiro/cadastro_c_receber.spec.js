/// <reference types="cypress" />

import env_data from '../../support/env_cypress';
import cli_loc from '../../support/cliente-locators';
import { faker } from '@faker-js/faker/locale/pt_BR';

const NUMERO_REPETICOES_TESTE = 3

for(let i = 0; i < NUMERO_REPETICOES_TESTE; i++) {

    describe(`Deve testar e validar o cadastro de contas a pagar, iteração ${i+1}`, () => {

        const formas_pagto = ['Boleto', 'Outro', 'Nota Fiscal']
        const planos = ['Recebimento clientes', 'Recebimento consultoria', 'Dividendos']
        const info_adicionais = ['sim', 'nao']

        faker.date.future()
        const data_completa = faker.date.future()
        let month = data_completa.getMonth().toString()
        let day = data_completa.getDate().toString()

        if (month.length < 2) {
            month = '0' + month;
            if(month == '00') {
                month = '01'
            }
        }
        if (day.length < 2) {
            day = '0' + day;
            if(day == '00') {
                day = '01'
            }
        }
            

        const conta_pagar = {
            vencimento: data_completa.getFullYear().toString() + '-' + month + '-' + day,
            competencia: faker.date.future(),
            previsto: faker.date.future(),
            favorecido: 'Pereira, Oliveira e Carvalho',
            forma_pagamento: formas_pagto[Math.floor(Math.random() * formas_pagto.length)],
            numero_documento: faker.datatype.bigInt({min: 10000000000000000000000000000000000000000000000}, {max: 999999999999999999999999999999999999999999999999}).toString(),
            plano_conta: planos[Math.floor(Math.floor(Math.random() * planos.length))],
            descricao: faker.random.words(),
            centro_custo: 'marrom quantifying',
            valor: faker.datatype.number({max: 1000000}),
            info_adicional: info_adicionais[Math.floor(Math.random() * info_adicionais.length)],
            juros: faker.datatype.number({max: 1000000}),
            multa: faker.datatype.number({max: 1000000}),

        }

        beforeEach(() => {
            cy.visit(env_data.url)
            cy.get(cli_loc.MINHAS_EMPRESAS.EMPRESA('Kilback, Lebsack and Spinka')).click() // seleciona empresa dinamicamente pelo nome
            cy.xpath(cli_loc.MENU_LATERAL.FINANCEIRO).click()
            cy.xpath(cli_loc.MENU_LATERAL.CONTAS_RECEBER).click()
        })

        it('Cadastro de contas a pagar', function() {

            cy.get(cli_loc.FINANCEIRO.BTN_CADASTRAR_C_RECEBER).click()
            console.log(conta_pagar.vencimento)
            cy.get('input[formcontrolname="dueDate"]').type(conta_pagar.vencimento)
            cy.get('nz-form-label:contains("Cliente") ~ nz-form-control').type(conta_pagar.favorecido)
            cy.get('nz-option-item:has(div:contains("' + conta_pagar.favorecido + '"))').click()
            cy.get('nz-form-label:contains("Forma de Recebimento") ~ nz-form-control').click()
            cy.get('nz-option-item:has(div:contains("' + conta_pagar.forma_pagamento + '"))').click()
            cy.get('input[formcontrolname="documentNumber"]').type(conta_pagar.numero_documento)
            cy.get('nz-form-label:contains("Plano de Conta") ~ nz-form-control').type(conta_pagar.plano_conta)
            cy.get('nz-option-item:has(div:contains("' + conta_pagar.plano_conta + '"))').click()
            cy.get('input[formcontrolname="historicCharacter"]').type(conta_pagar.descricao)
            cy.get('nz-form-label:contains("Centro de Custo") ~ nz-select').click()
            cy.get('cdk-virtual-scroll-viewport').scrollTo('0%', '75%')
            cy.get('nz-option-item:has(div:contains("' + conta_pagar.centro_custo + '"))').click()
            cy.get('input[formcontrolname="valueDocument"]').type(conta_pagar.valor)

            if(conta_pagar.info_adicional == 'sim') {

                cy.get('nz-form-label:contains("Informações Adicionais") ~ nz-switch').click()
                cy.get('nz-collapse-panel').click()
                cy.get('nz-form-label:contains("Juros") ~ nz-form-control').type(conta_pagar.juros)
                cy.get('nz-form-label:contains("Multas") ~ nz-form-control').type(conta_pagar.multa)

            }

            cy.get('button:contains("Criar")').click()

        })

    })

}