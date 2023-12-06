// Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

// Entrada
// Não há nenhuma entrada neste problema.

// Saída
// Imprima a sequencia conforme exemplo abaixo.

// Exemplo de Saída
// I=1 J=7
// I=1 J=6
// I=1 J=5
// I=3 J=9
// I=3 J=8
// I=3 J=7
// ...
// I=9 J=15
// I=9 J=14
// I=9 J=13

var letrai = [1,3,5,7,9]
var letraj = [8]


for (i=0; i < 5; i ++){
   console.log(`i = ${letrai[i]} e j = ${letraj[0] - 1}`)
   console.log(`i = ${letrai[i]} e j = ${letraj[0] -2}`)
   console.log(`i = ${letrai[i]} e j = ${letraj[0] - 3}`)
   letraj[0] += 2
   
     
}