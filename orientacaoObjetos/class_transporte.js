// criando classe transporte (base/pai)
class transporte {
    constructor(nome) {
        this.nome = nome // atributo nome do objeto
    }
    // método mover
    mover() {
        console.log("Esse transporte está se movendo")
    }
}
// criando subclasse (filho)
// filho carro
class carro extends transporte {
    mover() {
        console.log("O carro está sendo dirigido na estrada.")
    }
}
// criando subclasse (filho)
// filho avião
class avião extends transporte {
    mover() {
        console.log("O avião está voando no céu.")
    }
}
// criando instância do transporte
let meuCarro = new carro("Fusca")
let meuAvião = new avião("Air Force One")
// chamando método mover para cada instância
meuCarro.mover()
meuAvião.mover()