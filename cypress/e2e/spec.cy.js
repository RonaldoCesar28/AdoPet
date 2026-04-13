describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Ronaldo Cesar');
    cy.get('input[name="email"]').type('ronaldocesar@teste.com.br');
    cy.get('input[name="password"]').type('Senha12345');
    cy.get('input[name="confirm_password"]').type('Senha12345');
    cy.contains('button', 'Cadastrar').click();
  })
})