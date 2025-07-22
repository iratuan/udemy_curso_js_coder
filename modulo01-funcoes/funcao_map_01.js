/**
 * @fileoverview Tutorial: O Poder do `.map()` - Transformando Arrays.
 * O método `.map()` é uma das ferramentas mais importantes da programação funcional
 * em JavaScript. Ele permite criar um **novo array** aplicando uma função de
 * transformação a cada um dos elementos do array original, sem nunca modificar o original.
 * É a forma ideal de "mapear" um conjunto de dados para outro.
 */

// --- Exemplo 1: Entendendo os parâmetros do Callback ---

// Nosso array original com os dados que queremos transformar.
const nums = [1 , 2, 3 ,4 , 5 ]

// A função que passamos para o `.map()` (o "callback") pode receber até 3 parâmetros.
// Geralmente, só usamos o primeiro, mas é útil conhecer todos!
//
// @param {any} elemento - O valor do elemento atual que está sendo processado. (Obrigatório)
// @param {number} [indice] - O índice (posição) do elemento atual no array. (Opcional)
// @param {Array} [array] - O array original completo que o `.map()` está percorrendo. (Opcional)
const transformar = (elemento, indice, array)  => {
    // Vamos usar todos os parâmetros para criar uma transformação mais complexa:
    // O dobro do elemento + seu índice + o tamanho total do array.
    return elemento * 2 + indice + array.length
}

// Aqui a mágica acontece! O `.map()` percorre cada elemento de `nums`
// e chama a função `transformar`, passando os três argumentos (elemento, indice, array)
// para cada um deles. Os resultados são coletados em um novo array.
const resultado = nums.map(transformar)
console.log('Array transformado:', resultado)
// Resultado da lógica: [ 7, 10, 13, 16, 19 ]

// Uma prova importante: o array original `nums` permanece intacto!
// Isso é um princípio chave da imutabilidade na programação funcional.
console.log('Array original:', nums) // Exibe: [ 1, 2, 3, 4, 5 ]

// --- Exemplo 2: Usando uma função anônima e apenas o primeiro parâmetro ---
// Você não precisa criar uma função separada. É muito comum passar a
// arrow function diretamente para o `.map()`, usando apenas os parâmetros necessários.
const triplo = nums.map(n => n * 3)
console.log('Array triplicado:', triplo) // Exibe: [ 3, 6, 9, 12, 15 ]

// --- Exemplo 3: Mapeando um array de objetos ---
// Este é um dos usos mais comuns do `.map()`: extrair informações
// ou criar uma nova estrutura a partir de um array de objetos.
const carrinho = [
    // Corrigindo a quantidade para um valor mais realista.
    {nome: 'Caneta', preco: 7.99, quantidade: 10},
    {nome: 'Impressora', preco: 649.50, quantidade: 1},
    {nome: 'Caderno', preco: 34.90, quantidade: 3},
    {nome: 'Lapis', preco: 5.82, quantidade: 4},
    {nome: 'Tesoura', preco: 19.20, quantidade: 1}
]

// **Caso de uso 1: Extrair apenas uma propriedade**
// Queremos um array contendo apenas os nomes dos produtos.
// O `.map()` transforma cada objeto `item` na string `item.nome`.
const nomes = carrinho.map(item => item.nome)
console.log('Nomes dos produtos:', nomes)

// **Caso de uso 2: Calcular um novo valor para cada item**
// Queremos um array com o valor total de cada item (preço * quantidade).
// A variável foi renomeada de `total` para `totaisPorItem` para maior clareza.
// A função `.toFixed(2)` é usada para formatar o número como uma string com 2 casas decimais,
// ideal para exibição de valores monetários.
const totaisPorItem = carrinho.map(item => (item.preco * item.quantidade).toFixed(2))
console.log('Total por item (R$):', totaisPorItem)

// --- Exemplo 4: Criando nosso próprio .map() (para fins de estudo) ---
// Para entender de verdade como o `.map()` funciona, vamos criar nossa própria versão!
// Adicionamos nossa função ao `Array.prototype` para que todos os arrays possam usá-la.
/**
 * Uma implementação customizada do método .map() para fins didáticos.
 * @param {Function} fn A função de callback que transforma cada elemento.
 * @returns {Array} Um novo array com os elementos transformados.
 */
Array.prototype.meuMapa = function(fn){
    // 1. Cria um novo array vazio para armazenar os resultados.
    const mapped = []
  
    // 2. Itera sobre cada elemento do array original (referenciado por 'this').
    for(let i = 0; i < this.length; i++){
        // 3. Chama a função de callback (fn) para cada elemento,
        //    passando o elemento, o índice e o array completo, assim como o .map() original.
        const result = fn(this[i], i, this)
        // 4. Adiciona o resultado da transformação ao novo array.
        mapped.push(result)
    }

    // 5. Retorna o novo array transformado, sem modificar o original.
    return mapped
}

// Testando nossa implementação customizada com o mesmo caso de uso anterior.
const totaisComMeuMapa = carrinho.meuMapa((item) => (item.preco * item.quantidade).toFixed(2))
console.log('Total com meuMapa (R$):', totaisComMeuMapa)