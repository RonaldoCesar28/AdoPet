describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
})

  it('Preencher os campos do login corretamente e autenticar o usuário na página', () => {
      cy.login('ronaldocesar@teste.com.br','Senha12345')
   
  })
})