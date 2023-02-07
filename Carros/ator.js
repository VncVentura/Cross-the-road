//codigo do ator

//ator
let xAtor = 80;
let yAtor = 368;
let colisão = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor,xAtor,yAtor,30,30);
  //print(yAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
       yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length;i+=1){
   colisao =  collideRectCircle (xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15)
    if(colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;  
      }
    }
  }
}
function voltaAtorPosicaoInicial(){
  yAtor = 368;
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255,255,60))
  text(meusPontos,width/5, 25); 
  
}

function marcarPonto(){
  
  if (yAtor<15){
    meusPontos += 1;
    voltaAtorPosicaoInicial();
    somDoPonto.play();
  }
  
}

function perdePonto(){
  if(colisao){
    meusPontos -=1;
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  
  return meusPontos > 0; 
}

function podeSeMover(){
  
  return yAtor < 368;
}





