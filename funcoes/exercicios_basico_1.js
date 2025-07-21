// Exercicios

/**
 * Imagine uma função que funciona como uma "linha de montagem".
 * Em vez de receber todos os argumentos de uma vez, ela recebe um, se prepara,
 * e retorna uma nova "estação de trabalho" (outra função) pronta para o próximo argumento.
 * Este padrão é chamado de "Currying".
 *
 * @param {*} a O primeiro "ingrediente" para a nossa operação.
 * @returns {Function} Uma nova função que já "sabe" qual é o valor de 'a' e agora espera por 'b'.
 */
function executar(a){
    /**
     * Esta é a segunda estação da nossa linha de montagem.
     * @param {*} b O segundo "ingrediente".
     * @returns {Function} Uma nova função que agora tem 'a' e 'b' guardados e só espera pela "receita" (a função 'fn').
     */
    return function(b){
        /**
         * Esta é a estação final. Ela já tem todos os ingredientes.
         * @param {Function} fn A "receita" ou a operação que vamos realizar com 'a' e 'b'.
         * @returns {*} O resultado final da operação.
         */
        return function( fn ){
            // Finalmente, com todos os ingredientes (a, b) e a receita (fn) em mãos,
            // executamos a operação e retornamos o resultado.
            return fn(a,b)
        }
    }
}

// Aqui vemos a "linha de montagem" em ação!
// 1. `executar(10)`: Entregamos o primeiro ingrediente. A função nos devolve a próxima estação.
// 2. `(30)`: Entregamos o segundo ingrediente para a estação que recebemos. Ela nos devolve a estação final.
// 3. `((a,b) => a + b)`: Entregamos a "receita" (a função de soma) para a estação final.
const resultado = executar(10)(30)((a,b) => a + b)

// O console irá mostrar 40, que é o produto final da nossa linha de montagem.
console.log(resultado)
