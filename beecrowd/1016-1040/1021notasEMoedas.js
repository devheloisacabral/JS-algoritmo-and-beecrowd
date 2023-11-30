// Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. 
// A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. 
// As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. 
// A seguir mostre a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

// Saída
// Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

// Obs: Utilize ponto (.) para separar a parte decimal.


function menorNumeroDeNotasECedulas(valor){
     
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

    const v1 = Math.trunc((resto1 / 1))
    const restomoedas = resto1 - v1 * 1 

    const moedas = restomoedas * 100 //ponto de virada do codigo

    const m50 = Math.trunc((moedas / 50))
    const resto25 = moedas - m50 * 50

    const m25 = Math.trunc((resto25 / 25))
    const restom10 = resto25 - m25 * 25

    const m10 = Math.trunc((restom10 / 10))
    const restom5 = restom10 - m10 * 10

    const m5 = Math.trunc((restom5 / 5))
    const restom1 = restom5 - m5 * 5

    const m1 = (restom1 / 1).toFixed(1)


    console.log('A quantidade de notas de 100 é ' + v100)
    console.log('A quantidade de notas de 50 é ' + v50)
    console.log('A quantidade de notas de 20 é ' + v20)
    console.log('A quantidade de notas de 10 é ' + v10)
    console.log('A quantidade de notas de 5 é ' + v5)
    console.log('A quantidade de notas de 2 é ' + v2)
    console.log('A quantidade de moedas de 1 real é ' + v1)
    console.log('A quantidade de moedas de 50 é ' + m50)
    console.log('A quantidade de moedas de 25 é ' + m25)
    console.log('A quantidade de moedas de 10 é ' + m10)
    console.log('A quantidade de moedas de 5 é ' + m5)
    console.log('A quantidade de moedas de 1 centavo é ' + m1)

}

menorNumeroDeNotasECedulas(91.01)