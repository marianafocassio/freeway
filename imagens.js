// imagen do jogo

let imagemEstrada
let imagemAtor

let imagemCarros
let imagemCarro1
let imagemCarro2
let imagemCarro3
let imagemCarro4

//sons
//let somDaTrilha
//let somDaColisao
//let somDoPonto

function preload() {
   imagemEstrada = loadImage('imagens/estrada.png')
   imagemAtor = loadImage('imagens/ator.png')
   imagemCarro1 = loadImage('imagens/carro-1.png')
   imagemCarro2 = loadImage('imagens/carro-2.png')
   imagemCarro3 = loadImage('imagens/carro-3.png')
   imagemCarro4 = loadImage('imagens/carro-4.png')

   imagemCarros = [
      imagemCarro1,
      imagemCarro4,
      imagemCarro2,
      imagemCarro3,
      imagemCarro4,
      imagemCarro1
   ]

   //somDaTrilha = loadSound('sons/trilha.mp3')
   //somDaColisao = loadSound('sons/colidiu.mp3')
   //somDoPonto = loadSound('sons/ponto.wav')
}
