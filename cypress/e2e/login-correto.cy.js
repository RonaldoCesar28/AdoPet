describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
})

  it('Preencher os campos do login corretamente e autenticar o usuário na página', () => {
    
    cy.get('[data-test="input-loginEmail"]').type('ronaldocesar@teste.com.br');
    cy.get('[data-test="input-loginPassword"]').type('Senha12345');
    cy.get('[data-test="submit-button"]').click();

  })
})