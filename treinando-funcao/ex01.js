// 1. Crie uma função que declara uma variável sem atribuir valor a ela e retorna essa variável

function declaraVariavel() {
  var variavel;
  return variavel;
}

var resultado = declaraVariavel();
console.log(resultado);

// por que const nao funcionou nesse exercicio? Porque const não sofre reatribuição, significa que é imutável, então não pode ser iniciado antes de atribuir um valor
// Diferenças entre as variáveis em js:

// function exemploVar() {
//    if (true) {
//        var nome = "Exemplo";
//    }  console.log(nome); // Output: "Exemplo" - var tem escopo de função e é hoisted.
//  }
// var tem escopo de função, sofre hosting e pode ser usada antes de declarar seu valor e podem ser reatribuídas

//function exemploLet() {
//    if (true) {
//        let nome = "Exemplo";
//       console.log(nome); // Output: "Exemplo" - let tem escopo de bloco. 
//   }  //console.log(nome); // Erro: nome não está definido aqui, pois tem escopo de bloco.
// }
// let tem escopo de bloco, sofre hosting mas espera o valor ser atribuído para inicializar a variável, podem ser reatribuídas mas nunca redeclaradas no mesmo bloco

//const PI = 3.14;  // PI = 3.14159; // Erro: você não pode reatribuir uma variável constante.


//const pessoa = {
//    nome: "João"
//};
//pessoa.nome = "Maria"; // Isso é permitido, pois você não está reatribuindo a variável, mas sim modificando uma propriedade do objeto.

//console.log(pessoa.nome); // Output: "Maria"

//const  tem escopo de bloco e sofre o mesmo hoisting que let, mas é imutável e nao pode ser reatribuída.

