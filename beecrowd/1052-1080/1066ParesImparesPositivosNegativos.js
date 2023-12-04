// Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

// Entrada
// O arquivo de entrada contém 5 valores inteiros quaisquer.

// Saída
// Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = parseInt(prompt2('Digite um numero '))
const numero2 = parseInt(prompt2('Digite um numero '))
const numero3 = parseInt(prompt2('Digite um numero '))
const numero4 = parseInt(prompt2('Digite um numero '))
const numero5 = parseInt(prompt2('Digite um numero '))

const lista = [numero1, numero2, numero3, numero4, numero5]

const achaPar = lista.filter((Element) => Element%2 == 0);
const tamanhoPar = [achaPar.length];

const achaImpar = lista.filter((Element)=> Element%3 == 0);
const tamanhoImpar = [achaImpar.length];

const achaPositivo = lista.filter((Element) => Element >= 0);
const tamanhoPositivo = [achaPositivo.length];

const achaNegativo = lista.filter((Element) => Element < 0 );
const tamanhoNegativo = [achaNegativo.length];


console.log(`${tamanhoPar} numero(s) par(es) \n ${tamanhoImpar} numero(s) impar(es) \n ${tamanhoPositivo} numero(s) positivo(s)\n  ${tamanhoNegativo} numero(s) negativo(s)`)