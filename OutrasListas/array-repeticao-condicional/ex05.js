// 5. Criar uma função que retorna a soma dos numeros naturais de 1 a n.


  function soma(n){
    let soma = 0
    for(let i = 1; i<n; i ++){
        soma += i // enquanto esse laço de repetição for verdadeiro, eu acrescento o valor de i no ultimo valor da soma, até que as condições sejam false
    } return soma 
  }

  console.log(soma(10))

