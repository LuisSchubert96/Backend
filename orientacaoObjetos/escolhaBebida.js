class bebida{
    constructor(nome, volume){
        this.nome = nome
        this.volume = volume
    }
    descricao(){
        console.log(`O suco ${this.nome} de ${this.volume} ml`)
    }
}
class suco extends bebida{
    constructor(nome,volume,fruta, porcentagemPolpa){
        super(nome,volume)
        this.fruta = fruta
        this.porcentagemPolpa = porcentagemPolpa
    }
    descricao(){
        console.log(`Suco: ${this.nome} Volume: ${this.volume} Fruta: ${this.fruta} Polpa: ${this.porcentagemPolpa}`)
    }
}
const suco1 = new suco("Marata", 300, "Laranja", 30)
const suco2 = new suco("CBS", 250, "Maça", 20)
const suco3 = new suco("Valore", 200, "Uva", 40)

function escolhaDeSuco(listaDeSuco){
    listaDeSuco.forEach(suco => suco.descricao())
}

const Sucos = [suco1, suco2, suco3]
escolhaDeSuco(Sucos)
