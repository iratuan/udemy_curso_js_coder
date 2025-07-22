/**
 * @fileoverview Tutorial: Callbacks e a Diferença entre Assíncrono e Síncrono.
 * Vamos ver na prática como ler arquivos de duas formas e por que a abordagem
 * assíncrona com callbacks é geralmente a preferida no Node.js.
 */

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

/**
 * Nosso callback para a leitura assíncrona.
 * A regra de ouro no Node.js: sempre verifique o erro primeiro!
 * @param {Error|null} err O objeto de erro (ou `null` se tudo correu bem).
 * @param {Buffer} conteudo O conteúdo do arquivo.
 */
const exibirConteudo = (err, conteudo) => {
    // Se o parâmetro 'err' não for nulo, significa que algo deu errado na leitura.
    if (err) {
        console.error('ERRO na leitura assíncrona:', err)
        return // Paramos a execução da função aqui.
    }

    // Se chegamos aqui, a leitura foi um sucesso!
    console.log('\nLeitura assíncrona concluída:')
    console.log(conteudo.toString())
}

// --- 1. Leitura Assíncrona (O jeito Node.js) ---
// O programa inicia a leitura e NÃO espera. Ele continua para a próxima linha imediatamente.
// O callback `exibirConteudo` só será chamado quando a leitura do arquivo terminar.
console.log('Iniciando leitura assíncrona...')
fs.readFile(caminho, exibirConteudo)
console.log('...Leitura assíncrona iniciada. O programa segue executando.')

console.log("------------------------")

// --- 2. Leitura Síncrona (Use com cuidado!) ---
// A versão síncrona (`Sync`) bloqueia TODO o programa até que o arquivo seja lido.
// Ela não usa callback. Em vez disso, retorna o conteúdo diretamente ou lança um erro.
console.log('Iniciando leitura síncrona...')
try {
    const conteudoSincrono = fs.readFileSync(caminho)
    console.log('Leitura síncrona concluída:')
    console.log(conteudoSincrono.toString())
} catch (err) {
    // Se a leitura falhar, um erro é lançado e o `catch` o captura.
    console.error('ERRO na leitura síncrona:', err)
}
console.log('...Leitura síncrona finalizada. O programa só chega aqui após o arquivo ser lido.')
