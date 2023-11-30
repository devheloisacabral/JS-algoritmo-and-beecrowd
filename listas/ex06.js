// 6. Crie uma função que retorna um preço após aplicado um desconto de 10%
// ex: precoComDesconto(10) => 9
//vou fazer uma função que retorna o desconto de acordo com o desconto informado pelo cliente
function desconto(desconto, preco){
    const valorComDesconto = preco - (desconto/100 * preco)
    console.log('Com ' + 'desconto ' + 'porcento de desconto, o valor será de ' + valorComDesconto + ' reais')
} 


desconto(10, 100)