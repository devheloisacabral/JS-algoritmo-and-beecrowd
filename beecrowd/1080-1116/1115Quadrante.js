// Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

// Entrada
// A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.

// Saída
// Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.
const prompt = require('prompt-sync')
const prompt2 = prompt()


do{

    var x = parseInt(prompt2('Digite o valor de x '))
    var y = parseInt(prompt2('Digite o valor de y '))
    
        if(x>0 && y>0){
        console.log('Quadrante 1')
    } if(x>0 && y < 0 ){
        console.log('Quadrante 4')
    } if(x<0 && y > 0 ){
        console.log('Quadrante 2')
    } if(x<0 && y< 0 ){
        console.log('Quadrante 3')
}    
}while(x != 0 && y != 0)



