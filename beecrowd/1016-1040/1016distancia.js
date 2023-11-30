// Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.

// Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.

// Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

//velocidade inicial de x = 60km/h
//velocidade inicial de y = 90km/h

//depois de 1h, o carro y vai estar a 30km na frente do carro x(1km a cade 2 minutos)

// se a cada 2 minutos, o carro y anda 1 km... quanto tempo vai levar para o carro y se distanciar tantos km do x 

function minutos(distancia){
    
    const conta = distancia * 2 
    console.log('O carro y, levará ', conta, ' minutos para tomar essa distancia')
}

minutos(500)
