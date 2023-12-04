// Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes conjuntos de 3 valores, sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.

// Entrada
// O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha a seguir contém um caso de teste com três valores com uma casa decimal cada valor.

// Saída
// Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const repeticao = parseInt(prompt2('Digite o numero de conjuntos diferentes que se quer testar a media '))

for (i=1; i <= repeticao; i++){
    console.log(`\nConjunto ${i}`)
    const pergunta1 = parseInt(prompt2('Digite o primeiro valor do conjunto '))
    const pergunta2 = parseInt(prompt2('Digite o segundo valor do conjunto '))
    const pergunta3 = parseInt(prompt2('Digite o terceiro valor do conjunto '))
    
    const mediaPonderada =  ((pergunta1 * 2) + (pergunta2 * 3) + (pergunta3 * 5)) / 10
    console.log(`${mediaPonderada}`)
}