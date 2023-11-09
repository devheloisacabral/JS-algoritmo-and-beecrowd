// 11. Crie uma função chamada pricePerAgeAndSex
// Essa função deverá calcular o preço com desconto aplicado
// de acordo com a idade e o sexo do cliente;
// se o cliente for mulher e idosa, deve aplicar um desconto de 40% ao preço;
// se o cliente for mulher e não-idosa, deve aplicar um desconto de 30%;
// se o cliente for homem e idoso, deve aplicar um desconto de 20%;
// se o cliente for homem e não idoso, deve aplicar um desconto de 10%;
// considere idoso clientes que possuem pelo menos 60 anos;

function pricePerAgeAndSex(x,y,z){
    if (x == 'mulher' && y >= 60){
        return (z - ((40/100)* z))
    } if (x == 'mulher' && y < 60){
        return z - ((30/100)*z)
    }if (x == 'homem' && y > 60){
        return z - ((20/100)* z)
    }if (x == 'homem' && y < 60){
        return z - ((10/100)*z)
    }
}

console.log(pricePerAgeAndSex('homem', 61, 100))