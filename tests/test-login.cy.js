/// <reference types="cypress"/>

describe('teste funcional de login', () => {

   beforeEach(() =>{
    cy.visit("https://www.saucedemo.com/")
   })
    

    it('deve realizar o login com sucesso', () => {
        cy.login_test('standard_user','secret_sauce')
        cy.get('.title').should('contain','Products')
    });

    it('validando login incorreto', () => {
        cy.login_test('standard_user1','secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
        
    });

    it('validando senha incorreta', () => {
        cy.login_test('standard_user','secret_sauce1')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
        
    });
});