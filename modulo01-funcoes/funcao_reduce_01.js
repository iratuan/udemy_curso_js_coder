/**
 * @fileoverview Tutorial: O Poder do `.reduce()` - Reduzindo um Array a um Único Valor.
 * O método `.reduce()` é o "canivete suíço" das funções de array. Ele executa uma
 * função "redutora" para cada elemento, resultando em um único valor de saída.
 * É perfeito para somar totais, encontrar o maior número, agrupar dados, e muito mais.
 */

const carrinho = [
    {nome: 'Caneta', preco: 7.99, quantidade: 10},
    {nome: 'Impressora', preco: 649.50, quantidade: 1},
    {nome: 'Caderno', preco: 34.90, quantidade: 3},
    {nome: 'Lapis', preco: 5.82, quantidade: 4},
    {nome: 'Tesoura', preco: 19.20, quantidade: 1}
]

// --- Exemplo 1: Calculando o total do carrinho (abordagem em duas etapas) ---

// 1. Primeiro, mapeamos o carrinho para um array de subtotais.
const subtotais = carrinho.map(item => item.quantidade * item.preco)
console.log('Array de subtotais:', subtotais)

// 2. Depois, usamos o `.reduce()` para somar todos os subtotais.
// A função de callback do reduce recebe dois parâmetros principais:
// @param {any} acumulador - O valor acumulado retornado na iteração anterior.
// @param {any} elemento - O elemento atual que está sendo processado no array.
// O segundo argumento do `.reduce()` (o `0`) é o valor inicial do acumulador.
const somar = (acumulador, elemento) => acumulador + elemento
const totalCarrinho = subtotais.reduce(somar, 0)
console.log(`Total (duas etapas): R$${totalCarrinho.toFixed(2)}`)

console.log('--------------------------------')

// --- Exemplo 2: A forma mais eficiente (uma única etapa) ---
// Podemos fazer o cálculo e a soma dentro de uma única chamada ao `.reduce()`,
// o que é mais performático por evitar a criação de um array intermediário.
const totalDireto = carrinho.reduce((acc, item) => {
    // A cada iteração, somamos o subtotal do item atual ao acumulador.
    return acc + (item.quantidade * item.preco)
}, 0) // O acumulador (acc) começa em 0.

console.log(`Total (etapa única): R$${totalDireto.toFixed(2)}`)

// --- Exemplo 3: Criando nosso próprio .reduce() ---
Array.prototype.meuReduce = function(fn, inicial) {
    // Define o acumulador. Se um valor inicial for fornecido, usa ele.
    // Senão, usa o primeiro elemento do array.
    let acc = inicial !== undefined ? inicial : this[0]
    // Define o ponto de partida do loop.
    let i = inicial !== undefined ? 0 : 1

    for (; i < this.length; i++) {
        acc = fn(acc, this[i], i, this)
    }
    return acc
}