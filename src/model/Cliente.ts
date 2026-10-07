import type { Endereco } from "./Endereco.js";

export class Cliente {


  constructor(
    private id: number,
    private nome: string,
    private idade: number,
    private endereco: Endereco
  ) {}

  public apresentar = (): string => {
    return "Cliente ${this.nome} com id ${this.id} mora na rua ${this.endereco.rua}, ${this.endereco.numero} e é ${this.validarIdade()} de idade.";
  };
  public editar = (nome: string, endereco: Endereco): void => {
    this.nome = nome;
    this.endereco = endereco;
  }
  private validarIdade = (): string => {
    return this.idade >= 18 ? "Maior" : "Menor";
}

}