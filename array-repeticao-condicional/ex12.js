// 12. Criar uma função que verifica se um número natural é primo ou não.
// Dica: Um número N é primo se ele não for divisível por nenhum numero
// de 2 a N-1.

function verifica(numero){
    if(numero % 2 === 0 && numero != 2){ // gambiarra pro 2 entrar sem ter que aumentar o código
        console.log('Esse número não é um número primo')
    }else{
        console.log('Este número é um número primo')
    }
}

console.log(verifica(2))