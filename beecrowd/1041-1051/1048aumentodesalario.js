// A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


// Salário	Percentual de Reajuste
// 0 - 400.00
// 400.01 - 800.00
// 800.01 - 1200.00
// 1200.01 - 2000.00
// Acima de 2000.00

// 15%
// 12%
// 10%
// 7%
// 4%

// Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

// Entrada
// A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

// Saída
// Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.

const prompt = require('prompt-sync')
const prompt2 = prompt()

const salario = parseInt(prompt2('Digite seu salario '))

if(salario>= 0 && salario <= 400){
    const novosalario = 15/100 * salario + salario
    const ganho = novosalario - salario
    console.log(`Novo salário de ${novosalario} reais, adicional ganho de ${ganho} reais na porcentagem de 15%`) 
} if(salario >= 400.01 && salario <= 800){
    const novosalario = 12/100 * salario + salario
    const ganho = novosalario - salario
    console.log(`Novo salário de ${novosalario} reais, adicional ganho de ${ganho} reais na porcentagem de 12%`) 
} if(salario>= 800.01 && salario <=1200){
    const novosalario = 10/100 * salario + salario
    const ganho = novosalario - salario
    console.log(`Novo salário de ${novosalario} reais, adicional ganho de ${ganho} reais na porcentagem de 10%`) 
} if(salario >= 1201 && salario <= 2000){
    const novosalario = 7/100 * salario + salario
    const ganho = novosalario - salario
    console.log(`Novo salário de ${novosalario} reais, adicional ganho de ${ganho} reais na porcentagem de 7%`) 
} if(salario> 2000){
    const novosalario = 4/100 * salario + salario
    const ganho = novosalario - salario
    console.log(`Novo salário de ${novosalario} reais, adicional ganho de ${ganho} reais na porcentagem de 4%`) 
}