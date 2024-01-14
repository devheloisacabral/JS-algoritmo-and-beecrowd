// 18. Criar uma função que imprime todos os elementos de um array
// que estão posicionados em índices múltiplos de 5.
// imprime5(["hey",2,3,6,7,8,9,0,"olá"]) => imprime hey e 8

function imprimeMult5(arr) {
    for (let i = 0; i < arr.length; i++) { //laço de repeticao pra passar percorrendo o meu array. i começa no 0, i tem que acabar de acordo com o tamanho da lista e 1 percorre de 1 em 1 na lista
      if (i % 5 === 0) { // se o numero dividido por 5 tiver resto 0, imprima i. Se não, não faz nada
        console.log(arr[i]);
      }
    }
  }
  

  imprimeMult5(["hey", 2, 3, 6, 7, 8, 9, 0, "olá"]); // vai imprimir na tela o hey e o 8