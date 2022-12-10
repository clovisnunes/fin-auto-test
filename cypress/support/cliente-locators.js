const cliente_locators = {

    MINHAS_EMPRESAS: {
        KILBACK: ':nth-child(1) > .organization-card > .ant-card-body'
    },

    MENU_LATERAL: {
        CONTATOS: ':nth-child(2) > .ant-menu-submenu-title',
        CLIENTES: 'body > app-root > app-common-layout > div > app-sidenav > perfect-scrollbar > div > div.ps-content > ul > li.ant-menu-submenu.ant-menu-submenu-inline.ng-star-inserted.ant-menu-submenu-open > ul > li:nth-child(1) > a'
    },

    CLIENTES: {
        BTN_CADASTRAR_CLIENTE: '.font-weight-normal > a > .anticon > svg',
        BTN_INATIVAR_CLIENTE: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > nz-input-group > div:nth-child(5) > div > nz-switch > button',
        BTN_CONCLUIR_CADASTRO: '.ant-row > .m-l-5',
        MSG_CLIENTE_CRIADO: '.ant-message-notice-content',
    },

    CLIENTES_DOC: {
        BTN_PF_PJ: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > div > nz-switch > button',
        CNPJ: ':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        RAZAO_SOC: '.ant-col-16 > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        NOME_FANTASIA: ':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        INSC_MUNICIPAL: ':nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        CPF: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > nz-input-group > app-natural-supplier-person-form > form > nz-card > div.ant-card-body > div > div.ant-col.ant-col-8 > nz-form-control > div > div > input',
        NOME_PF: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > nz-input-group > app-natural-supplier-person-form > form > nz-card > div.ant-card-body > div > div.ant-col.ant-col-16 > nz-form-control > div > div > input'
    },

    CLIENTES_ENDERECO: {
        BTN_ADC_ENDERECO: 'app-address-form.ng-star-inserted > form.ng-untouched > .ant-card > .ant-card-body > div.ng-star-inserted > .m-l-5',
        SLT_TIPO_ENDERECO: ':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector',
        OPC_SLT_RESIDENCIAL:    'nz-option-container nz-option-item[title="Residencial"]',
        OPC_SLT_COMERCIAL:      'nz-option-container nz-option-item[title="Comercial"]',
        CEP: 'form.ng-untouched > .ant-card > .ant-card-body > .ant-row > :nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        LOGRADOURO: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > nz-input-group > app-address-form > form > nz-card > div.ant-card-body > div > div:nth-child(3) > nz-form-control > div > div > input',
        BAIRRO: ':nth-child(6) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        ESTADO: ':nth-child(7) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item',
        CIDADE: ':nth-child(8) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item',
        NUMERO: 'form.ng-invalid > .ant-card > .ant-card-body > .ant-row > :nth-child(4) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        COMPLEMENTO: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > nz-input-group > app-address-form > form > nz-card > div.ant-card-body > div > div:nth-child(5) > nz-form-control > div > div > input'
    },

    CLIENTES_CONTATO: {
        BTN_ADC_CONTATO: 'app-contact-form.ng-star-inserted > form.ng-untouched > .ant-card > .ant-card-body > div.ng-star-inserted > .m-l-5',
        EMAIL: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > nz-input-group > app-contact-form > form > nz-card > div.ant-card-body > div > div:nth-child(1) > nz-form-control > div > div > nz-input-group > span > input',
        TELEFONE: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > nz-input-group > app-contact-form > form > nz-card > div.ant-card-body > div > div:nth-child(2) > nz-form-control > div > div > nz-input-group > span > input',
        OBSERVACOES: 'body > app-root > app-common-layout > div > div > div > app-customer-form > nz-tabset > div > div > div > nz-input-group > app-contact-form > form > nz-card > div.ant-card-body > div > div.ant-col.ant-col-10 > nz-form-control > div > div > nz-input-group > input'
    },

    CLIENTES_CONTAS: {
        BTN_ADC_CONTA: 'div.ng-star-inserted > .m-l-5',
        DESCRICAO: '.ant-col-24 > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        SLT_BANCO: ':nth-child(2) > :nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector',
        OPC_SLT_CAIXA:      'nz-option-container nz-option-item[title="Caixa"]',
        OPC_SLT_SANTANDER:  'nz-option-container nz-option-item[title="Santander"]',
        AGENCIA: ':nth-child(2) > :nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        NUMERO_CONTA: ':nth-child(2) > :nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input',
        DIGITO: '.ant-col-3 > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input'
    }

}

export default cliente_locators;