// criar api que se comunica através dos métodos HTTPs, importando o http (pacote vem do node | nativa)

const http = require('http')
// criando servidor que recebe requisição e responde, então inicia uma arrow function
http.createServer((request,response) => {
    // aqui a port que vai escutar a função (function) e também é onde vai responder, |response.end() finalizar, (mais nada a fazer)
    response.write('Hello, world!')
    response.end() 
}).listen(9090)