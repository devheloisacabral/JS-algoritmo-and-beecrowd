// 10. Crie uma função que classifica uma idade em jovem, meia-idade e idoso
// jovens são aqueles que possuem até 39 anos;
// meia-idade são os que estão entre 40 e 60 anos;
// idosos são os que posssuem mais de 60 anos;
// a idade zero deve retornar "recém-nascido";
// Se a idade for menor que zero ou maior que 150, retornar "idade inválida"
// ex: classificaIdade(-1) => "idade inválida"

function classificaIdade(x){
    if (x < 39 && x > 0){
        console.log("Jovem")
    } if (x > 40 && x < 60){
        console.log("Meia-idade")
    } if(x > 60 && x < 150){
        console.log('Idoso')
    } if (x = 0){
        console.log("Recém nascido")
    } else{
        console.log("Idade inválida")
    }
}

console.log(classificaIdade(151))