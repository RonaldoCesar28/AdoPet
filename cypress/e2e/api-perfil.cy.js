describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYWU5MjUzOS1hNzE0LTQ1MzktYTMzMC0xYmU3ZjAyYmVlNGMiLCJhZG9wdGVyTmFtZSI6IlJvbmFsZG8gQ2VzYXIiLCJpYXQiOjE3NzY3MjA2MzAsImV4cCI6MTc3Njk3OTgzMH0.Xe7lCZqaY-wQzJACxExOpdrJl58bQoIm8fg2x7Mdyvw`

    it('Perfil da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/eae92539-a714-4539-a330-1be7f02bee4c', // Atualize a URL aqui
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200); // A resposta da API deve retornar 200 com sucesso
            expect(res.body).is.not.empty; // A requisição não deve retornar com campo vazio
            expect(res.body).to.have.property('perfil'); // O método property deve retornar o perfil do usuário
            expect(res.body.perfil.nome).to.be.equal('Ronaldo Cesar'); // O método equal deve retornar o nome do usuário
        })
    })
})