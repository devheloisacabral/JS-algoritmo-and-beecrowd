// 15. Criar uma função que calcula o mínimo múltiplo comum de dois
// inteiros positivos.
// ex: mmc(2,3) => 6;  mmc(4,12) => 12

//Nivel mais dificil mas importante de estudar!!
//O mmc depende do mdc de dois numeros, então temos que ter duas funções

function mdc(x,y){
    return y === 0 ? x: mdc(y, x% y)
}

// formula do mmc é x* y/ mdc(x,y)
function mmc(x,y){
    return (x*y)/ mdc(x,y)
}

console.log(mmc(5,25))