/**
 * @fileoverview Este arquivo demonstra conceitos básicos e avançados de funções em JavaScript,
 * incluindo declaração de funções, passagem de funções como argumentos (higher-order functions)
 * e currying.
 */

// --- Seção 1: Funções como variáveis e argumentos ---

/**
 * Exibe a mensagem "Bom dia!" no console.
 * Esta é uma função anônima atribuída a uma constante (function expression).
 */
const bomDia = function() {
    console.log("Bom dia!")

}

/**
 * Exibe a mensagem "Boa tarde!" no console.
 * Similar ao bomDia, é uma function expression.
 */
const boaTarde = function() {
    console.log("Boa tarde!")
}

/**
 * Exibe a mensagem "Boa noite!" no console.
 * Similar ao bomDia, é uma function expression.
 */
const boaNoite = function() {
    console.log("Boa noite!")
}

/**
 * Executa uma função que foi passada como argumento.
 * Esta é uma "Higher-Order Function", pois recebe outra função como parâmetro.
 * @param {Function} fn A função a ser executada.
 */
function executaFuncao(fn){
    // Verifica se o parâmetro recebido é de fato uma função antes de tentar executá-lo.
    if(typeof fn === "function"){
        fn() // Invoca a função recebida.
    }
}

// Exemplos de uso, passando as funções de saudação para a executaFuncao.
executaFuncao(bomDia)
executaFuncao(boaTarde)
executaFuncao(boaNoite)


// --- Seção 2: Função com parâmetros e retorno ---

/**
 * Calcula a potência de um número.
 * @param {number} base O número base.
 * @param {number} expo O expoente.
 * @returns {number} O resultado de base elevado ao expoente.
 */
function potencia(base, expo){
    return Math.pow(base, expo)
}

// Calcula 2 elevado a 8.
const bits8 = potencia(2,8)

console.log(bits8) // Exibe 256


// --- Seção 3: Retornando uma função de outra função (Currying) ---

/**
 * Uma função que retorna outra função, pré-configurada com a base.
 * Este padrão é conhecido como "Currying".
 * @param {number} base O número base que será fixado para a função retornada.
 * @returns {Function} Uma nova função que espera o expoente e calcula a potência.
 */
function potencia2forma(base){
    return function(expo){
        return Math.pow(base, expo)
    }
}

// Exemplo de uso do currying:
// 1. `potencia2forma(2)` é chamada e retorna uma nova função: `function(expo) { return Math.pow(2, expo) }`
// 2. A função retornada é imediatamente chamada com o argumento `16`.
const bits16 = potencia2forma(2)(16)

console.log(bits16) // Exibe 65536
