// 13. Crie uma função que retorna que subtrai o valor máximo dos outros dois
// ex: subtraiDoMax(12,42,8) => 22;

function ordenarNumeros(arrayDeNumeros) {
    return arrayDeNumeros.sort(function(a, b) {
        return a - b;
    });
}

var listaDeNumeros = [10,20,90]
var ordenado = ordenarNumeros(listaDeNumeros)
var menor1 = ordenado[0]
var menor2 = ordenado[1]
var somaDosMenores = menor1 + menor2
var final = ordenado[2] - somaDosMenores
console.log(final)