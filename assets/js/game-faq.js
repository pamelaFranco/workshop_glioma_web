let imgWarhol;
let secuencia = [];
let pasoJugador = 0;
let tiempoBrillo = 0;
let cuadranteActivo = -1;
let mensaje = "Haz clic en INICIAR";
let estadoJuego = 0; // 0: Inicio, 1: Mostrando secuencia, 2: Turno jugador, 3: Game over, 4: Transición
let p5Iniciado = false;

document.addEventListener("DOMContentLoaded", function() {
  const faqJuego = document.getElementById("faq-juego");
  if (faqJuego) {
    faqJuego.addEventListener("toggle", function() {
      if (faqJuego.open && !p5Iniciado) {
        p5Iniciado = true;
        new p5(sketchJuego);
      }
    });
  }
});

const sketchJuego = (p) => {
  p.preload = function() {
    imgWarhol = p.loadImage(
      '/workshop_glioma_web/Figuras/warhol_brain_fixed.png',
      () => console.log("Imagen MRI cargada."),
      () => {
        imgWarhol = p.loadImage('https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/warhol_brain_fixed.png');
      }
    );
  };

  p.setup = function() {
    let container = document.getElementById('game-container');
    let ancho = container ? container.offsetWidth : 480;
    let canvas = p.createCanvas(ancho || 480, ancho || 480);
    canvas.parent('game-container');
  };

  p.draw = function() {
    p.background(0);

    if (imgWarhol) {
      p.image(imgWarhol, 0, 0, p.width, p.height);
    }

    dibujarResalte();
    manejarLogicaJuego();
    dibujarUI();
  };

  function dibujarResalte() {
    if (cuadranteActivo !== -1) {
      p.noStroke();
      p.fill(255, 170);
      let midX = p.width / 2;
      let midY = p.height / 2;

      if (cuadranteActivo === 0) p.rect(0, 0, midX, midY);
      if (cuadranteActivo === 1) p.rect(midX, 0, midX, midY);
      if (cuadranteActivo === 2) p.rect(0, midY, midX, midY);
      if (cuadranteActivo === 3) p.rect(midX, midY, midX, midY);
    }
  }

  function dibujarUI() {
    p.fill(0, 200);
    p.noStroke();
    p.rect(p.width / 2 - 140, 15, 280, 75, 8);

    p.fill(255);
    p.textSize(15);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(mensaje, p.width / 2, 38);
    
    p.textSize(13);
    p.fill(166, 55, 55);
    p.text("Nivel / Secuencia: " + secuencia.length, p.width / 2, 65);

    if (estadoJuego === 0 || estadoJuego === 3) {
      p.fill(166, 55, 55);
      p.rect(p.width / 2 - 55, p.height - 55, 110, 40, 6);
      p.fill(255);
      p.textSize(16);
      p.text("INICIAR", p.width / 2, p.height - 35);
    }
  }

  function manejarLogicaJuego() {
    if (estadoJuego === 1) {
      if (p.frameCount % 40 === 0) {
        if (tiempoBrillo < secuencia.length) {
          cuadranteActivo = secuencia[tiempoBrillo];
          tiempoBrillo++;
        } else {
          cuadranteActivo = -1;
          estadoJuego = 2;
          mensaje = "¡Tu turno! Repite";
        }
      } else if (p.frameCount % 40 === 25) {
        cuadranteActivo = -1;
      }
    }
  }

  p.mousePressed = function() {
    if ((estadoJuego === 0 || estadoJuego === 3) &&
        p.mouseX > p.width / 2 - 55 && p.mouseX < p.width / 2 + 55 &&
        p.mouseY > p.height - 55 && p.mouseY < p.height - 15) {
      iniciarJuego();
      return;
    }

    if (estadoJuego === 2) {
      let clicCuadrante = detectarCuadrante(p.mouseX, p.mouseY);
      if (clicCuadrante !== -1) {
        cuadranteActivo = clicCuadrante;

        if (clicCuadrante === secuencia[pasoJugador]) {
          pasoJugador++;
          if (pasoJugador >= secuencia.length) {
            estadoJuego = 4; // Transición limpia
            mensaje = "¡Bien hecho!";
            setTimeout(() => {
              cuadranteActivo = -1;
              agregarPaso();
            }, 1000);
          }
        } else {
          estadoJuego = 3;
          mensaje = "¡Error! Reiniciar";
          cuadranteActivo = -1;
          secuencia = [];
        }
      }
    }
  };

  p.mouseReleased = function() {
    if (estadoJuego === 2) {
      cuadranteActivo = -1;
    }
  };

  function detectarCuadrante(mx, my) {
    let midX = p.width / 2;
    let midY = p.height / 2;

    if (mx >= 0 && mx < midX && my >= 0 && my < midY) return 0;
    if (mx >= midX && mx <= p.width && my >= 0 && my < midY) return 1;
    if (mx >= 0 && mx < midX && my >= midY && my <= p.height) return 2;
    if (mx >= midX && mx <= p.width && my >= midY && my <= p.height) return 3;

    return -1;
  }

  function iniciarJuego() {
    secuencia = [];
    agregarPaso();
  }

  function agregarPaso() {
    secuencia.push(p.floor(p.random(0, 4)));
    pasoJugador = 0;
    tiempoBrillo = 0;
    mensaje = "Observa la secuencia...";
    estadoJuego = 1; // Solo se activa el nivel cuando se agregan los datos
  }
};