//codigo carro
let xCarros=[600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318]
let velocidadeCarros = [3.6, 4, 6, 4.8, 4, 2]
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){ 
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
 }
}

function movimentaCarro(){
  for(let i = 0; i < velocidadeCarros.length; i++){
      xCarros[i] -= velocidadeCarros[i];  
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    
    if (passouTodaTela(xCarros[i])){
     xCarros[i] = 600;
    }
  }  
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
  
}


