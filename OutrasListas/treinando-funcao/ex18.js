// 20. Crie uma função que recebe um numero inteiro positivo como parâmetro
// e que retorna "uga" se um numero for multiplo de 2
// e que retorna "buga" se um numero for multiplo de 5
// e que retorna "ugabuga" se um numero for multiplo de 10
// e "bugou" se o numero não for multiplo nem de 2, nem de 5 nem de 10;

function verifica(x){
    if (x % 2 === 0){
        console.log('uga')
    } if (x % 5 === 0 ){
        console.log('buga')
    } if(x % 10 === 0){
        console.log('Ugabuga')
    }else {
        console.log('bugou')
    }
}

console.log(verifica(27))