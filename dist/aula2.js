"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    id;
    nome;
    endereco;
    idade;
    constructor(id, nome, endereco, idade) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.idade = idade;
    }
    apresentar = () => {
        console.log(this.nome);
    };
}
const cliente = new Cliente(1, "Douglas", "Rua 123", 30);
