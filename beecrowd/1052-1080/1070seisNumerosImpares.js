// Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

// Entrada
// A entrada será um valor inteiro positivo.

// Saída
// A saída será uma sequência de seis números ímpares.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const inicio = parseInt(prompt2('Digite um numero inicio '))
const limite = inicio + 12


for (i=inicio + 1; i < limite; i+=2){
    const impar = i
    console.log(impar)
}