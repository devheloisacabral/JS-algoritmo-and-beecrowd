// Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

// Entrada
// Não há nenhuma entrada neste problema.

// Saída
// Imprima a sequencia conforme exemplo abaixo.

// Exemplo de Saída
// I=0 J=1
// I=0 J=2
// I=0 J=3
// I=0.2 J=1.2
// I=0.2 J=2.2
// I=0.2 J=3.2
// .....
// I=2 J=?
// I=2 J=?
// I=2 J=?

var letrai = [0,1,3,5,7,9]
var letraj = [0,1,2,3]


for (i=0; i < 5; i ++){
   console.log(`i = ${letrai[i]} e j = ${letraj[1]}`)
   console.log(`i = ${letrai[i]} e j = ${letraj[2]}`)
   console.log(`i = ${letrai[i]} e j = ${letraj[3]}`)
   console.log(`i = ${letrai[i] *2} e j = ${letraj[1] * 2}`)
   console.log(`i = ${letrai[i]* 2} e j = ${letraj[2] * 2}`)
   console.log(`i = ${letrai[i] * 2} e j = ${letraj[3] * 2}`)
   letraj[1] += letraj[1]
   letraj[2] += letraj[2] 
   letraj[3] += letraj[3] 
   
     
}