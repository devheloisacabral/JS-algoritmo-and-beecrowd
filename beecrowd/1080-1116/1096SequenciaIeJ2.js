// Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

// Entrada
// Não há nenhuma entrada neste problema.

// Saída
// Imprima a sequencia conforme exemplo abaixo

// Exemplo de Saída
// I=1 J=7
// I=1 J=6
// I=1 J=5
// I=3 J=7
// I=3 J=6
// I=3 J=5
// ...
// I=9 J=7
// I=9 J=6
// I=9 J=5
//vou parar no 9 entao para nao virar um loop infinito


var letrai = [0,1,3,5,7,9]
var letraj = [0,7,6,5]


for (i=0; i < 6; i ++){
   console.log(`i = ${letrai[i]} e j = ${letraj[1]}`)
   console.log(`i = ${letrai[i]} e j = ${letraj[2]}`)
   console.log(`i = ${letrai[i]} e j = ${letraj[3]}`)
   var controle = i
     
}