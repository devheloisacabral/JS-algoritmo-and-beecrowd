// Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).

// Entrada
// O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.

// Saída
// Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.

const lista = []

const prompt = require('prompt-sync')
const prompt2 = prompt()
    const valor1 = parseInt(prompt2('Digite um valor '))
    const valor2 = parseInt(prompt2('Digite outro valor '))


    if(valor1 > valor2){
        
        var intervalo = valor1 - valor2
        for(i=0; i<= intervalo; i++){
            
            var numeros =+ valor2 + i
            const manda = lista.push(numeros) 

        }

    } else{

        var intervalo = valor2 - valor1
        for(i=0; i<= intervalo; i++){
            
            var numeros =+ valor1 + i
            const manda = lista.push(numeros) 

        }
    }

    const somaDaBusca = lista.reduce((accumulator,value) => accumulator + value,0);
    console.log(somaDaBusca)