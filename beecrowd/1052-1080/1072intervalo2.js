// Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
// Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.

// Entrada
// A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
// Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
 

// Saída
// Para cada caso, imprima quantos números estão dentro (in) e quantos valores estão fora (out) do intervalo.

const lista = []


const prompt = require('prompt-sync')
const prompt2 = prompt()

const casoDeTeste = parseInt(prompt2('Digite o numero de casos de teste ')) // ele tem que pedir e armazenar de acordo com o numero que o usuario digitou ali

for(i=0; i<casoDeTeste; i++){
    var valores = parseInt(prompt2('Digite um valor '))
    var teste = lista.push(valores)   
    
}



const dentroDoIntervalo = lista.filter((Element) => Element >= 10 && Element <= 20)
const tamanho1 = (dentroDoIntervalo).length

const foraDoIntervalo = lista.filter((Element) => Element < 10)
const foraDoIntervalo2 = lista.filter((Element) => Element > 20)
const tamanho2 = ([foraDoIntervalo, foraDoIntervalo2]).length



console.log(`${tamanho1} in and ${tamanho2} out `)