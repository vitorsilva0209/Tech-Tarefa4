export class Cliente {
    id;
    nome;
    endereco;
    constructor(id, nome, endereco) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
    }
    apresentar = () => {
        return "Cliente ${this.nome} com id ${this.id}";
    };
    editar = (nome, endereco) => {
        this.nome = nome;
        this.endereco = endereco;
    };
}
