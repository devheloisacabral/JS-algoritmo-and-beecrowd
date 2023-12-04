// Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

// Entrada
// O arquivo de entrada contém 100 números inteiros, positivos e distintos.

// Saída
// Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const lista = []

for (i=1; i <= 10; i++){
    const valor = parseInt(prompt2('Digite um valor '))
    const manda = lista.push(valor)
}

const crescente = lista.sort(function(a, b) {
    return a - b;
  })



  console.log(`O maior numero digitado é ${crescente[9]} que está na posição 10`)