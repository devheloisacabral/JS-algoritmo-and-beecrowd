// 14. Crie uma função que verifica se um número é par com if else
// ex: isEven(12) => true;

// TEM QUE FAZER UMA CONTA QUE SE FOR PAR, O RESTO DA DIVISÃO POR 2 SERÁ 0

function ehPar(x){
 if(x % 2 == 0){
    console.log('é um numero par')
 }else{
    console.log('é um número ímpar')
 }
}


console.log(ehPar(11))