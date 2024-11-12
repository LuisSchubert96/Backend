//criando a classe cachorro
class cachorro{
    //o construtor inicializa os atributos 'nome' e 'idade'
    constructor(nome, idade){
        this.nome = nome //atribui o nome do cachorro
        this.idade = idade //atribui a idade do cachorro
    }
    //método para o cachorro latir
    latir(){
        console.log("AU,AU") //exibe o som do latido
    }
    //método para o cachorro fazer aniversário
    aniversario(){
        this.idade +=1 //aumenta a idade do cachorro em 1
    }
}
//criando  uma instância do cachorro
let meuCachorro = new cachorro("Rex", 3)
//chamando o método latir
meuCachorro.latir()
//chamando o método aniversário
meuCachorro.aniversario()
//mostrar a idade após o aniversário
console.log(`Agora ${meuCachorro.nome} tem ${meuCachorro.idade} anos`)