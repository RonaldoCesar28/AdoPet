describe('Testando Partes da Aplicação', () => {
  it('Deve carregar a página corretamente e clicar nos botões', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');

    // 1. Visite a página principal do AdoPet e clique no botão 'Ver pets disponiveis para adoção'
    cy.get('.button').click();

    // 2. Visite a página principal do AdoPet e teste os botões de home
    cy.get('.header__home').click();

    // 3. Visite a página de login do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');

    // 4. Visite a página de home do AdoPet
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');

    // 5. Visite a página de home do AdoPet e clique no botão falar como o responsável
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.header__message').click();

  })
})