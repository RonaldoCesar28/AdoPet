describe('Página de Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
})
 
  it('Preencher os campos do cadastro corretamente e clicar no botão cadastrar', () => {
      cy.cadastrar('Ronaldo Cesar', 'ronaldocesar@teste.com.br', 'Senha12345')

  })
})