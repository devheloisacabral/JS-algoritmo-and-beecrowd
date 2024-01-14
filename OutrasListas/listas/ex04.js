// 5. Encontre o último elemento em uma lista de numeros cujo valor é maior que N.
function ultimoMaiorQueN(lista, n) {
    let ultimoMaior = null; // inicio uma variavel que tem a opção de ser mudada com um valor null

    for (let i = lista.length - 1; i >= 0; i--) { //percorro o array de trás pra frente
        if (lista[i] > n) {
            ultimoMaior = lista[i];
            break; // mando parar assim q eu encontrar o primeiro elemento (que para o usuário é o último)
        }
    }

    if (ultimoMaior !== null) {
        console.log('O último elemento maior que ' + n + ' é: ' + ultimoMaior);
    } }

    ultimoMaiorQueN([1,2,3,4], 1)