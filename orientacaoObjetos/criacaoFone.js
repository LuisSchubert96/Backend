class foneDeOuvido{
    constructor(marca,modelo){
        this.marca = marca
        this.modelo = modelo
    }
    informacoes(){
        console.log(`Marca:${this.marca}`)
        console.log(`Modelo:${this.modelo}`)
    }
}
class novoFoneDeOuvido extends foneDeOuvido{
    constructor(marca, modelo, tipoDeConexao){
        super(marca,modelo)
        this.tipoDeConexao = tipoDeConexao
    }
    informacoes(){
        super.informacoes()
        console.log(`Conexão:${this.tipoDeConexao}`)
    }
}
const foneAntigo = new foneDeOuvido ("JBL","Tune Flex")
const foneNovo = new novoFoneDeOuvido ("JBL","Tune MAX","Bluetooth")
console.log("Info. fone antigo:")
foneAntigo.informacoes()
console.log("Info. fone novo:")
foneNovo.informacoes()

