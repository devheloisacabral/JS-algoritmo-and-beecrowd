// Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A 
// representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, 
// com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
// Entrada
// A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

// Saída
// Imprima todas as classificações do triângulo especificado na entrada.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = parseInt(prompt2('Digite o primeiro valor '))
const numero2 = parseInt(prompt2('Digite o segundo valor '))
const numero3 = parseInt(prompt2('Digite o terceiro valor '))

let listaDeNumeros = [numero1, numero2, numero3]

listaDeNumeros.sort(function(a, b) {
  return b - a; // é necessario fazer essa funcao de comparação para nao dar problema na ordenação de numero negativos
})

const a = listaDeNumeros[0]
const b = listaDeNumeros[1]
const c = listaDeNumeros[2]
const soma = c + b 
if(a >= soma ){
    console.log('Triangulo nao pode ser formado')
} if(a * a == (b*b + c*c)){
    console.log('Triangulo retangulo')
} if( a*a > (b*b + c*c)){
    console.log('Triangulo Obtusangulo')
} if(a*a < (b*b +  c*c)){
    console.log('Triangulo Acutangulo')
} if(a === b && b == c){
    console.log('Triangulo Equilátero')
} if( a == b &&  a != c || a == c && a != b || c == b && c!= a ){
    console.log('Triangulo Isosceles')
}






