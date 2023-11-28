// 19. Criar uma função que imprime todos os elementos de um array
// até encontrar um elemento repetido. Neste momento, para de imprimir.
// ex: imprimeAteRepetido([1,2,3,4,4,5,6,7]) => imprime 1,2,3,4
// ex: imprimeAteRepetido(["ho", "ho"]) => imprime "ho"

//para percorrer array => laço de repetição com sua condicional e seu incremento 

function imprimeAteRepetido(arr) {
    const elementosVistos = {};
  
    for (let i = 0; i < arr.length; i++) {
      if (elementosVistos[arr[i]] !== undefined) {
        break;
      }
  
      console.log(arr[i]);
      elementosVistos[arr[i]] = true;
    }
  }
imprimeAteRepetido([1,2,3,4,4,5,6,7])

