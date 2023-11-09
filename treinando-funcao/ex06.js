// 6. Crie uma função que retorna um preço após aplicado um desconto de 10% ex: precoComDesconto(10) => 9

function desconto(x){
    return x - (10/100 * x)
}

console.log(desconto(20))