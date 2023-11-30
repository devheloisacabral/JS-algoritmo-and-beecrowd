// 2. Criar uma função que multiplica numeros pares por dois
// ex: multiplyEvenBy2([1, 3, 2]) => [1, 4, 6]

function multiplica(lista){
    lista.forEach(element => {
       if(element % 2 == 0){
        console.log(element * 2)
       } else{
        console.log(element)
       }
    });
}

multiplica([1,2,3,4])