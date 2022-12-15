const contatos_locators = {

    MINHAS_EMPRESAS: {
        EMPRESA(nome_empresa) {
            return 'div span:contains("' + nome_empresa + '")'
        }
    },

    MENU_LATERAL: {
        CONTATOS: '//ul/li/a/span[text()="Contatos"]/..',
        FINANCEIRO: '//ul/li/a/span[text()="Financeiro"]/..',

        CLIENTES: '//ul/li/a/span[text()="Clientes"]/..',
        FORNECEDORES: '//ul/li/a/span[text()="Fornecedores"]/..',
        FUNCIONARIOS: '//ul/li/a/span[text()="Funcionários"]/..',
        PRESTADORES: '//ul/li/a/span[text()="Prestadores de serviço"]/..',
        SOCIOS: '//ul/li/a/span[text()="Sócios"]/..',

        CENTROS_CUSTO: '//ul/li/a/span[text()="Centros de Custo"]/..',
        PLANOS_CONTA: '',
        CONTAS_PAGAR: '',
        CONTAS_RECEBER: '',
        CONTAS: '//ul/li/a/span[text()="Contas"]/..',
        RELATORIO: '',
    },

    CLIENTES: {
        BTN_CADASTRAR_CLIENTE: 'h2:contains("Clientes") a',
        BTN_CADASTRAR_FORNECEDORES: 'h2:contains("Fornecedores") a',
        BTN_CADASTRAR_FUNCIONARIO: 'h2:contains("Funcionários") a',
        BTN_CADASTRAR_PRESTADOR: 'h2:contains("Prestadores de Serviço") a',
        BTN_CADASTRAR_SOCIO: 'h2:contains("Sócios") a',

        BTN_INATIVAR_CLIENTE: 'nz-form-label:contains("Ativo") ~ nz-switch button',
        BTN_CONCLUIR_CADASTRO: 'button:contains("Salvar")',

        MSG_CLIENTE_CRIADO: '.ant-message-notice-content',
        BTN_APLICAR_FILTRO: 'button:has(span:contains("Aplicar Filtros"))',
        BTN_VISUALIZAR_CONTATO(nome_filtro) {
            return 'td:contains("' + nome_filtro + '") ~ td button:eq(0)'
        },
        BTN_EDITAR_CONTATO(nome_filtro) {
            return 'td:contains("' + nome_filtro + '") ~ td button:eq(1)'
        },
    },

    FINANCEIRO: {
        BTN_CADASTRAR_CCUSTO: 'h2:contains("Centros de Custos") a',
        BTN_CADASTRAR_P_CONTA: 'h2:contains("Planos de Conta") a',
        BTN_CADASTRAR_C_PAGAR: 'h2:contains("Contas a pagar") a',
        BTN_CADASTRAR_C_RECEBER: 'h2:contains("Contas a receber") a',
        BTN_CADASTRAR_CONTAS: 'h2:contains("Contas") a',

    },

    CONTATOS_DOC: {
        BTN_PF_PJ: 'nz-form-label:contains("Pessoa") ~ nz-switch button',
        CNPJ: 'input[formcontrolname="principalNumber"]',
        RAZAO_SOC: 'input[formcontrolname="principalName"]',
        NOME_FANTASIA: 'input[formcontrolname="tradeName"]',
        INSC_MUNICIPAL: 'input[formcontrolname="municipalRegister"]',
        CPF: 'input[formcontrolname="principalNumber"]',
        NOME_PF: 'input[formcontrolname="principalName"]'
    },

    CONTATOS_ENDERECO: {
        BTN_ADC_ENDERECO: '//label[text()="Adicionar Endereço"]/../../button',
        BTN_ADC_OUTRO_ENDERECO: '//div[text()="Informações de Endereço"]/../../../div//button/span[contains(text(), "+")]/..',
        BTN_REMOVER_ENDERECO(index) {
            return '(//div[text()="Informações de Endereço"]/../../../div//button/span[contains(text(), "-")]/..)[' + index + ']' // selecionar index
        },
        SLT_TIPO_ENDERECO: 'nz-form-label:contains("Tipo de Endereço") ~ nz-form-control',
        OPC_SLT_RESIDENCIAL:    'nz-option-container nz-option-item[title="Residencial"]',
        OPC_SLT_COMERCIAL:      'nz-option-container nz-option-item[title="Comercial"]',
        CEP: 'input[formcontrolname="taxNumber"]',
        LOGRADOURO: 'input[formcontrolname="street"]',
        BAIRRO: 'input[formcontrolname="neighborhood"]',
        ESTADO: 'nz-form-label:contains("Estado") ~ nz-form-control',
        CIDADE: 'nz-form-label:contains("Cidade") ~ nz-form-control',
        NUMERO: '//div[text()="Informações de Endereço"]/../../../div//input[@formcontrolname="number"]',
        COMPLEMENTO: 'input[formcontrolname="complement"]'
    },

    CONTATOS_CONTATO: {
        BTN_ADC_CONTATO: '//label[text()="Adicionar Contato"]/../../button',
        BTN_ADC_OUTRO_CONTATO: '//div[text()="Contato"]/../../../div//button/span[contains(text(), "+")]/..',
        BTN_REMOVER_CONTATO(index) {
            return '(//div[text()="Contato"]/../../../div//button/span[contains(text(), "-")]/..)[' + index + ']' // selecionar index
        },
        EMAIL: 'input[formcontrolname="email"]',
        TELEFONE: 'input[formcontrolname="number"][mask]',
        OBSERVACOES: 'input[formcontrolname="obs"]'
    },

    CONTATOS_CONTAS: {
        BTN_ADC_CONTA: '//label[text()="Adicionar Conta Bancária"]/../../button',
        BTN_ADC_OUTRA_CONTA: '//div[text()="Contas Bancárias"]/../../../div//button/span[contains(text(), "+")]/..',
        BTN_REMOVER_CONTA(index) {
            return '(//div[text()="Contas Bancárias"]/../../../div//button/span[contains(text(), "-")]/..)[' + index + ']' // selecionar index
        },
        DESCRICAO: 'input[formcontrolname="description"]',
        SLT_BANCO: 'nz-form-label:contains("Banco") ~ nz-form-control',
        EXCLUIR_BANCO: 'nz-form-label:contains("Banco") ~ nz-form-control svg[data-icon="close-circle"]',
        OPC_SLT_CAIXA:      'nz-option-container nz-option-item[title="Caixa"]',
        OPC_SLT_SANTANDER:  'nz-option-container nz-option-item[title="Santander"]',
        AGENCIA: 'input[formcontrolname="agencyNumber"]',
        NUMERO_CONTA: 'input[formcontrolname="accountNumber"]',
        DIGITO: 'input[formcontrolname="digit"]'
    }

}

export default contatos_locators;