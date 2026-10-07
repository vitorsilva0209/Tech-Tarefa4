export class Consumidor {
  private _nome: string;
  private _idade: number;
  private _email: string;

  constructor(nome: string, idade: number, email: string) {
    if (!nome || nome.trim().length < 3) {
      throw new Error("Nome inválido");
    }

    if (idade < 0 || idade > 120) {
      throw new Error("Idade inválida");
    }

    if (!email || !email.includes("@")) {
      throw new Error("Email inválido");
    }

    this._nome = nome;
    this._idade = idade;
    this._email = email;
  }

  get nome(): string {
    return this._nome;
  }

  get idade(): number {
    return this._idade;
  }

  get email(): string {
    return this._email;
  }

  public formatarExibicao(): string {
    return `Consumidor: ${this._nome} (${this._idade} anos) - ${this._email}`;
  }
}

const listaConsumidores: Consumidor[] = [];

function calcularMediaIdade(consumidores: Consumidor[]): number {
  if (consumidores.length === 0) {
    return 0;
  }

  const soma = consumidores.reduce((acc, c) => acc + c.idade, 0);

  return soma / consumidores.length;
}

function obterExtremosIdade(consumidores: Consumidor[]): {
  maisVelho: Consumidor | undefined;
  maisNovo: Consumidor | undefined;
} {
  if (consumidores.length === 0) {
    return {
      maisVelho: undefined,
      maisNovo: undefined
    };
  }

let maisVelho: Consumidor = consumidores[0]!;
let maisNovo: Consumidor = consumidores[0]!;

  for (const c of consumidores) {
    if (c.idade > maisVelho.idade) {
      maisVelho = c;
    }

    if (c.idade < maisNovo.idade) {
      maisNovo = c;
    }
  }

  return {
    maisVelho,
    maisNovo
  };
}

try {
  listaConsumidores.push(
    new Consumidor("Ana Silva", 30, "ana@email.com")
  );

  listaConsumidores.push(
    new Consumidor("Carlos Souza", 22, "carlos@email.com")
  );

  listaConsumidores.push(
    new Consumidor("Mariana Lima", 45, "mariana@email.com")
  );

  listaConsumidores.push(
    new Consumidor("Roberto Alves", 19, "roberto@email.com")
  );

  listaConsumidores.push(
    new Consumidor("Fernanda Dias", 33, "fernanda@email.com")
  );

  console.log("=== LISTA DE CONSUMIDORES ===");

  listaConsumidores.forEach(c => {
    console.log(c.formatarExibicao());
  });

  console.log("\n=== ANÁLISE ESTATÍSTICA ===");

  console.log(
    `Média das Idades: ${calcularMediaIdade(listaConsumidores).toFixed(1)} anos`
  );

  const { maisVelho, maisNovo } = obterExtremosIdade(listaConsumidores);

  if (maisVelho !== undefined && maisNovo !== undefined) {
    console.log(
      `Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`
    );

    console.log(
      `Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`
    );
  } else {
    console.log("Não foi possível calcular os extremos de idade");
  }
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}