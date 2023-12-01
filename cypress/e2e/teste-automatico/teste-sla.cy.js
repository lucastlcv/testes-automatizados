import { faker } from "@faker-js/faker";
import TestFactory from "../../fixtures/factory";
import 'cypress-xpath';
import { gerarNumeroTelefoneFalso } from '../../fixtures/dados-random'
import { gerarCPFFalsoValido } from '../../fixtures/dados-random'

context('Teste SLA', () => {
    it.only('Configuração SLA', () => {
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

        //Configuração SLA
        cy.visit('https://mastermilvusui.milvus.com.br/tickets/sla-settings')
        cy.get('.slider').click({force:true}).wait(2000)
        cy.get('.ng-trigger').should('include.text', 'Salvo com sucesso!')
        //cy.get('.card-body-milvus > .ng-star-inserted').should('have.text', 'SLA habilitado')
        cy.get(':nth-child(1) > hourpicker-padrao > .input-group > .form-control').click({force:true}).clear({force:true}).type('0100')
        cy.get(':nth-child(2) > hourpicker-padrao > .input-group > .form-control').click({force:true}).clear({force:true}).type('0100')
        cy.get(':nth-child(3) > .bg-white > :nth-child(1) > .col-xl-12 > .card-milvus > .card-header-milvus > .col-3 > .btn').click({force:true})
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > .text-right > .btn').click({force:true})
        cy.get('.modal-body').should('include.text', 'Crítico')
        cy.get('.modal-body > .row > :nth-child(1) > hourpicker-padrao > .input-group > .form-control').click({force:true}).clear({force:true}).type('0200')
        cy.get('.modal-body > .row > :nth-child(2) > hourpicker-padrao > .input-group > .form-control').click({force:true}).clear({force:true}).type('0200')
        cy.get('.modal-footer > .btn').click({force:true})
        cy.get(':nth-child(5) > .bg-white > :nth-child(1) > :nth-child(1) > .card-milvus > .card-header-milvus > .col-5 > .btn').click({dorce:true})
        cy.get('.modal-body').should('include.text', 'Categorias')
        cy.get('#button-basic').click({force:true})
        cy.get('#ngb-accordion-item-736 > :nth-child(1) > .d-flex > .category-name').click({force:true})

    });
    
});