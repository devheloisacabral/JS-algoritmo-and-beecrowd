// 6. Encontre o primeiro elemento em uma lista de numeros, se houver,
// cujo valor é igual a soma dos dois numeros anteriores;

function encontrarElementoSomaAnteriores(lista) {
    for (let i = 2; i < lista.length; i++) {
      if (lista[i] === lista[i - 1] + lista[i - 2]) {
        return lista[i];
      }
    }
    return null; // Retorna null se não houver tal elemento na lista
  }
  

  const numeros = [2, 3, 5, 8, 13, 21, 34, 55]; // Exemplo de uma lista de números
  const elementoEncontrado = encontrarElementoSomaAnteriores(numeros);
  if (elementoEncontrado !== null) {
    console.log(`O primeiro elemento cujo valor é igual à soma dos dois anteriores é: ${elementoEncontrado}`);
  } else {
    console.log("Não foi encontrado nenhum elemento com essa propriedade.");
  }
  