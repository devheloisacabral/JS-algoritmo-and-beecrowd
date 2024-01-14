// 9. Criar uma função que retorna o primeiro dígito
// de um numero inteiro positivo qualquer.

var numero = 9000
var converte = numero.toString() // novamente transformando em uma string para poder aplicar o método split
var separa = converte.split('')
console.log(separa[0])