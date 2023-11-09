// 7. Crie uma função que retorna um preço após aplicado um desconto de n%

function descontoDesconhecido(x,y){
    return x - ((y/100) * x)
}

console.log(descontoDesconhecido(20,10))