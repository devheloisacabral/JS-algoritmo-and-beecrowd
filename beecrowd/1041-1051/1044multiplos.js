// Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", 
// indicando se os valores lidos são múltiplos entre si.

// Entrada
// A entrada contém valores inteiros.

// Saída
// A saída deve conter uma das mensagens conforme descrito acima.


const prompt = require('prompt-sync')
const prompt2 = prompt()

const numero1 = parseInt(prompt2('Digite o primeiro valor '))
const numero2 = parseInt(prompt2('Digite o segundo valor '))

if(numero1 % numero2 == 0 || numero2 % numero1 == 0){
    console.log('São múltiplos')
} else{
    console.log('Não são múltiplos')
}
