describe('Página de Cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Ronaldo Cesar');
    cy.get('[data-test="input-email"]').type('ronaldocesar@teste.com.br');
    cy.get('[data-test="input-password"]').type('Senha12345');
    cy.get('[data-test="input-confirm-password"]').type('Senha12345');
    cy.get('[data-test="submit-button"]').click();

  })
})