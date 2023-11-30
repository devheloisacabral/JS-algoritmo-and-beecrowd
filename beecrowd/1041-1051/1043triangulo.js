// Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


// Perimetro = XX.X


// Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


// Area = XX.X

// Entrada
// A entrada contém três valores reais.

// Saída
// O resultado deve ser apresentado com uma casa decimal.


// condição de existencia de um triangulo: a soma dos menores lados tem que ser menor que o terceiro lado
//posso ordenar os menores valores em uma lista, puxalos pelo índie e fazer um teste com if

const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = parseInt(prompt2('Digite o primeiro valor '))
const numero2 = parseInt(prompt2('Digite o segundo valor '))
const numero3 = parseInt(prompt2('Digite o terceiro valor '))

let listavalores = [numero1, numero2, numero3]

listavalores.sort(function(a, b) {
    return a - b; 
  })

const menor1 = listavalores[0]
const menor2 = listavalores[1]
const soma = menor1 + menor2
const maior = listavalores[2]

if(soma >= maior){
    const area = (menor1 + maior)* menor2 /2
    console.log(`Esse triangulo nao pode ser formado, mas a area do seu trapezio é ${area}`)
}if(menor1 <= 0 || menor2 <= 0 || maior <= 0){
    console.log('Não é possivel formar formas geometricas com valores negativos')
}
 else{
    const perimetro = soma + maior
    
    console.log(`Esse triangulo pode existir, seu perimetro é ${perimetro} metros `)
}
