// importa o módulo express
const express = require('express')
//cria a aplicação express ( nosso servidor)
const app = express()
// definir a porta em que o serdor vai rodar
const porta = 5000

// falar ao express para servir arquivos estáticos da parta "public" ( iso significa que qualquer arquivo da pasta public será acessivel ao navegador)
app.use(express.static('public'))

// inicia o servidor, dizendo para escutar na porta especificada
// quando o servidor estiver rodando, ele executa a função callbak e imprime a mensagem
app.listen(porta, () => {
    console.log(`Servidor rodando na porta: http://localhost:${porta}`)
})

