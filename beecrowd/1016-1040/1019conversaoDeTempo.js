// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, 
// e informe-o expresso no formato horas:minutos:segundos.

// Entrada
// O arquivo de entrada contém um valor inteiro N.

// Saída
// Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.

// 60 segundos é 1 minuto
// 60 minutos é 1 hora

//140153 

function converteTempo(tempo){
    const hora = Math.trunc((tempo / 3600)) 
    const restohora = tempo - hora * 3600 

    const minuto = Math.trunc((restohora / 60))
    const restominuto = restohora - minuto * 60 
    const segundo = restominuto

    console.log(hora + ':' + minuto +':'+ segundo)
}

converteTempo(140153)

