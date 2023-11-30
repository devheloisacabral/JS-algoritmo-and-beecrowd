// 7. Verifique se algum de uma lista sao maiores que um valor N qualquer.
//function everyGreaterThan() {}

function todosSaoMaiores(lista, n){
    for(i = 0; i <= lista.length; i ++){
        if(lista[i] > n){
            console.log('O elemento ' + lista[i] + ' é maior que n')
        } else{console.log('O elemento ' + lista[i] + ' não é maior que n')}
    }
}

todosSaoMaiores([1,2,3,4,5,6], 2)