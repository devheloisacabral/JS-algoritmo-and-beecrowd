// 8. Criar uma função que retorna a quantidade de caracteres
// de um texto qualquer.
// IMPORTANTE:  na contagem, não considere espaços em branco, como caracter!


var frase = 'teste com 16 letras';
var separa = frase.replace(/\s/g, '').split(""); // metodo trim nao funcionou, utilizar o metodo replace

console.log(separa.length);