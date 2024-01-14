// 12. Crie uma função que retorna o valor máximo entre três números quaisquer
// ex: max(12,4,8) => 12; max(12,4,18) => 18

function ordenarNumeros(arrayDeNumeros) {
    return arrayDeNumeros.sort(function(a, b) {
        return a - b;
    });
}

var numeros = [5,4,3]
var ordenado = ordenarNumeros(numeros)
console.log(ordenado[2] + ' é o maior número') //[2] para uma lista de 3 numeros pq sempre começa com zero