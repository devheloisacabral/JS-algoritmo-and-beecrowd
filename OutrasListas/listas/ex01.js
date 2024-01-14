// 1. Criar uma função que multiplica uma lista de numeros por dois
// ex: multiplyBy2([1,3]) => [2,6]

function multiplicaListaPor2(lista){
    lista.forEach(element => {
        multiplica = [element * 2]
        console.log(multiplica)
    });
}

multiplicaListaPor2([2,3])