//Importantdo o express 
const express = require('express')
//criando uma instancia do aplicativo express
const app = express()

//definindo uma rota para o endpoint raiz ('/')
//quando uma solicitação GET é feira para '/' essa funcao é executada
app.get('/', function(request, response){
//retorna uma resposta no formato JSON com uma mensagem de boas vindas
return response.json({
    message: 'Olá turma 5938!'
    })
})
// definindo uma rota para o endpoint 'projects
//quando uma solicitação GET é feita '/projects', a funcao a seguir é executada
app.get('/projects', function (request, response){
    return response.json([
        'Projeto 1',
        'Projeto 2'
    ])
})
//difinindo uma rota para criar um novo projeto
//quando uma solicitação do tipo POSTé feito para '/projects'
app.post('/projects',function(request, response){
    //retornar uma resposta com uma lista de projetos, incluindo o novo projeto
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})
// definindo uma rota para atualizar um projeto especifico
// o ':id' é um parametro de rota
app.put('/projects/:id', function(resquest, response){
    // retorna uma resposta JSON com a lista de projetos atualizada
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ])
})
// definindo uma rota para deletar um projeto especifico
app.delete('/projects/:id', function(resquest, response){
    // retorna uma resposta com a lsita de projetos após a exclusão de uma deles
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ])
})
//iniciando o servidor na porta 9093(para orientar o terminal que o servidor foi iniciado, vamos colocar uma mensagem)
app.listen(9093, () => {
    console.log('Servidor iniciando na porta 9093 🐱‍👤')
})