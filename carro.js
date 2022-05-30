//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 100, 152, 210, 270, 318];
let velocidadeCarros = [2, 2.5, 3.3, 5, 3.1, 2.2];
let comprimentoCarro = 45;
let alturaCarro = 35;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}





