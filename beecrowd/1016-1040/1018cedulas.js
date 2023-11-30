// Leia um valor inteiro. 
//A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto.
// As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido.

function menorNumeroDeNotas(valor){
     
    const v100 = Math.trunc((valor / 100))
    const resto50 = valor - v100 * 100

    const v50 = Math.trunc((resto50 / 50))
    const resto20 = resto50 - v50 * 50

    const v20 = Math.trunc((resto20/20))
    const resto10 = resto20 - v20 * 20
    
    const v10 = Math.trunc((resto10/10))
    const resto5 = resto10 - v10 * 10

    const v5 = Math.trunc((resto5 / 5))
    const resto2 = resto5 - v5 * 5

    const v2 = Math.trunc((resto2 / 2))
    const resto1 = resto2 - v2 * 2

    const v1 = Math.trunc((resto1 /1))


    console.log('A quantidade de notas de 100 é ' + v100)
    console.log('A quantidade de notas de 50 é ' + v50)
    console.log('A quantidade de notas de 20 é ' + v20)
    console.log('A quantidade de notas de 10 é ' + v10)
    console.log('A quantidade de notas de 5 é ' + v5)
    console.log('A quantidade de notas de 2 é ' + v2)
    console.log('A quantidade de notas de 1 é ' + v1)
}

menorNumeroDeNotas(588)










