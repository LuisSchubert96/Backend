// criando classe lâmpada
class lâmpada {
    // método para ligar a lâmpada
    ligar() {
        this.estado = "ligada"
        console.log("A 💡 está ligada") // exibe mensagem ligada
    }
    // método para desligar a lâmpada
    desligar() {
        this.estado = "desligada"
        console.log("A 💡 está desligada") // exibe mensagem desligada
    }
}
// criando instância da lâmpada
let minhaLâmpada = new lâmpada()
minhaLâmpada.cor = "amarela"
// chamando métodos
minhaLâmpada.ligar()
minhaLâmpada.desligar()