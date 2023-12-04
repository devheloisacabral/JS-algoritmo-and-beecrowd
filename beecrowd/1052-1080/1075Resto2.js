// Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

// Entrada
// A entrada contém um valor inteiro N (N < 10000).

// Saída
// Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

const lista = []
const prompt = require('prompt-sync')
const prompt2 = prompt()

const limite = parseInt(prompt2('Digite um valor N ')) 

for(i=1; i <= 1000; i++){
    const manda = lista.push(i)    
}


const verificaLista = lista.filter((Element) => Element % limite == 2)
console.log(verificaLista)