import { Cliente } from "./model/Cliente.js";
import { Endereco } from "./model/Endereco.js";
const endereco = new Endereco("Rua A", 123);
const cliente = new Cliente(1, "Douglas", endereco);
console.log(cliente.apresentar());
cliente.editar("Douglas Silva", new Endereco("Rua B", 456));
