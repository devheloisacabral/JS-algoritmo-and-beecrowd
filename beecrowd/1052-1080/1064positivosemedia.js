// Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. 
// Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

// Entrada
// A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. 
// Pelo menos um destes números será positivo.

// Saída
// O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos 
// digitados.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = parseInt(prompt2('Digite um numero '))
const numero2 = parseInt(prompt2('Digite um numero '))
const numero3 = parseInt(prompt2('Digite um numero '))
const numero4 = parseInt(prompt2('Digite um numero '))
const numero5 = parseInt(prompt2('Digite um numero '))
const numero6 = parseInt(prompt2('Digite um numero '))

const lista = [numero1, numero2, numero3, numero4, numero5, numero6]
const acha = lista.filter((numero) => numero > 0)


var soma = acha.reduce((accumulator,value) => accumulator + value,0);
var media = (soma)/ acha.length


console.log(`A soma dos ${acha.length} numeros positivos digitados (${acha}) é ${soma}, e a media desses numeros é ${media}`);




