// Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

// Entrada
// Não há nenhuma entrada neste problema.

// Saída
// Imprima a sequencia conforme exemplo abaixo

	
// I=1 J=60
// I=4 J=55
// I=7 J=50
// ...
// I=? J=0

var letrai = 1
var letraj = 60 


for (i=0; letraj > 0; i ++){
    var letrai = letrai + 3
    var letraj = letraj - 5
    console.log(`i = ${letrai}; j = ${letraj}`)
}