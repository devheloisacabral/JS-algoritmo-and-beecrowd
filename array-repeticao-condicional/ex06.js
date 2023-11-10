// 6. Criar uma função que retorna a soma dos numeros pares
// naturais de 1 a n. Não usar o if else;

function soma(n){
    let soma = 0
    for(let i = 0; i<=n; i +=2 ){
        soma += i 
    } return soma 
  }

  console.log(soma(10))