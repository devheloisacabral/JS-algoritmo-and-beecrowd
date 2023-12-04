// Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. Para cada valor lido, mostre uma mensagem em inglês dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, seu programa deverá imprimir apenas NULL.

// Entrada
// A primeira linha da entrada contém um valor inteiro N(N < 10000) que indica o número de casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

// Saída
// Para cada caso, imprima uma mensagem correspondente, de acordo com o exemplo abaixo. Todas as letras deverão ser maiúsculas e sempre deverá haver um espaço entre duas palavras impressas na mesma linha.

const lista = []
const prompt = require('prompt-sync')
const prompt2 = prompt()

const casoDeTeste = parseInt(prompt2('Digite o numero de casos de teste ')) // ele tem que pedir e armazenar de acordo com o numero que o usuario digitou ali

for(i=0; i<casoDeTeste; i++){
    var valores = parseInt(prompt2('Digite um valor '))
    if (valores > 0 && valores % 2 == 0){
        var positivoPar = lista.push(valores + ' - ODD POSITIVE')
    } if(valores > 0 && valores % 3 == 0){
        var positivoImpar = lista.push(valores + ' - EVEN POSITIVE')
    } if(valores < 0 && valores % 2 == 0){
        var negativoPar = lista.push(valores + ' - ODD NEGATIVE')
    }if(valores < 0 && valores % 3 == 0){
        var negativoImpar = lista.push(valores + ' - EVEN NEGATIVE')
    } if(valores == 0){
        var nulo = lista.push(valores + ' - NULL')
    }
       
    
}

console.log(lista)