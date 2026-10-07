function criarConsumidor(nome, idade, email) {
    return { nome, idade, email };
}
function calcularMediaIdade(consumidores) {
    if (consumidores.length === 0)
        return 0;
    const somaIdades = consumidores.reduce((total, consumidor) => total + consumidor.idade, 0);
    return somaIdades / consumidores.length;
}
function obterMaiorEMenorIdade(consumidores) {
    if (consumidores.length === 0) {
        throw new Error("A lista de consumidores não pode estar vazia.");
    }
    let maisVelho = consumidores[0];
    let maisNovo = consumidores[0];
    for (const consumidor of consumidores) {
        if (consumidor.idade > maisVelho.idade) {
            maisVelho = consumidor;
        }
        if (consumidor.idade < maisNovo.idade) {
            maisNovo = consumidor;
        }
    }
    return { maisVelho, maisNovo };
}
function executarPrograma() {
    const consumidores = [
        criarConsumidor("Ana Silva", 28, "ana@email.com"),
        criarConsumidor("Carlos Souza", 45, "carlos@email.com"),
        criarConsumidor("Beatriz Lima", 19, "beatriz@email.com"),
        criarConsumidor("João Pedro", 34, "joao@email.com"),
        criarConsumidor("Fernanda Costa", 52, "fernanda@email.com")
    ];
    const mediaIdade = calcularMediaIdade(consumidores);
    const { maisVelho, maisNovo } = obterMaiorEMenorIdade(consumidores);
    console.log("Consumidores Cadastrados:");
    console.table(consumidores);
    console.log("Média de idade: ${mediaIdade.toFixed(1)} anos");
    console.log("Mais velho: ${maisVelho.nome} (${maisVelho.idade} anos)");
    console.log("Mais novo: ${maisNovo.nome} (${maisNovo.idade} anos)");
}
executarPrograma();
export {};
