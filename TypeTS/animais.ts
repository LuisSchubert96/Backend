// esse código em https://www.typescriptlang.org/play

// classe animal: a classe pai (base)
class animal {
  // propriedades básicas que todos os animais terão
  nome: string;
  idade: number;
  especie: string;
  raca: string;
  peso: number;

  // constructor da classe (inicializa as propriedades quando um novo objeto é criado
  constructor(
    nome: string,
    idade: number,
    especie: string,
    raca: string,
    peso: number
  ) {
    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
    this.raca = raca;
    this.peso = peso;
  }
  // método emitirSom(): cada tipo de animal pode ter um som específico
  emitirSom(): string {
    return "Som do animal (genérico)";
  }
  // método interagir(): simular a interação com o animal
  interagir(acao: string): string {
    // dependendo da ação, o retorno muda
    if (acao === "alimentar") {
      return `${this.nome} está comendo.`; // se for alimentar, retorna mensagem que o animal está comendo
    } else if (acao === "brincar") {
      return `${this.nome} está brincando.`; // se for brincar, retorna mensagem que o animal está brincando
    } else {
      return `${this.nome} não sabe o que fazer.`; // se a ação não for alimentar ou brincar, o animal não sabe o que fazer
    }
  }
}
// classe mamífero que herda da classe animal e tem atributos específico dos mamíferos
class mamifero extends animal {
  tipoPelagem: string;
  amamenta: boolean;
  // constructor do mamífero que vai chamar o constructor pai de todos (animal | super) para inicializar as propriedades herdadas
  constructor(
    nome: string,
    idade: number,
    especie: string,
    raca: string,
    peso: number,
    tipoPelagem: string,
    amamenta: boolean
  ) {
    super(nome, idade, especie, raca, peso);
    this.tipoPelagem = tipoPelagem;
    this.amamenta = amamenta;
  }
  // sobrescrever o método emitirSom para os mamíferos, criando um som específico para esse grupo
  emitirSom(): string {
    return "Som típico de um mamífero (latido, miado, etc.).";
  }
}
// classe ave que herda da classe animal e tem atributos específico das activeSourceBuffers
class ave extends animal {
  envergaduraAsas: number;
  tipoBico: string;
  // constructor da ave que vai chamar o constructor pai de todos (animal | super) para inicializar as propriedades herdadas
  constructor(
    nome: string,
    idade: number,
    especie: string,
    raca: string,
    peso: number,
    envergaduraAsas: number,
    tipoBico: string
  ) {
    super(nome, idade, especie, raca, peso);
    this.envergaduraAsas = envergaduraAsas;
    this.tipoBico = tipoBico;
  }
  // sobrescrever o método emitirSom para as aves, criando um som específico para esse grupo
  emitirSom(): string {
    return "Som típico de uma ave (latido, miado, etc.).";
  }
}
// classe peixe que herda da classe animal e tem atributos específico das activeSourceBuffers
class peixe extends animal {
  tamanhoAquario: number;
  tipoAlimento: string;
  // constructor do peixe que vai chamar o constructor pai de todos (animal | super) para inicializar as propriedades herdadas
  constructor(
    nome: string,
    idade: number,
    especie: string,
    raca: string,
    peso: number,
    tamanhoAquario: number,
    tipoAlimento: string
  ) {
    super(nome, idade, especie, raca, peso);
    this.tamanhoAquario = tamanhoAquario;
    this.tipoAlimento = tipoAlimento;
  }
  // sobrescrever o método emitirSom para os peixer, peixes não emitem sons audíveis aos seres humanos
  emitirSom(): string {
    return "Peixes não emitem sons audíveis aos seres humanos.";
  }
}
// função principal que simula o sistema de cadastro e interação com os animais
function sistemaDeAnimais() {
  // criando instância de diferentes tipos de animais
  const cachorro = new mamifero(
    "Dog",
    5,
    "Cachorro",
    "Guaipeca",
    30,
    "curta",
    true
  );
  const papagaio = new ave(
    "Chico",
    2,
    "papagaio",
    "Amazônico",
    50,
    1.2,
    "curto"
  );
  const baiacu = new peixe("Nemo", 6, "Peixe", "baiacu", 0.1, 30, "algas");
  // exibindo as interações com cada animal
  console.log(cachorro.emitirSom());
  console.log(cachorro.interagir("brincar"));

  console.log(papagaio.emitirSom());
  console.log(papagaio.interagir("alimentar"));

  console.log(baiacu.emitirSom());
  console.log(baiacu.interagir("nadar"));
}

// executar a função principal
sistemaDeAnimais();