// classe base (pai) ItemBiblioteca
class ItemBiblioteca{
    titulo:string; //atributo que representa o título do item
    autor:string;  //atributo autor
    //vamos contruir a classe base(inicializa todos os atributos comuns)
    constructor(titulo:string, autor:string){
        this.titulo = titulo
        this.autor = autor
    }
    // Método que exibe as informações gerais do item biblioteca 
    exibirInformacoes(): string{
        return `Titulo: ${this.titulo}, Autor: ${this.autor}`
    }
}
// subclasse que representa um livro, herdado da classe pai ItemBiblioteca
class Livro extends ItemBiblioteca{
    //ISBN vai ser um identificador único para o livro em questão
    ISBN:string;
    //Número de páginas do livro
    numeroDePaginas: number;
    //Gênero do livro
    generoDoLivro: string;
    // construtor da classe livro para inicializar os atributos
    constructor(titulo:string, autor:string, ISBN: string, numeroDePaginas: number, generoDoLivro: string){
        //chamando o construtor da classe base para inicializar título e autor
        super(titulo, autor);
        this.ISBN = ISBN
        this.numeroDePaginas = numeroDePaginas
        this.generoDoLivro = generoDoLivro
    }
    //Método para exibição das informações do livro
    exibirInformacoes(): string {
        return `${super.exibirInformacoes()}, ISBN: ${this.ISBN}, Páginas: ${this.numeroDePaginas}, Gênero: ${this.generoDoLivro}`
    }

}
//Classe que representa uma Revista, herdando do ItemBiblioteca
class Revista extends ItemBiblioteca{
    //Atributo para o numero de edição da revista
    edicao: number;
    //Atributo para o mês da publicação
    mesPublicacao: string;
    editora: string;
    // construtor da classe Revista (inicializar todos os atributos)
    constructor(titulo:string, autor:string, editora:string, edicao: number, mesPublicacao:string){
        super(titulo,autor)
        this.edicao = edicao
        this.mesPublicacao = mesPublicacao
        this.editora = editora
    }
    //método para exibir informações da revista
    exibirInformacoes(): string{
    return `${super.exibirInformacoes()}, Edição: ${this.edicao}, Publicação: ${this.mesPublicacao}, Editora: ${this.editora}`
    }
}

