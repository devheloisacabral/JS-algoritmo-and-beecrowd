// Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:




// Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
// DDD nao cadastrado

// Entrada
// A entrada consiste de um único valor inteiro.

// Saída
// Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.

//quero tentar pensar em formas diferentes sem ter que usar muita condicional
// posso utilizar laço de repetição para percorrer uma lista de listas


const lista = [
    {ddd: '61', nome: 'Brasilia'},
    {ddd: '71' , nome: 'Salvador'}, 
    {ddd:'11' , nome:'Sao Paulo'},
    {ddd:'21', nome:'Rio de Janeiro'},
    {ddd:'32', nome:'Juiz de Fora'},
    {ddd:'19', nome:'Campinas'},
    {ddd:'27', nome:'Vitória'},
    {ddd:'31', nome:'Belo Horizonte'}
]

const prompt = require('prompt-sync')
const prompt2 = prompt()

const ddd = prompt2('Digite o ddd que deseja buscar ')

const acha = lista.find((dado) => dado.ddd === ddd)
console.log(`O ddd ${ddd} pertence a ${acha.nome}`)

//incrível!!  :)





