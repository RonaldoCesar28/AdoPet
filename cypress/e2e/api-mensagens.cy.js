describe('Api Adopet', () => {

    it('Mensagens da API', () => {

        cy.env(['authorization']).then((env) => {

            cy.request({
                method: 'GET',
                url: 'https://adopet-api-i8qu.onrender.com/mensagem/eae92539-a714-4539-a330-1be7f02bee4c', // Atualize a URL aqui
                headers: { authorization: env.authorization }
            }).then((res) => {
                expect(res.status).to.be.equal(200) // A resposta da API deve retornar 200
                expect(res.body).is.not.empty // A requisição não deve retornar com campo vazio
                expect(res.body).to.have.property('msg') // O método property deve retornar todas as mensagens enviadas pelo usuário
            })
        })
    })
})