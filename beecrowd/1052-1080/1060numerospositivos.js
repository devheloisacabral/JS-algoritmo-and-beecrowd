// Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos).
//  A seguir, mostre a quantidade de valores positivos digitados.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = prompt2('Digite um numero ')
const numero2 = prompt2('Digite um numero ')
const numero3 = prompt2('Digite um numero ')
const numero4 = prompt2('Digite um numero ')
const numero5 = prompt2('Digite um numero ')
const numero6 = prompt2('Digite um numero ')

const lista = [numero1, numero2, numero3, numero4, numero5, numero6]

const acha = lista.filter((numero) => numero > 0)



console.log(acha.length + ' valores positivos')