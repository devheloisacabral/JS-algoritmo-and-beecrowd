// 13. Criar uma função que reverte uma palavra. Usar o for.
// ex: revertWord("texto") => "otxet"

function inverte(str) {
    return str.split("").reverse().join(""); //split separa // reverse reverte // join junta tudo de novo
}
console.log(inverte('oi'))