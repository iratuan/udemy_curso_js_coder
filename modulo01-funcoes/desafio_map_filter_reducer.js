/**
 * @fileoverview Desafio: Combinando Filter, Map e Reduce.
 * O objetivo é calcular a média de preço dos produtos frágeis.
 * Vamos analisar duas abordagens funcionais para resolver este problema.
 */

const carrinho = [
    {nome: 'Caneta', preco: 7.99, quantidade: 10, fragil: false},
    {nome: 'Impressora', preco: 649.50, quantidade: 1, fragil: true},
    {nome: 'Caderno', preco: 34.90, quantidade: 3, fragil: false},
    {nome: 'Lapis', preco: 5.82, quantidade: 4, fragil: false},
    {nome: 'Tesoura', preco: 19.20, quantidade: 1, fragil: true}
]

// --- Abordagem 1: Reduzindo para um objeto agregado ---
// Esta abordagem filtra os itens e depois usa o .reduce() para
// construir um objeto que contém a soma das quantidades e o valor total.

const produtosFrageis = carrinho.filter(item => item.fragil)

// A implementação original mutava o acumulador (acc.quantidade += ...).
// Uma abordagem funcional pura retorna um NOVO objeto a cada iteração, garantindo a imutabilidade.
const totaisAgregados = produtosFrageis.reduce((acc, item) => {
    return {
        quantidade: acc.quantidade + item.quantidade,
        total: acc.total + (item.preco * item.quantidade)
    }
}, {quantidade: 0, total: 0})

const media1 = totaisAgregados.total / totaisAgregados.quantidade
console.log(`Média (Abordagem 1): R$${media1.toFixed(2)}`)

console.log('--------------------------------')

// --- Abordagem 2: Composição de Funções (Filter -> Map -> Reduce) ---
// Esta é uma abordagem mais declarativa e elegante.
// 1. Filtra os itens frágeis.
// 2. Mapeia cada item para o seu valor total (preço * quantidade).
// 3. Reduz o array de totais para um objeto que calcula a média dinamicamente.
const getTotal = item => item.quantidade * item.preco
const getMedia = (acc, el) => {
    const novaQuantidade = acc.quantidade + 1
    const novoTotal = acc.total + el
    return {
        quantidade: novaQuantidade,
        total: novoTotal,
        media: novoTotal / novaQuantidade
    }
}

const resultadoFinal = carrinho
    .filter(item => item.fragil)      // Filtra
    .map(getTotal)                    // Mapeia para os totais
    .reduce(getMedia, {quantidade: 0, total: 0, media: 0}) // Reduz para o resultado final

console.log(`Média (Abordagem 2): R$${resultadoFinal.media.toFixed(2)}`)
