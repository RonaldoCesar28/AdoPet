describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
})

  it('Preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
    
    cy.get('[data-test="input-loginEmail"]').type('ronaldo@teste');
    cy.get('[data-test="input-loginPassword"]').type('12345');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible');
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')

  })
})