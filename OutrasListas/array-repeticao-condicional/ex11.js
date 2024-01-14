// 11. Criar uma função que calcula o fatorial de um numero.
// Ex: 5!(5 fatorial) = 5 * 4 * 3 * 2 *1

function fatorial(numero) {
    let resultado = 1
    while (numero > 1) {
        resultado *= numero; 
        numero--; // Decrementa o número para a próxima iteração
      }
      return resultado;
    }
  

console.log(fatorial(5));
