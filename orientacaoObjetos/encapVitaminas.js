class PoteDeVitaminas{
    #vitaminas
    constructor(){
        this.#vitaminas = ['Vitamina C','Vitamina D','Vitamina b12']
    }
    abrir(){
        if(this.#vitaminas.length > 0){
            const vitamina = this.#vitaminas.pop()
            console.log(`O pote não está vazio! E peguei uma ${vitamina}`)
        }else{
        console.log("O pote está vazio!")
        }
    }
    contarVitaminas(){
        return `Tem ${this.#vitaminas.length} restantes`
    }    
}
const poteDeVitaminas = new PoteDeVitaminas()
console.log(poteDeVitaminas.contarVitaminas())
poteDeVitaminas.abrir()
console.log(poteDeVitaminas.contarVitaminas())
poteDeVitaminas.abrir()
poteDeVitaminas.abrir()
poteDeVitaminas.abrir()