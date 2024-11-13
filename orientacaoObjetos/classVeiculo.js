// classe pai (base)  'veiculo
class veiculo{
    constructor(velocidade){
        this.velocidade = velocidade // a propriedade 'velocidade' é definida no construtor
    }
    //Método para acelerar o veículo
    acelerar(){
        this.velocidade +=10 // aumenta a velocidade do objeto
        console.log(`Velocidade atual: ${this.velocidade} km/h`)
    }
}
// classe filho 'carro' que herda de 'veiculo'
class carro extends veiculo{
    constructor(velocidade){
        super(velocidade) //chamando o construtor da classe pai 'veiculo' inicializar 'velocidade'
    }
    //Método especifico de 'carro' para buzinar
    buzinar(){
        console.log("Buzinando!")
    }
}
// criando uma instância de 'carro' com velocidade inicial de 60 km/h
const meuCarro = new carro(60)
meuCarro.acelerar()
meuCarro.buzinar()