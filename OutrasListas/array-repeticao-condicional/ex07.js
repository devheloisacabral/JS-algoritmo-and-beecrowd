// 7. Criar uma função que retorna a quantidade de numeros
// de um numero inteiro positivo qualquer.

var numeroTeste = 1000000000
var converte = numeroTeste.toString() // aqui eu transormei o numero pra string para dividir com o método split
var separa = converte.split('') // aplicando a separação por split
console.log(separa.length) // só colocar length que ele conta 

