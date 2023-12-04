const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = parseInt(prompt2('Digite um numero '))
const numero2 = parseInt(prompt2('Digite um numero '))
const numero3 = parseInt(prompt2('Digite um numero '))
const numero4 = parseInt(prompt2('Digite um numero '))
const numero5 = parseInt(prompt2('Digite um numero '))

const lista = [numero1, numero2, numero3, numero4, numero5]
const acha = lista.filter((Element) => Element%2 == 0)

const tamanho = [acha.length]

console.log(`${tamanho} numero(s) pares`)