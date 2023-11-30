// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. 
// Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. 
// Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Imprima a saída conforme exemplo fornecido.

function conversaoDeIdadeEmDias(idade){

    const ano = Math.trunc((idade / 365))
    const restomes = idade - ano * 365 //ele me retorna em dias, no caso de 400, me retorna 35 dias

    const mes = Math.trunc((restomes / 30))
    const restoDia = restomes - mes * 30

    const dias = restoDia

    console.log(ano + 'ano(s) ' + mes + ' mes(es) e ' + dias + ' dia(s')
}


conversaoDeIdadeEmDias(30)