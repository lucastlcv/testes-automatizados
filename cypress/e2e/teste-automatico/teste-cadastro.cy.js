import { faker } from "@faker-js/faker";
import TestFactory from "../../fixtures/factory";
import 'cypress-xpath';
import { gerarNumeroTelefoneFalso } from '../../fixtures/dados-random'
import { gerarCPFFalsoValido } from '../../fixtures/dados-random'
//import { templateSettings } from "cypress/types/lodash";


context('Teste Cadastro', () => {

    const randomNome = TestFactory.gerarRandomNome()
    const randomNascimento = TestFactory.gerarRandomAniversario()
    const randomEmail = TestFactory.generateRandomEmail()
    const randomPrimeiroNome = TestFactory.gerarRandomPrimeiroNome()
    const numeroTelefoneFalso = gerarNumeroTelefoneFalso();
    const cpfFalso = gerarCPFFalsoValido();
    
    it.only('Cadastro de Cliente', () => {
        cy.viewport(1440 * 0.9, 900 * 0.9);

        //Acesso ao Painel
        cy.visit("https://mastermilvusui.milvus.com.br");
        cy.get('.mb-3 > .input-group > .form-control')
            .type('lucas.carvalho1@teste.com', {force:true});
        cy.get(':nth-child(2) > .input-group > .form-control')
            .type('318c0abE@', {force:true});
        cy.wait(1000);
        cy.get('.btn').click({force:true});
        cy.wait(5000);

        //Rota de acesso ao Cadastro de Clientes
        cy.visit('https://mastermilvusui.milvus.com.br/registration/customers-list');
        cy.wait(1000);
        /*cy.get('#menu9 > .icon-sidenav').trigger('mouseover').click({ force: true })
        //cy.get('#menu9 > .icon-sidenav').click().should('be.visible')
        cy.get('#-registration-customers-list').click({ force: true })*/

        //Cadastro de Novo Cliente
        cy.get('.col-5 > .btn-success').click({force:true});
        cy.wait(1000);
        cy.get('#selectClientType').select('Físico', {force:true});
        cy.get('#inputNomeOuRazaoSocialCliente')
            .type(`${randomNome}{insert}`, {force:true});
        cy.get('#inputNomeFantasiaCliente')
            .type(`${randomNome}{insert}`, {force:true});
        cy.get('#formPaisCliente > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .click({force:true})
            .type('Brasil{enter}', {force:true});
        cy.get('#inputDocumentoCliente')
            .type(cpfFalso, {force:true});
        cy.get('#selectClienteEsporadico').select('Não', {force:true});
        cy.get('#selectSLACliente').select('Sim', {force:true});
        cy.get('#undefined > .ng-select-container').click({force:true});
        cy.get('[src="assets/img/icons/flags/BR.png"]').click({force:true});
        cy.get('#formTimezoneCliente > select-padrao > ng-select > div > div > div.ng-input > input[type=text]')
            .wait(500)
            .type('sao_paulo{insert}{enter}', {force:true})
            .wait(500)
        
        /*cy.get('#datePickerDataNascimentoCliente')
            .click()
        cy.get('input.ng-touched:nth-child(1)')
            .type('01/01/1990{enter}', {force:true})*/
        cy.get('#modalBodyCadastroCliente').scrollTo('bottom');
        cy.get('#formCustomerTeam > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .type('gerencia{enter}', {force:true});
        cy.get('#buttonAdicionarEquipeCliente').click({force:true});
        cy.get('#formCustomerGroup > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .type('Padrão{enter}', {force:true});
        cy.get('#buttonAddCustomerCategoryGroup').click({force:true}).wait(1000);
        cy.get('#buttonCadastrarClienteEContinuarEditando')
            .wait(1000)
            .click({force:true});
        cy.wait(10000);
        
        //Cadastro de informações no Cliente

        //Cadastro de Usuário Portal do Cliente
        cy.get('#btn-novo-usuario')
            .wait(1000)   
            .click({force:true})
        cy.wait(1000)
        cy.get('.modal-body > form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-group > label').should('include.text', 'Usuário (E-mail)')
        cy.wait(500)
        cy.get('form.ng-untouched > :nth-child(1) > :nth-child(1) > .form-group > .input-group > .form-control')
            .type(randomEmail, {force:true})
        cy.wait(500)
        cy.get('.input-group-append > button').click({force:true})
        cy.wait(500)
        cy.xpath('/html/body/ngb-modal-window/div/div/app-modal-usuario-cliente/div/div[2]/form/div[1]/div[2]/div/input').click({force:true})
          .type(`${randomNome}{insert}`, {force:true})
        cy.wait(1000)
        cy.get('.modal-footer > .btn').click({force:true})
        cy.wait(1000)
        cy.get('.swal2-popup').should('include.text', 'Atenção')
        cy.wait(500)
        cy.get('.swal2-confirm').click({force:true})
        cy.wait(500)
        cy.get('#usuarios > :nth-child(1) > .card-milvus > .table-responsive > .table > .thead-light > :nth-child(1) > .w-1 > .custom-control').click({force:true})
        cy.wait(1000)
        cy.get('#btn-convidar-usuario').click({force:true})
        cy.wait(500)
        cy.get('#toast-container > .ng-trigger').should('include.text', 'Convite enviado')
        
        //Cadastro Contato
        cy.get('#btn-adicionar-novo-contato').click({force:true})
        cy.wait(1000)
        cy.get('.modal-body').should('include.text', 'Descrição')
        cy.wait(1000)
        cy.get('.modal-body > :nth-child(1) > :nth-child(1) > .form-control').click({force:true})
            .type(`${randomNome}{insert}`, {force:true})
        cy.wait(1000)
        cy.get(':nth-child(1) > :nth-child(2) > #email').type(`${randomEmail}{insert}`, {force:true})
        cy.wait(1000)
        cy.get(':nth-child(2) > .col-4 > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('+55{enter}', {force:true})
        cy.wait(1000)
        cy.get(':nth-child(2) > .col-6 > .form-group > .form-control').type(numeroTelefoneFalso, {force:true})
        cy.get('.modal-body > :nth-child(3) > .form-group.ng-star-inserted > .form-control').type(numeroTelefoneFalso, {force:true})
        cy.get(':nth-child(3) > :nth-child(2) > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('Sim{enter}', {force:true})
        cy.get(':nth-child(3) > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('Sim{enter}', {force:true})
        cy.get('.modal-footer > .btn').click({force:true})
        cy.wait(500)

        //Cadatro de E-mail|Dominio
        cy.get('#btn-novo-email-dominio').click({force:true})
        cy.wait(1000)
        cy.get('#input-email').type(randomEmail, {force:true})
        cy.wait(1000)
        cy.get('#btn-verifica-email').click({force:true})
        cy.wait(1000)
        //cy.get('div > .switch > .slider').click({force:true})
        cy.get('#input-nome').type(randomNome, { force: true });
        cy.wait(500);
        cy.get('#textarea-descricao').type(randomNome, {force:true})
        cy.wait(1000)    
        cy.get('#btn-salvar-email-dominio').click({force:true})
        cy.wait(500)

        //Cadastro de Operador
        cy.visit('https://mastermilvusui.milvus.com.br/registration/operator-list')
        cy.wait(1000)
        cy.get('.breadcrumb').should('include.text', 'Operadores')
        cy.get('#btn-novo-operador').click({force:true})
        cy.wait(1000)
        cy.get('.modal-body').should('include.text', 'Informações básicas')
        cy.wait(1000)
        cy.get('#select-operador-visualizar-somente-filtros-dados-minhas-mesas > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('Não{enter}', {force:true})
        cy.wait(1000)
        cy.get('#select-operador-ver-tickets-minha-mesa > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('Sim{enter}', {force:true})
        cy.wait(1000)
        cy.get('#select-operador-email-diario-tarefa-agendada > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('Ativo{enter}', {force:true})
        cy.wait(1000)
        cy.get('#input-operador-nome').type(randomNome, {force:true})
        cy.get('#input-operador-email-envio').type(randomEmail, {force:true})
        cy.get('#input-operador-telefone').type(numeroTelefoneFalso, {force:true})
        cy.get('#input-operador-celular').type(numeroTelefoneFalso, {force:true})
        cy.get('#select-operador-conferencia-ticket > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('Sim{enter}', {force:true})
        cy.wait(1000)
        /*cy.get('#select-operador-aprovacao-tickets > .custom > .ng-select-container > .ng-value-container > .ng-input').click({force:true})
            .type('externo{enter}', {force:true});*/
        cy.wait(1000)
        cy.get('#select-operador-status > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('Ativo{enter}', {force:true})
        cy.wait(1000)    
        cy.get('#undefined > .ng-select-container > .ng-value-container > .ng-input').click({force:true})
        cy.get('[src="assets/img/icons/flags/BR.png"]').click({force:true});
        cy.wait(1000)
        cy.get('#select-operador-timezone > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .type('sao_paulo{insert}{enter}', {force:true});
        cy.wait(1000)
        cy.get('#input-operador-email-acesso').type(randomEmail, {force:true})
        cy.wait(1000)
        cy.get('#input-operador-senha').click({force: true})
            .wait(500)
            .type('123{insert}', {force: true});
        cy.wait(500);
        cy.get('#input-operador-confirmar-senha').type('123{insert}', {force: true});
        cy.wait(500);
        cy.get('#select-operador-tela-inicial > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true}) 
        cy.xpath('/html/body/ngb-modal-window/div/div/app-usuario/div/div[2]/div/form/div[7]/div[4]/div/select-padrao/ng-select/ng-dropdown-panel/div/div[2]/div[13]/span').click({force:true})
        cy.get('table-select.table-border-required > .row > :nth-child(1) > .table-border-required')
            /*.scrollTo('bottom', {force:true})
            .should('be.visible')*/
            .contains('Administrador').click({force:true});
        cy.get(':nth-child(1) > .justify-content-between > .btn').click({force:true})
        cy.get('#btn-salvar-operador').click({force:true});

        //Cadastro de Mesa de Trabalho
        cy.visit('https://mastermilvusui.milvus.com.br/tickets/work-desks-list')
        cy.get('.breadcrumb').should('include.text', 'Mesas de Trabalho').wait(500)
        cy.get('#btn-nova-mesa').wait(500).click({force:true})
        cy.get('.modal-body').should('include.text', 'Nome').wait(500)
        cy.get('#input-nome-mesa').wait(500).type(randomPrimeiroNome, {force:true})
        cy.get('.col-12 > .form-group > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input').type('Sem{enter}', {force:true})
        cy.get('#select-operador-mesa > .custom > .ng-select-container > .ng-value-container > .ng-input > input').type('Lucas{enter}', {force:true})
        cy.get('#btn-adicionar-tecnico').click({force:true}).wait(500)
        cy.get('#btn-salvar-mesa').click({force:true})


        //cy.contains('Nova Unidade').click();
    });
});