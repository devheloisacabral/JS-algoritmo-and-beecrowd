// Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

// Entrada
// O arquivo de entrada contém dois valores inteiros.

// Saída
// O programa deve imprimir um valor inteiro. Este valor é a soma dos valores pares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.



const prompt = require('prompt-sync')
const prompt2 = prompt()

const inicio = parseInt(prompt2('Digite um numero inicio '))
const fim = parseInt(prompt2('Digite um numero fim '))

for (i=inicio+1; i < fim; i+=2){
    var impar = [i]     
}
if (inicio === fim){
    console.log('0')
} else{
    var soma = impar.reduce((accumulator,value) => accumulator + value,0);
    console.log(soma)
}

