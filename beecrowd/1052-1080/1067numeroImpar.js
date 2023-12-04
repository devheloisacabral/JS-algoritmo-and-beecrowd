// Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.

// Entrada
// O arquivo de entrada contém 1 valor inteiro qualquer.

// Saída
// Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const limite = parseInt(prompt2('Digite um numero limite '))

for (i=1; i <= limite; i+=2){
    const impar = i
    console.log(impar)
}