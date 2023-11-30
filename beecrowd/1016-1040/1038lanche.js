// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item.
// A seguir, calcule e mostre o valor da conta a pagar.



// Entrada
// O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

// Saída
// O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
const prompt = require('prompt-sync')
const prompt2 = prompt()


console.log(' \nCodido \t\t Especificação \t\t Preço \n')

console.log('1 \t\t Cachorro quente \t R$4,00\n2 \t\t Xsalada \t\t R$4,50\n3 \t\t Xbanco \t\t R$5,00\n4 \t\t Torrada \t\t R$2,00\n5 \t\t Refrigerante \t\t R$1,50 \n')

function escolhaEquantidade(escolha, escolha2){
    var escolha = prompt2("Digite aqui o codigo do pedido ");
    var escolha2 = prompt2("Digite aqui a quantidade do item ");

    if(escolha == '1'){
        const multiplica = escolha2 * 4
        console.log(`Total ${multiplica} reais`)
    } if(escolha == '2'){
        const multiplica = escolha2 * 4.50
        console.log(`Total de ${multiplica} reais`)
    } if (escolha == '3'){
        const multiplica = escolha2 * 5
        console.log(`Total de ${multiplica} reais`)
    } if(escolha == '4'){
        const multiplica = escolha2 * 2
        console.log(`Total de ${multiplica} reais`)
    } if(escolha == '5'){
         const multiplica = escolha2 * 1.50
         console.log(`Total de ${multiplica} reais`)
    }
} // aqui estamos levando em conta que o cliente só pode fazer um pedido, se for um loop tenho que usar for


escolhaEquantidade()

