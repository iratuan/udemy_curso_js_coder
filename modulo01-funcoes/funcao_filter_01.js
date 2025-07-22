/**
 * @fileoverview Tutorial: O Poder do `.filter()` - Selecionando Elementos.
 * O método `.filter()` é outra ferramenta essencial da programação funcional.
 * Ele cria um **novo array** contendo apenas os elementos do array original
 * que passam em um teste (ou seja, para os quais a sua função de callback retorna `true`).
 * É a forma ideal de "filtrar" um conjunto de dados com base em uma condição.
 */

const carrinho = [
    {nome: 'Caneta', preco: 7.99, quantidade: 10},
    {nome: 'Impressora', preco: 649.50, quantidade: 1},
    {nome: 'Caderno', preco: 34.90, quantidade: 3},
    {nome: 'Lapis', preco: 5.82, quantidade: 6},
    {nome: 'Tesoura', preco: 19.20, quantidade: 1}
]

// --- Exemplo 1: Filtrando por uma condição ---
// A função de callback para o `.filter()` deve sempre retornar um booleano (`true` ou `false`).
// Se retornar `true`, o elemento é incluído no novo array. Se retornar `false`, é descartado.

// Criamos funções reutilizáveis para nossos critérios de filtro.
const itemCaro = item => item.preco > 100
const muitoEstoque = item => item.quantidade > 5

const itensCaros = carrinho.filter(itemCaro)
console.log('Itens com preço maior que R$100,00:')
console.log(itensCaros)

const itensComMuitoEstoque = carrinho.filter(muitoEstoque)
console.log('\nItens com estoque maior que 5 unidades:')
console.log(itensComMuitoEstoque)

// --- Exemplo 2: Encadeando Funções (Composability) ---
// A verdadeira força da programação funcional aparece quando encadeamos (chaining) métodos.
// Aqui, primeiro filtramos os itens caros e, a partir do resultado, mapeamos para pegar apenas os nomes.
const nomesDosItensCaros = carrinho
    .filter(itemCaro)
    .map(item => item.nome)

console.log(`\nNomes dos itens com preço maior que R$100,00: ${nomesDosItensCaros}`)

// --- Exemplo 3: Criando nosso próprio .filter() ---
// Assim como fizemos com o .map(), criar nossa própria versão ajuda a entender a lógica interna.
Array.prototype.meuFiltro = function(fn) {
    const filtrado = []
    for(let i = 0; i < this.length; i++) {
        // Se a função de callback (fn) retornar `true` para o elemento...
        if(fn(this[i], i, this)) {
            // ...adicionamos o elemento ao nosso novo array.
            filtrado.push(this[i])
        }
    }
    return filtrado
}

const itensCarosComMeuFiltro = carrinho.meuFiltro(itemCaro)
console.log('\nItens caros encontrados com nosso filtro customizado:')
console.log(itensCarosComMeuFiltro)
