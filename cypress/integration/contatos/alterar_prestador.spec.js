/// <reference types="cypress" />

import { faker } from '@faker-js/faker/locale/pt_BR';
import cli_loc from '../../support/cliente-locators';
import {cpf, cnpj} from '../../support/gerador_CPF_CNPJ'
import env_data from '../../support/env_cypress';

describe('Deve testar a edição de prestadores de serviço', () => {
   
    // dados aleatórios
    const tipos_endereco = ['Residencial', 'Comercial']
    const random_t_endereco = Math.floor(Math.random() * tipos_endereco.length)
    const bancos = ['Caixa', 'Santander']
    const random_banco = Math.floor(Math.random() * bancos.length)
    const statuses = ['ativo', 'inativo']
    const random_status = Math.floor(Math.random() * statuses.length)
    let cliente = {}
    const random_cep = Math.floor(Math.random() * 10)
    const random_client_index_grid = Math.floor(Math.random() * 20)

    cliente = {
        tipo_pessoa: 'juridica',
        cnpj : cnpj(true),
        cpf: cpf(true),
        nome_pf: faker.name.fullName(),
        razao_social: faker.company.name(),
        nome_fantasia: faker.company.companySuffix(),
        inscricao_munic: faker.datatype.number({min: 100000000, max: 999999999}).toString().trim(),
        
        // endereco
        tipo_endereco: tipos_endereco[random_t_endereco],
        numero_endereco: faker.datatype.number({max: 2999}).toString().trim(),
        complemento: faker.random.words(),

        //contato
        email: faker.internet.email(),
        numero_telefone: faker.phone.number('(##) 9####-####'),
        observacoes: faker.random.words(),
        
        //contas bancarias
        descricao: faker.random.words(),
        banco: bancos[random_banco],
        agencia: faker.datatype.number({min:100000000, max:999999999}).toString().trim(),
        numero_conta: faker.datatype.number({min:100000000, max:999999999}).toString().trim(),
        digito: faker.datatype.number({max:9}).toString().trim(),
        
        // ativo ou inativo
        status: statuses[random_status]
    }

    let cliente_a_ser_alterado = {}

    beforeEach(() => {
        cy.visit(env_data.url)
        cy.get(cli_loc.MINHAS_EMPRESAS.EMPRESA('Kilback, Lebsack and Spinka')).click() // seleciona empresa dinamicamente pelo nome
        cy.xpath(cli_loc.MENU_LATERAL.CONTATOS).click()
        cy.xpath(cli_loc.MENU_LATERAL.PRESTADORES).click()
    })

    it('Alteração de prestador de serviço', function() {

        // selecionando o cliente a ser alterado
        cy.get(cli_loc.CLIENTES.MSG_CLIENTE_CRIADO).should('not.be.visible')

        cy.get('table tbody tr:eq(' + random_client_index_grid +')').then(($tr_cliente) => {
            cliente_a_ser_alterado.nome = $tr_cliente.find("td:eq(0)").text()
            cliente_a_ser_alterado.doc = $tr_cliente.find("td:eq(1)").text()
            cliente_a_ser_alterado.tipo_pessoa = $tr_cliente.find("td:eq(2)").text() == "F" ? 'fisica' : 'juridica'
        
            cy.get(cli_loc.CONTATOS_DOC.NOME_PF).type(cliente_a_ser_alterado.nome)
        
            cy.get(cli_loc.CLIENTES.BTN_APLICAR_FILTRO).click()
            cy.get(cli_loc.CLIENTES.BTN_EDITAR_CONTATO(cliente_a_ser_alterado.nome)).click()

            // efetuando alterações nos campos
            // validando tipo de pessoa e preenchendo os dados de acordo
            cy.get(cli_loc.CONTATOS_DOC.CNPJ).clear().type(cliente.cnpj)
            cy.get(cli_loc.CONTATOS_DOC.RAZAO_SOC).clear().type(cliente.razao_social)
            cy.get(cli_loc.CONTATOS_DOC.NOME_FANTASIA).clear().type(cliente.nome_fantasia)
            cy.get(cli_loc.CONTATOS_DOC.INSC_MUNICIPAL).clear().type(cliente.inscricao_munic)
            
        
        })

        
        
        // endereço
        // escolhendo cep aleatorio da fixture ceps.json e preenchendo os campos
        cy.fixture('ceps').as('ceps').then(() => {
            cliente.cep = this.ceps[random_cep].cep
            cliente.logradouro = this.ceps[random_cep].logradouro
            cliente.bairro = this.ceps[random_cep].bairro
            cliente.cidade = this.ceps[random_cep].cidade
            cliente.estado = this.ceps[random_cep].estado

            cy.get(cli_loc.CONTATOS_ENDERECO.CEP).clear().type(cliente.cep)

            // validação do endereço preenchido pelo cep
            cy.get(cli_loc.CONTATOS_ENDERECO.LOGRADOURO).should( 'have.value', cliente.logradouro)
            cy.get(cli_loc.CONTATOS_ENDERECO.BAIRRO).should( 'have.value', cliente.bairro)
            cy.get(cli_loc.CONTATOS_ENDERECO.ESTADO).should( 'have.text', cliente.estado)
            cy.get(cli_loc.CONTATOS_ENDERECO.CIDADE).should( 'have.text', cliente.cidade)
        })
        
        // inserindo numero e complemento do endereco
        cy.xpath(cli_loc.CONTATOS_ENDERECO.NUMERO).clear().type(cliente.numero_endereco)
        cy.get(cli_loc.CONTATOS_ENDERECO.COMPLEMENTO).clear().type(cliente.complemento)

        // selecionando tipo de endereço: comercial ou residencial
        cy.get(cli_loc.CONTATOS_ENDERECO.SLT_TIPO_ENDERECO).click()
        if(cliente.tipo_endereco == 'Residencial') {
            cy.get(cli_loc.CONTATOS_ENDERECO.OPC_SLT_RESIDENCIAL).click()
        } else {
            cy.get(cli_loc.CONTATOS_ENDERECO.OPC_SLT_COMERCIAL).click()
        }

        // contato
        cy.get(cli_loc.CONTATOS_CONTATO.EMAIL).clear().type(cliente.email)
        cy.get(cli_loc.CONTATOS_CONTATO.TELEFONE).clear().type(cliente.numero_telefone)
        cy.get(cli_loc.CONTATOS_CONTATO.OBSERVACOES).clear().type(cliente.observacoes)

        // contas bancarias
        cy.get(cli_loc.CONTATOS_CONTAS.DESCRICAO).clear().type(cliente.descricao)
        
        cy.get(cli_loc.CONTATOS_CONTAS.EXCLUIR_BANCO).click()
        cy.get(cli_loc.CONTATOS_CONTAS.SLT_BANCO).click()
        if(cliente.banco == 'Caixa') {
            cy.get(cli_loc.CONTATOS_CONTAS.OPC_SLT_CAIXA).click()
        } else if (cliente.banco == 'Santander') {
            cy.get(cli_loc.CONTATOS_CONTAS.OPC_SLT_SANTANDER).click()
        }

        cy.get(cli_loc.CONTATOS_CONTAS.AGENCIA).clear().type(cliente.agencia)
        cy.get(cli_loc.CONTATOS_CONTAS.NUMERO_CONTA).clear().type(cliente.numero_conta)
        cy.get(cli_loc.CONTATOS_CONTAS.DIGITO).clear().type(cliente.digito)

        
        cy.get(cli_loc.CLIENTES.BTN_INATIVAR_CLIENTE).then(($switch_button) => {

            if($switch_button.hasClass("ant-switch-checked") && cliente.status == 'inativo') {
                cy.wrap($switch_button).click()
                console.log("Clicado pq switch_button.hasClass(ant-switch-checked) && cliente.status == 'inativo'")
            } else if($switch_button.not(".ant-switch-checked") && cliente.status == 'ativo') {
                cy.wrap($switch_button).click()
                console.log("Clicado pq switch_button.not(.ant-switch-checked) && cliente.status == 'ativo'")
            } else {
                console.log("Não foi clicado!")
            }
        })

        // concluir e validar mensagem de sucesso
        cy.get(cli_loc.CLIENTES.BTN_CONCLUIR_CADASTRO).click()
        cy.get(cli_loc.CLIENTES.MSG_CLIENTE_CRIADO).should('have.text', 'Prestador de serviço salvo com sucesso!')

    })

    it('Validação da alteração do prestador de serviço', function() {
        cy.get(cli_loc.CLIENTES.MSG_CLIENTE_CRIADO).should('not.be.visible')

        // busca do fornecedor para validação
        cy.get(cli_loc.CONTATOS_DOC.CNPJ).type(cliente.cnpj)
        cy.get(cli_loc.CONTATOS_DOC.RAZAO_SOC).type(cliente.razao_social)
        cy.get(cli_loc.CLIENTES.BTN_APLICAR_FILTRO).click()
        cy.get(cli_loc.CLIENTES.BTN_VISUALIZAR_CONTATO(cliente.razao_social)).click()

        // validando informações de documentação
        cy.get(cli_loc.CONTATOS_DOC.CNPJ).should('have.value', cliente.cnpj)
        cy.get(cli_loc.CONTATOS_DOC.RAZAO_SOC).should('have.value', cliente.razao_social)
        cy.get(cli_loc.CONTATOS_DOC.NOME_FANTASIA).should('have.value', cliente.nome_fantasia)
        cy.get(cli_loc.CONTATOS_DOC.INSC_MUNICIPAL).should('have.value', cliente.inscricao_munic)

        // validando informações de endereço
        cy.get(cli_loc.CONTATOS_ENDERECO.SLT_TIPO_ENDERECO).should('have.text', cliente.tipo_endereco)
        cy.get(cli_loc.CONTATOS_ENDERECO.CEP).should('have.value', cliente.cep)
        cy.get(cli_loc.CONTATOS_ENDERECO.LOGRADOURO).should('have.value', cliente.logradouro)
        cy.xpath(cli_loc.CONTATOS_ENDERECO.NUMERO).should('have.value', cliente.numero_endereco)
        cy.get(cli_loc.CONTATOS_ENDERECO.COMPLEMENTO).should('have.value', cliente.complemento)
        cy.get(cli_loc.CONTATOS_ENDERECO.BAIRRO).should('have.value', cliente.bairro)
        cy.get(cli_loc.CONTATOS_ENDERECO.ESTADO).should('have.text', cliente.estado)
        cy.get(cli_loc.CONTATOS_ENDERECO.CIDADE).should('have.text', cliente.cidade)

        // validando informações de contato
        cy.get(cli_loc.CONTATOS_CONTATO.EMAIL).should('have.value', cliente.email)
        cy.get(cli_loc.CONTATOS_CONTATO.TELEFONE).should('have.value', cliente.numero_telefone)
        // cy.get(cli_loc.CONTATOS_CONTATO.OBSERVACOES).should('have.value', cliente.observacoes)

        // validando informações de conta bancária
        cy.get(cli_loc.CONTATOS_CONTAS.DESCRICAO).should('have.value', cliente.descricao)
        cy.get(cli_loc.CONTATOS_CONTAS.SLT_BANCO).should('have.text', cliente.banco)
        cy.get(cli_loc.CONTATOS_CONTAS.AGENCIA).should('have.value', cliente.agencia)
        cy.get(cli_loc.CONTATOS_CONTAS.NUMERO_CONTA).should('have.value', cliente.numero_conta)
        cy.get(cli_loc.CONTATOS_CONTAS.DIGITO).should('have.value', cliente.digito)
        
        // validando se o cliente esta ativo ou inativo
        if(cliente.status == 'ativo') {
            cy.get(cli_loc.CLIENTES.BTN_INATIVAR_CLIENTE)
                .should('have.class', 'ant-switch-checked')
        } else {
            cy.get(cli_loc.CLIENTES.BTN_INATIVAR_CLIENTE)
                .should('not.have.class', 'ant-switch-checked')
        }

    })

})