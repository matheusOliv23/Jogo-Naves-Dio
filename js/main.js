function start() {
  $('#inicio').hide()

  $('#fundoGame').append("<div id='jogador'class='anima1'></div>")
  $('#fundoGame').append("<div id='inimigo1' class='anima2'></div>")
  $('#fundoGame').append("<div id='inimigo2'></div>")
  $('#fundoGame').append("<div id='amigo' class='anima3'></div>")

  var jogo = {}
  var TECLA = {
    W: 87,
    S: 83,
    D: 68
  }

  jogo.pressionou = []

  $(document).keydown(function (e) {
    jogo.pressionou[e.which] = true
  })

  $(document).keyup(function (e) {
    jogo.pressionou[e.which] = false
  })

  jogo.timer = setInterval(loop, 30) //chama a função loop a cada 30ms

  function loop() {
    movefundo()
    movejogador()
  }

  function movefundo() {
    esquerda = parseInt($('#fundoGame').css('background-position'))
    $('#fundoGame').css('background-position', esquerda - 2) //faz a movimentação infinita para a direita
  }
  function movejogador() {
    if (jogo.pressionou[TECLA.W]) {
      var topo = parseInt($('#jogador').css('top'))
      $('#jogador').css('top', topo - 10)
    }

    if (jogo.pressionou[TECLA.S]) {
      var topo = parseInt($('#jogador').css('top'))
      $('#jogador').css('top', topo + 10)
    }

    if (jogo.pressionou[TECLA.D]) {
      //Chama função Disparo
    }
  }
}
