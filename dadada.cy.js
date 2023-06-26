describe('Форма логина', function () {

    it('Верный логин ,верный пароль'), function() {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail'). type('german@dolnikov.ru');
        cy.get('#loginButton'). should('be.disabled');
        cy.get('#pass'). type('iLoveqastudio1');
        cy.get('#loginButton'). should('be.enabled');
        cy.get('#loginButton').click('');
        cy.contains('Авторизация прошла успешно');
        cy.get;('#exitMessageButton > img');
        cy.end();
        
    })

    it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').should('be.enabled')
        cy.get('#restoreEmailButton').click()
        cy.contains('#messageHeader')
        cy.get('#exitMessageButton > img')
        cy.end();
        ;
    })     
    it('Верный логин ,неверный пароль'), function() {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail'). type('german@dolnikov.ru');
            cy.get('#loginButton'). should('be.disabled');
            cy.get('#pass'). type('sadsadsadsad');
            cy.get('#loginButton'). should('be.enabled');
            cy.get('#loginButton').click('')
            cy.contains('#message')
            cy.get('#exitMessageButton > img')
    })
    it('Проблема валидации'), function() {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail'). type('asdadsadsd');
                cy.get('#loginButton'). should('be.disabled');
                cy.get('#pass'). type('iLoveqastudio1');
                cy.get('#loginButton'). should('be.enabled');
                cy.get('#loginButton').click('');
                cy.contains('#messageHeader');
                cy.get;('#exitMessageButton > img');
                cy.end();
    it('Верный логин ,неверный пароль'), function() {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail'). type('oddmarque@gmail.com');
                cy.get('#loginButton'). should('be.disabled');
                cy.get('#pass'). type('iLoveqastudio1');
                cy.get('#loginButton'). should('be.enabled');
                cy.get('#loginButton').click('')
                cy.contains('#messageHeader')
                cy.get('#exitMessageButton > img')
    }) 
