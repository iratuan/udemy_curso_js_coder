/**
 * @fileoverview Tutorial: Introdução às Promises em JavaScript.
 * Uma Promise (Promessa) é um objeto que representa a eventual conclusão (ou falha)
 * de uma operação assíncrona e seu valor resultante. Em vez de passar callbacks,
 * as Promises nos permitem encadear operações de forma mais legível e robusta.
 */

// --- Exemplo Básico: Criando e Consumindo uma Promise ---

// 1. Criamos uma nova Promise. O construtor recebe uma função (o "executor")
//    com dois parâmetros: `cumprirPromessa` (resolve) e `rejeitarPromessa` (reject).
//    - `cumprirPromessa`: É chamada quando a operação assíncrona é bem-sucedida.
//    - `rejeitarPromessa`: É chamada quando ocorre um erro (não usada neste exemplo).
const promessa = new Promise(function(cumprirPromessa) {
   // Neste exemplo, a promessa é cumprida imediatamente com um array de nomes.
   // Em um caso real, aqui estaria uma operação demorada, como uma chamada de API
   // ou a leitura de um arquivo.
   cumprirPromessa(["Iratuan", "Erika", "Ian", "Dario"]);
});

// 2. Consumimos o valor da Promise usando o método `.then()`.
//    O `.then()` também retorna uma Promise, o que nos permite encadear várias operações.
//    Cada `.then()` na cadeia recebe o valor retornado pelo `.then()` anterior,
//    criando um fluxo de dados sequencial e fácil de seguir.
promessa
    .then(valor => valor[0]) // Passo 1: Do array ["Iratuan", ...], pega o primeiro elemento "Iratuan".
    .then(primeiroNome => primeiroNome[0]) // Passo 2: Da string "Iratuan", pega o primeiro caractere "I".
    .then(primeiraLetra => primeiraLetra.toLowerCase()) // Passo 3: Do caractere "I", converte para "i".
    .then(letraMinuscula => console.log(letraMinuscula)); // Passo 4: Exibe o resultado final "i".
