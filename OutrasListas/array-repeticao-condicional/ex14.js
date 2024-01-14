// 14. Criar uma função que reverte um numero.

function inverteNumero(numero){
    var converte = numero.toString()
    var separaInverte = converte.split('').reverse().join('')
    return separaInverte
}

console.log(inverteNumero(54321))