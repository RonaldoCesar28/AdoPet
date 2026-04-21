import { ELEMENTS } from "./elements";

const el = ELEMENTS ;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get(el.registerButton).click();

    }
    preencherFormulario(){
        cy.get(el.nome).type('Ronaldo Cesar');
        cy.get(el.email).type('ronaldocesar@teste.com.br');
        cy.get(el.inputPassword).type('Senha12345');
        cy.get(el.confirmPassword).type('Senha12345');
    }
    submeterCadastro(){
        cy.get(el.submitButton).click();
    }
}

export default new Cadastro();