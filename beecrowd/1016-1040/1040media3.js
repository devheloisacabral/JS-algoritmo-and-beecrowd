// Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. 
// Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". 
// Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". 
// Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

// No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. 
// Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais )
//  ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame)
//   apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.


const prompt = require('prompt-sync')
const prompt2 = prompt()

const nota1 = parseInt(prompt2("Digite sua primeira nota "));
const nota2 = parseInt(prompt2("Digite sua segunda nota "));
const nota3 = parseInt(prompt2("Digite sua terceira nota "));
const nota4 = parseInt(prompt2("Digite sua quarta nota "));

const media = (nota1 + nota2 + nota3 + nota4) /4

 console.log(`Sua média é ${media}`)
 if(media >=  70){
    console.log('Aluno aprovado!')
 } if( media <= 5){
    console.log('Aluno reprovado')
 } if(media > 5 || media <= 6.9){
    console.log('Aluno em exame')
    const exame = parseInt(prompt2('Digite a sua nota do exame '))
    console.log(`Nota do exame ${exame}`)
    const novamedia = (media + exame) / 2
    console.log(`Sua nova média é ${novamedia}`)
    if(novamedia >= 5){
        console.log('Aluno aprovado')
    } else{
        console.log(`Aluno reprovado com media ${novamedia}`)
    }
 }