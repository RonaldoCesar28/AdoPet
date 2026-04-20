describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlYWU5MjUzOS1hNzE0LTQ1MzktYTMzMC0xYmU3ZjAyYmVlNGMiLCJhZG9wdGVyTmFtZSI6IlJvbmFsZG8gQ2VzYXIiLCJpYXQiOjE3NzY2NDc3NDcsImV4cCI6MTc3NjkwNjk0N30.uN4ilbKHRHVOzVkAVX4sqbwgTI4mlaJJtOgqNKe-7ew`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/eae92539-a714-4539-a330-1be7f02bee4c', // Atualize a URL aqui
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200); // A resposta da API deve retornar 200
            expect(res.body).is.not.empty; // A requisição não deve retornar com campo vazio
            expect(res.body).to.have.property('msg'); // O método property deve retornar todas as mensagens enviadas pelo usuário
        
        })
    })
})