// Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

// Entrada
// A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

// Saída
// Imprima a soma de todos valores ímpares entre X e Y.



const lista = []

const prompt = require('prompt-sync')
const prompt2 = prompt()

const casoDeTeste = parseInt(prompt2('Digite o numero de casos de teste ')) // ele tem que pedir e armazenar de acordo com o numero que o usuario digitou ali

for(i=0; i<=casoDeTeste; i++){
    var valor1 = parseInt(prompt2('Digite um valor '))
    var valor2 = parseInt(prompt2('Digite outro valor '))
    var intervalo = valor2 - valor1
    
    
    if(valor1 % 2 == 0){

        for(i=1; i<= intervalo; i+=2){
            var numeros =+ valor1 + i
            const manda = lista.push(numeros)
        }
    } 
    
    else{
        for(i=0; i<= intervalo; i+=2){
            var numeros =+ valor1 + i
            const manda = lista.push(numeros)
        }
    }

    
    const somaDaBusca = lista.reduce((accumulator,value) => accumulator + value,0);
    console.log(somaDaBusca)
}

//depois voltar e entender o erro no looping





