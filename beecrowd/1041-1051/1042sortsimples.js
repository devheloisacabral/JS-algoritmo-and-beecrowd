// Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, 
// uma linha em branco e em seguida, os valores na sequência como foram lidos.

// Entrada
// A entrada contem três números inteiros.

// Saída
// Imprima a saída conforme foi especificado.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = parseInt(prompt2('Digite o primeiro numero '))
const numero2 = parseInt(prompt2('Digite o segundo numero '))
const numero3 = parseInt(prompt2('Digite o terceiro numero '))

let listaDeNumeros = [numero1, numero2, numero3]

listaDeNumeros.sort(function(a, b) {
  return a - b; // é necessario fazer essa funcao de comparação para nao dar problema na ordenação de numero negativos
})

console.log(listaDeNumeros)
