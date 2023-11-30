// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da 
// esquerda para a direita.  Em seguida conclua qual dos animais 
// seguintes foi escolhido, através das três palavras fornecidas.

//quero criar uma solução diferente

const prompt = require('prompt-sync')
const prompt2 = prompt()

const op1 = prompt2('Digite o tipo de animal ')
const op2 = prompt2('Digite o tipo de animal ')
const op3 = prompt2('Digite o tipo de animal ')

if(op1 == 'vertebrado'){
    vertebrado()
} else{
    invertebrado()
}

function vertebrado(){
    if(  op2 == 'ave' && op3 == 'carnivoro'){
        console.log('Aguia')}
    if(  op2 == 'ave' && op3 == 'onivoro'){
        console.log('Pomba')
    } if(  op2 == 'mamifero' && op3 == 'onivoro'){
        console.log('Homem')
    } if(  op2 == 'mamifero' && op3 == 'herbivoro'){
        console.log('Vaca')
    }

}

function invertebrado(){
    if(op2 == 'inseto' && op3 == 'hematofago'){
        console.log('Pulga')
    }if(op2 == 'inseto' && op3 == 'herbivoro'){
        console.log('Lagarta')
    }if(op2 == 'anelido' && op3 == 'hematofago'){
        console.log('Sanguessuga')
    } if(op2 == 'anelido' && op3 == 'onivoro'){
        console.log('Minhoca')
    }
}
