import { faker } from "@faker-js/faker";
import TestFactory from "../../fixtures/factory";
import 'cypress-xpath';
import { gerarNumeroTelefoneFalso, getCurrentDate } from '../../fixtures/dados-random'
import { gerarCPFFalsoValido } from '../../fixtures/dados-random'



context('', () => {
   
    const randomNome =TestFactory.gerarRandomNome()
    const dataHoje = getCurrentDate()

    it('Teste Faturamento', () => {
        cy.viewport(1440 * 0.9, 900 * 0.9);

        //Acesso ao Painel
        cy.visit("https://mastermilvusui.milvus.com.br");
        cy.get('.mb-3 > .input-group > .form-control')
            .type('lucas.carvalho1@teste.com', {force:true});
        cy.get(':nth-child(2) > .input-group > .form-control')
            .type('1234', {force:true});
        cy.wait(1000);
        cy.get('.btn').click({force:true});
        cy.wait(5000);

        //Rota de acesso ao menu de Cadastro de Contrato
        cy.visit('https://mastermilvusui.milvus.com.br/revenues/contracts')
        cy.get('.breadcrumb').should('include.text', 'Gerenciamento de Contratos')
        cy.get('.col-5 > .btn-success').click({force:true}).wait(5000)
        cy.get('.modal-body').should('include.text', 'Geral')
        cy.get('.col-12.ng-star-inserted > .form-group > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .click({force:true})
            .type('Milvus inova{enter}', {force:true}).wait(2000)
        cy.get(':nth-child(3) > .form-group > .form-control').type(randomNome)
        cy.get(':nth-child(4) > .form-group > select-padrao.ng-star-inserted > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .click({force:true})
            .type('Milvus{enter}', {force:true}).click({force:true})
        cy.get(':nth-child(5) > .form-group > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .click({force:true})
            .type('Mensal{enter}', {force:true})
        cy.xpath('/html/body/ngb-modal-window/div/div/app-modal-contrato/div/div[2]/div[2]/div[1]/div[6]/div/div/datepicker-padrao/div/input')
            .click({force:true}).type(`${dataHoje}{enter}`, {force:true})
        cy.get(':nth-child(8) > .form-group > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .click({force:true})
            .type('Real{enter}', {force:true})
        cy.get(':nth-child(9) > .form-group > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .click({force:true})
            .type('Dia 5{enter}', {force:true})
        cy.get(':nth-child(10) > .form-group > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .click({force:true})
            .type('2 dia{enter}', {force:true})
        cy.get(':nth-child(12) > .form-group > select-padrao.ng-star-inserted > .custom > .ng-select-container > .ng-value-container > .ng-input > input')
            .click({force:true})
            .type('Nota Fiscal e Boleto{enter}', {force:true}).wait(500)
        cy.get('.slider').click({force:true})
        cy.get(':nth-child(6) > .form-group > .form-control').select(0)
        cy.get(':nth-child(7) > .form-group > .form-control').select(0)
        cy.get(':nth-child(8) > .form-group > .form-control').trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .type('1000', {force:true});
        cy.get('#dropdownMenuButton').click({force:true})
        cy.get('[ng-reflect-translate="HORAS"]').click({force:true})
        cy.get(':nth-child(3) > .form-group > .row > .form-control').select(0)
        cy.get('.col-8 > .form-control').trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .type('15000', {force:true});
        cy.get('.form-group > .btn').click({force:true})
        cy.get(':nth-child(2) > .table-responsive').should('include.text', 'Tipo de Horas')
        cy.get('#button-basic').click({force:true}).wait(500)
        cy.get('.search-drop-cat-multi').type('Todos', {force:true})
        cy.get('.category-btn-not-child').click({force:true})
        cy.get(':nth-child(1) > :nth-child(4) > .form-control').trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .type('1000', {force:true});
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .type('2000', {force:true});
        cy.get('app-modal-cobranca-hora > .modal-content > .modal-footer > .btn').click({force:true})
        cy.get(':nth-child(5) > .col-12').should('not.be.empty')
        cy.get('.text-center > .btn').click({force:true})
        cy.get('.list > .ng-star-inserted > [ng-reflect-translate="HORAS"]').should('have.text', 'Horas')
        cy.get('.col-12 > .table-responsive > .table > .list > .ng-star-inserted > :nth-child(2)').should('not.be.empty')
        cy.get('#dropdownMenuButton').click({force:true})
        cy.get('[ng-reflect-translate="OUTROS"]').click({force:true})
        cy.get('app-modal-cobranca-outros-geral > .modal-content > .modal-body').should('not.be.empty')
        cy.get('.col-2 > .btn').click({force:true})
        cy.get('app-modal-cobranca-outros > .modal-content > .modal-header').should('have.text', 'Novo serviço')
        cy.get('.modal-body > :nth-child(1) > .col-12 > .form-group > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .select(0)
        cy.xpath('/html/body/ngb-modal-window[3]/div/div/app-modal-cobranca-outros/div/div[2]/div[2]/div[1]/div/div/datepicker-padrao/div/input')
            .click({force:true}).type(`${dataHoje}{enter}`, {force:true})
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-control').trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .type('5000', {force:true});
        cy.get('.modal-body > :nth-child(1) > .col-12 > .form-group > select-padrao > .custom > .ng-select-container > .ng-value-container > .ng-input > input').click({force:true})
            .select(1)
        cy.xpath('/html/body/ngb-modal-window[3]/div/div/app-modal-cobranca-outros/div/div[2]/div[2]/div[1]/div/div/datepicker-padrao/div/input')
            .click({force:true}).type(`${dataHoje}{enter}`, {force:true})
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-control').trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .trigger('mousedown', { button: 0 }).trigger('mouseup', { button: 0 })
            .type('5000', {force:true});
        cy.get('.mt-3 > .col-12').should('have.length', 2)
        cy.get('.text-center > .btn').click({force:true})
        cy.get('.col-12 > .table-responsive > .table').should('have.text', 'Outros')




        
    });
});
