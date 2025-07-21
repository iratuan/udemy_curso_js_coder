/**
 * @fileoverview Bem-vindo ao tutorial de Arrow Functions (Funções de Seta)!
 * Aqui vamos explorar essa forma moderna e mais curta de escrever funções em JavaScript.
 */

// --- Tutorial: Dominando as Arrow Functions ---

// Uma Arrow Function substitui a palavra `function` por uma seta `=>`.
// Isso torna o código mais limpo e fácil de ler. Vamos ver na prática!

// **Exemplo 1: A Arrow Function mais simples (sem parâmetros)**
// Quando a função não precisa de nenhum argumento, usamos parênteses vazios `()`.
const saudacao = () => console.log('Olá, mundo!');

// Chamando a função para ver o resultado.
saudacao()

// **Exemplo 2: Com um único parâmetro**
// Um truque legal: se a função tem apenas UM parâmetro, os parênteses são opcionais!
const saudacaoComParamentro = parametro => console.log(`Olá ${parametro}, tudo jóia?`);

// Passamos o argumento 'João' para o parâmetro.
saudacaoComParamentro('João')


// **Exemplo 3: Com múltiplos parâmetros e um corpo mais complexo**
// Para receber um número indefinido de argumentos, usamos o "rest parameter" (`...numeros`).
// Ele agrupa todos os argumentos passados em um array chamado `numeros`.
//
// Se a sua função precisa de mais de uma linha de código, você deve envolvê-la em chaves `{}`.
// Dentro das chaves, você precisa usar a palavra `return` para devolver um resultado.
const somar = (...numeros) => {
    let total = 0
    for( let n of numeros){
        total += n
    }
    return total
}

// O console mostrará a soma de todos os números: 15.
console.log(somar(1,2,3,4,5))


// **Exemplo 4: Arrow Functions para "Currying" (Funções que retornam funções)**
// Arrow functions são ótimas para criar funções especializadas.
// A primeira função `potencia(base)` recebe a base e retorna uma NOVA função.
// Essa nova função, `(exp) => ...`, já "sabe" qual é a base e só espera pelo expoente.
const potencia = base =>  (exp) => Math.pow(base, exp)

// `potencia(2)` cria uma função para calcular potências de 2.
// `(3)` executa essa nova função com o expoente 3. O resultado é 8.
console.log(potencia(2)(3))