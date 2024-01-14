// 21. Crie uma função que recebe nome como parâmetro um nome
// e retorna o mesmo nome. Se porém um nome não for especificado,
// a função deverá retornar a string "Desconhecido";
// ex: saudacao() => "Desconhecido"; ex: saudacao("") => "Desconhecido"

function saudacao(nome){
    
    if (nome == null){
        console.log('Olá Desconhecido')
    }else{return nome}
    
}

console.log(saudacao())