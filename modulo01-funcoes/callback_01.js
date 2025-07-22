/**
 * @fileoverview Tutorial sobre o padrão Callback.
 * Um callback acontece quando passamos uma função como argumento para outra função,
 * e essa função principal a "chama de volta" (calls back) para executar uma tarefa.
 * É como dizer: "Execute esta tarefa para mim quando você terminar o seu trabalho".
 */

/**
 * Uma função genérica de "ordem superior" (Higher-Order Function).
 * Ela não sabe qual operação vai realizar. Sua única responsabilidade
 * é receber uma função (fn) e os dados (a, b) e executar a função com esses dados.
 * @param {Function} fn A função que será "chamada de volta" (o callback).
 * @param {*} a O primeiro argumento para a função de callback.
 * @param {*} b O segundo argumento para a função de callback.
 * @returns O resultado da execução de fn(a, b).
 */
function exec(fn, a, b){
    return  fn(a,b)
}

// Aqui definimos nossas "tarefas" ou "receitas".
// Cada uma é uma função simples que pode ser passada como um callback.
const somar = (a,b) => a + b
const subtrair = (a,b) => a - b
const dividir = (a,b) => a / b
const multiplicar = (a,b) => a * b

// Agora, vamos colocar a função `exec` para trabalhar!
// Em cada linha, passamos uma tarefa diferente (somar, subtrair, etc.) para ela executar.
console.log(exec(somar, 10, 20))
console.log(exec(subtrair, 20, 10))
console.log(exec(dividir, 10, 20))
console.log(exec(multiplicar, 10, 20))
 
// --- Callbacks em Ações Assíncronas ---
//
// Callbacks são a base da programação assíncrona em JavaScript.
// Funções como `setInterval` não bloqueiam o código; elas agendam uma tarefa
// para ser executada no futuro e o programa continua rodando.
//
// Aqui, `setInterval` é a função de ordem superior.
// A função `cb` é o nosso callback, que será "chamado de volta" a cada 1000ms (1 segundo).
const cb = () => console.log('Executando callback a cada 1 segundo...')
setInterval(cb, 1000) // O programa não vai parar aqui, ele continua enquanto o callback é agendado.