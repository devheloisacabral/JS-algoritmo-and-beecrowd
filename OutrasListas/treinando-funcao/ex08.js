// 8. Crie uma função que classifica uma idade em jovem, meia-idade e idoso / jovens são aqueles que possuem até 39 anos;
// meia-idade são os que estão entre 40 e 60 anos; idosos são os que posssuem mais de 60 anos;
// ex: classificaIdade(60) => "meia-idade"

function classificaIdade(x){
    if (x < 39 && x > 0){
        console.log("Jovem")
    } if (x > 40 && x < 60){
        console.log("Meia-idade")
    } if(x > 60){
        console.log('Idoso')
    }
}

console.log(classificaIdade(38))