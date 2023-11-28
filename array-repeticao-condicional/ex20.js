// 20. Criar uma função que imprime todos os numeros contidos
// em uma lista de lista de numeros.
// ex: flatPrint([[4,5,6], [4,5,7], [14,25,6]]) => imprime 4,5,6,4,5,7,14,25,6

//metodo flat

function imprimeNumeroDaLista(lista) {
    let novaLista = lista.flat();
    console.log(novaLista.join(','));
}

imprimeNumeroDaLista([[4, 5, 6], [4, 5, 7], [14, 25, 6]]);