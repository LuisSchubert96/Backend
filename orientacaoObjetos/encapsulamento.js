class Conta{
    #saldo = 300 //propriedade privada
    constructor(nome){
        this.nome = nome
    }
    //método público para adicionar ao saldo
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor
            return `Depósito de R$ ${valor} realizado`
        }
        return 'Valor inválido para depósito'
    }
    //Método público para acessar o saldo
    obterSaldo(){
        return `O saldo é R$ ${this.#saldo}.`
    }
}
const conta = new Conta('Kaike')
conta.depositar(100)
console.log(conta.obterSaldo())
