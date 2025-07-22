/**
 * @fileoverview Desafio: Combinando Map, Filter e Reduce.
 * Este arquivo analisa uma implementação do desafio e, em seguida, apresenta
 * uma solução mais alinhada com os princípios da programação funcional.
 */

const carrinho = [
    {nome: 'Caneta', preco: 7.99, quantidade: 10, fragil: false},
    {nome: 'Impressora', preco: 649.50, quantidade: 1, fragil: true},
    {nome: 'Caderno', preco: 34.90, quantidade: 3, fragil: false},
    {nome: 'Lapis', preco: 5.82, quantidade: 4, fragil: false},
    {nome: 'Tesoura', preco: 19.20, quantidade: 1, fragil: true}
]

// --- Análise da Implementação Original ---

// PROBLEMA 1: Mutação de dados.
// O código abaixo modifica o array original, o que é um anti-padrão na programação funcional.
// O ideal é sempre criar novos dados a partir dos originais (imutabilidade).
// A lógica `!item.fragil ? item.fragil = true : item.fragil = false` é uma forma complexa
// de inverter um booleano. Uma forma mais simples seria `item.fragil = !item.fragil`.
const carrinhoMutado = carrinho.map(item => {
    // Cria um NOVO objeto para não modificar o original.
    return { ...item, fragil: !item.fragil };
});
// console.log(carrinhoMutado);

// PROBLEMA 2: Ineficiência e Clareza.
// O código abaixo itera sobre o array duas vezes (uma para cada .reduce) para
// calcular a soma total das quantidades e dos preços. Isso pode ser feito de
// forma mais eficiente em uma única passagem.
const somarQuantiadade = (acc, item) => acc + item.quantidade;
const quantidade = carrinho.reduce(somarQuantiadade, 0);
const somarPreco = (acc, item) => acc + item.preco;
const preco = carrinho.reduce(somarPreco, 0);

// O cálculo da "média" é ambíguo. Ele representa o preço total dividido pela
// quantidade total de itens, não a média de preço por produto.
const media = (preco / quantidade).toFixed(2);
console.log(`Média de preço por unidade de item no carrinho: R$${media}`);

console.log('--------------------------------');

// --- Solução Funcional para o Desafio Padrão ---
// O desafio clássico é: "Calcular o valor total de todos os itens frágeis".

const isFragil = item => item.fragil;
const getTotal = item => item.quantidade * item.preco;
const somar = (acc, el) => acc + el;

const totalItensFrageis = carrinho
    .filter(isFragil)
    .map(getTotal)
    .reduce(somar, 0);

console.log(`O valor total dos itens frágeis é: R$${totalItensFrageis.toFixed(2)}`);