/**
 * @fileoverview Tutorial: Fugindo do "Callback Hell" com Promises.
 * Este tutorial compara duas formas de lidar com operações assíncronas sequenciais:
 * 1. O aninhamento de callbacks (conhecido como "Callback Hell" ou "Pirâmide da Perdição").
 * 2. O encadeamento de Promises com `.then()`, que resulta em um código mais limpo e legível.
 */

// --- Cenário 1: O "Callback Hell" (A forma difícil de ler) ---
// Quando temos várias operações que dependem da anterior, o código começa a aninhar-se,
// criando uma estrutura de pirâmide que é difícil de ler, depurar e manter.
console.log('--- Exemplo de Callback Hell ---');
setTimeout(() => {
    console.log('Executando callback 1 (esperou 2s)');

    // Esta operação só pode começar depois que a primeira terminar.
    setTimeout(() => {
        console.log('Executando callback 2 (esperou +3s)');

        // E se tivéssemos mais uma? A pirâmide continuaria crescendo...
    }, 3000);

}, 2000);


// --- Cenário 2: A Solução com Promises (A forma elegante) ---

/**
 * Cria uma função que retorna uma Promise, encapsulando a lógica do `setTimeout`.
 * Esta é uma prática comum para "promisificar" funções baseadas em callback.
 * @param {string} textoParaExibir O texto que será passado para o `resolve`.
 * @param {number} [tempo=2000] O tempo em milissegundos que a Promise levará para ser resolvida.
 * @returns {Promise<string>} Uma Promise que será resolvida com o `textoParaExibir` após o tempo especificado.
 */
function esperarPor(textoParaExibir, tempo = 2000) {
    return new Promise((resolve) => {
        // O `setTimeout` agenda a execução do `resolve` para o futuro.
        setTimeout(() => {
            console.log(`Executando a Promise (esperou ${tempo/1000}s)...`);
            // `resolve()` cumpre a promessa e passa o valor para o próximo `.then()`.
            resolve(textoParaExibir);
        }, tempo);
    });
}

// Com Promises, em vez de aninhar, nós encadeamos as operações com `.then()`.
// O resultado é um código "plano", sequencial e muito mais fácil de seguir.
console.log('\n--- Exemplo com Promises ---');
esperarPor('Primeira execução!', 3000)
    .then(texto => {
        console.log(texto); // Exibe "Primeira execução!"
        // Retornamos uma nova Promise para a próxima etapa da cadeia.
        return esperarPor('Segunda execução!', 1000);
    })
    .then(texto => {
        console.log(texto); // Exibe "Segunda execução!"
    });
