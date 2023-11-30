// 4. Encontre o primeiro elemento em uma lista de numeros cujo valor é maior que N.


// devolvendo todos os elemento que sao maiores que n na lista
function maioresQueN(lista, n){
    lista.forEach(element => {
        if(element > n){
            console.log('O elemento maior que n é ' + element )
        } 
    });
}



maioresQueN([1,2,3,4,5,6,7,8,9,10], 5)


// função que vai devolver apenas o primeiro termo maior que n 
//entao eu tenho que ter uma variável de controle e um break 


function primeiroMaiorQueN(lista, n){
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > n) {
            console.log('O primeiro elemento maior que ' + n + ' é: ' + lista[i]);
            return lista[i];
        }
    }
    console.log('Não há elementos maiores que ' + n + ' na lista.');
    return null; 
}

primeiroMaiorQueN([1,2,3,4,5,6,7,8,9,10], 11);



