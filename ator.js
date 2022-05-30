//variáveis do ator
let xAtor = 85
let yAtor = 365
let colisao = false
let meusPontos = 0

function mostraAtor() {
   image(imagemAtor, xAtor, yAtor, 32, 32)
}

function movimentaAtor() {
   if (keyIsDown(UP_ARROW)) {
      yAtor -= 3
   }
   if (keyIsDown(DOWN_ARROW)) {
      if (podeSeMover()) {
         yAtor += 3
      }
   }
}

function verificaColisao() {
   //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
   for (let i = 0; i < imagemCarros.length; i++) {
      colisao = collideRectCircle(
         xCarros[i],
         yCarros[i],
         comprimentoCarro,
         alturaCarro,
         xAtor,
         yAtor,
         15
      );
      if (colisao) {
         voltaAtorParaPosicaoInicial();
         //somDaColisao.play();
         if (pontosMaiorQueZero()) {
            meusPontos -= 1;
         }
      }
   }
}

function voltaAtorParaPosicaoInicial() {
   yAtor = 365
}

function incluiPontos() {
   textAlign(CENTER)
   fill(color(249, 248, 113))
   rect(79, 5, 40, 24, 5)
   fill(color(239, 72, 35))
   textSize(20)
   text(meusPontos, width / 5, 25)
}

function marcaPonto() {
   if (yAtor < 30) {
      meusPontos += 1;
      //somDoPonto.play();
      voltaAtorParaPosicaoInicial()
   }
}

function pontosMaiorQueZero() {
   return meusPontos > 0
}

function podeSeMover() {
   return yAtor < 366
}
