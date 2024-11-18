class Pessoa{
    #nome
    #idade
    constructor(nome,idade){
        this.#nome = nome
        this.#idade = idade
    }
    definirIdade(novaIdade){
        if(novaIdade > 0){
            this.#idade = novaIdade
            return `A nova idade é: ${novaIdade}`
        }
        else{
        return 'Idade recusada'
        }
    }
    mostrarInformacoes(){
        return `O nome é ${this.#nome} e a idade é de ${this.#idade} anos`
    }
}
const pessoa = new Pessoa('Luís',28)
console.log(pessoa.mostrarInformacoes())
console.log(pessoa.definirIdade(30))
console.log(pessoa.mostrarInformacoes())

