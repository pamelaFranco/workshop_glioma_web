let imgWarhol;
let secuencia = [];
let pasoJugador = 0;
let cuadranteActivo = -1;
let mensaje = "Haz clic en INICIAR";
let estadoJuego = 0; // 0: Inicio, 1: Mostrando secuencia, 2: Turno jugador, 3: Game over, 4: Espera, 5: ¡Victoria/Invitación!
let timerSecuencia = null;
let p5Iniciado = false;

// Nivel requerido para desbloquear la invitación especial
const NIVEL_OBJETIVO = 10; 

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
    // Si alcanzó el nivel objetivo, mostramos la tarjeta de felicitación e invitación
    if (estadoJuego === 5) {
      p.fill(0, 230);
      p.noStroke();
      p.rect(20, 20, p.width - 40, p.height - 40, 12);

      p.stroke(166, 55, 55);
      p.strokeWeight(2);
      p.noFill();
      p.rect(25, 25, p.width - 50, p.height - 50, 10);

      p.noStroke();
      p.fill(255);
      p.textAlign(p.CENTER, p.CENTER);
      
      p.textSize(22);
      p.text("¡Excelente memoria!", p.width / 2, p.height / 2 - 60);

      p.textSize(14);
      p.fill(220);
      let textoInvitacion = "Nos vemos el 10 de diciembre en el\nWorkshop de IA Interpretable en Neurooncología.";
      p.text(textoInvitacion, p.width / 2, p.height / 2);

      // Botón para volver a jugar
      p.fill(166, 55, 55);
      p.rect(p.width / 2 - 70, p.height / 2 + 70, 140, 40, 6);
      p.fill(255);
      p.textSize(14);
      p.text("JUGAR DE NUEVO", p.width / 2, p.height / 2 + 90);
      return;
    }

    // UI Estándar durante el juego
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

  function reproducirSecuencia() {
    estadoJuego = 1;
    mensaje = "Observa la secuencia...";
    let idx = 0;

    if (timerSecuencia) clearInterval(timerSecuencia);

    timerSecuencia = setInterval(() => {
      if (idx < secuencia.length) {
        cuadranteActivo = secuencia[idx];
        
        setTimeout(() => {
          cuadranteActivo = -1;
        }, 500);

        idx++;
      } else {
        clearInterval(timerSecuencia);
        cuadranteActivo = -1;
        estadoJuego = 2;
        mensaje = "¡Tu turno! Repite";
      }
    }, 850);
  }

  function agregarPaso() {
    secuencia.push(p.floor(p.random(0, 4)));
    pasoJugador = 0;
    reproducirSecuencia();
  }

  p.mousePressed = function() {
    // Clic en el botón JUGAR DE NUEVO desde la pantalla de invitación
    if (estadoJuego === 5 &&
        p.mouseX > p.width / 2 - 70 && p.mouseX < p.width / 2 + 70 &&
        p.mouseY > p.height / 2 + 70 && p.mouseY < p.height / 2 + 110) {
      secuencia = [];
      agregarPaso();
      return;
    }

    // Clic en el botón INICIAR
    if ((estadoJuego === 0 || estadoJuego === 3) &&
        p.mouseX > p.width / 2 - 55 && p.mouseX < p.width / 2 + 55 &&
        p.mouseY > p.height - 55 && p.mouseY < p.height - 15) {
      secuencia = [];
      agregarPaso();
      return;
    }

    // Clics del jugador
    if (estadoJuego === 2) {
      let clicCuadrante = detectarCuadrante(p.mouseX, p.mouseY);
      if (clicCuadrante !== -1) {
        cuadranteActivo = clicCuadrante;

        if (clicCuadrante === secuencia[pasoJugador]) {
          pasoJugador++;
          if (pasoJugador >= secuencia.length) {
            
            // Verificamos si alcanzó el nivel para mostrar la tarjeta de invitación
            if (secuencia.length >= NIVEL_OBJETIVO) {
              estadoJuego = 5; // Activa pantalla de victoria/invitación
            } else {
              estadoJuego = 4; // Pausa breve antes del siguiente nivel
              mensaje = "¡Bien hecho!";
              setTimeout(() => {
                cuadranteActivo = -1;
                agregarPaso();
              }, 1000);
            }

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
};