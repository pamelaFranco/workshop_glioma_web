let imgOriginal;
let imgFiltrada;
let sliderBajas;
let sliderAltas;
let p5Iniciado = false;

document.addEventListener("DOMContentLoaded", function() {
  const faqJuego = document.getElementById("faq-juego");
  if (faqJuego) {
    faqJuego.addEventListener("toggle", function() {
      if (faqJuego.open && !p5Iniciado) {
        p5Iniciado = true;
        new p5(sketchFourier);
      }
    });
    if (faqJuego.open && !p5Iniciado) {
      p5Iniciado = true;
      new p5(sketchFourier);
    }
  }
});

const sketchFourier = (p) => {
  p.preload = function() {
    // Carga tu imagen procesada desde el repositorio
    imgOriginal = p.loadImage(
      '/workshop_glioma_web/Figuras/brain_mri.png',
      () => {},
      () => {
        // Fallback si la ruta relativa falla
        imgOriginal = p.createImage(256, 256);
        imgOriginal.loadPixels();
        for (let i = 0; i < imgOriginal.pixels.length; i += 4) {
          imgOriginal.pixels[i] = 120;
          imgOriginal.pixels[i+1] = 120;
          imgOriginal.pixels[i+2] = 120;
          imgOriginal.pixels[i+3] = 255;
        }
        imgOriginal.updatePixels();
      }
    );
  };

  p.setup = function() {
    let container = document.getElementById('game-container');
    let ancho = container ? container.offsetWidth : 480;
    let canvas = p.createCanvas(ancho || 480, 520);
    canvas.parent('game-container');

    // Copia para procesar los filtros
    imgFiltrada = p.createImage(imgOriginal.width, imgOriginal.height);

    // Deslizadores interactivos
    p.createP("<b>Frecuencias Bajas (Estructura / Contraste):</b>").parent('game-container').style('color', '#fff').style('margin', '10px 0 2px 0');
    sliderBajas = p.createSlider(1, 10, 10, 1).parent('game-container');
    sliderBajas.style('width', '100%');

    p.createP("<b>Frecuencias Altas (Bordes / Detalles):</b>").parent('game-container').style('color', '#fff').style('margin', '10px 0 2px 0');
    sliderAltas = p.createSlider(0, 10, 0, 1).parent('game-container');
    sliderAltas.style('width', '100%');

    aplicarFiltroFourier();
    sliderBajas.input(aplicarFiltroFourier);
    sliderAltas.input(aplicarFiltroFourier);
  };

  p.draw = function() {
    p.background(15);

    let tamano = p.min(p.width - 40, 360);
    let posX = (p.width - tamano) / 2;

    // Dibujar la imagen reconstruida
    p.image(imgFiltrada, posX, 20, tamano, tamano);

    // Cuadro informativo
    p.fill(30);
    p.stroke(166, 55, 55);
    p.rect(20, tamano + 40, p.width - 40, 75, 8);

    p.noStroke();
    p.fill(255);
    p.textSize(12);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("🔬 Espacio k / Reconstrucción de Fourier", p.width / 2, tamano + 58);
    p.fill(200);
    p.text("Mueve los controles para ver cómo las frecuencias altas (bordes)", p.width / 2, tamano + 78);
    p.text("y bajas (formas globales) forman la imagen de MRI.", p.width / 2, tamano + 94);
  };

  function aplicarFiltroFourier() {
    imgOriginal.loadPixels();
    imgFiltrada.loadPixels();

    let blurVal = 11 - sliderBajas.value(); // Control de paso bajas
    let highVal = sliderAltas.value();      // Control de paso altas

    let w = imgOriginal.width;
    let h = imgOriginal.height;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        let idx = (x + y * w) * 4;
        let val = imgOriginal.pixels[idx];

        // Simulador de filtro de frecuencia en espacio de imagen
        let smoothVal = val;
        
        // Simulación Paso-Bajas (suavizado/frecuencias centrales)
        if (blurVal > 1) {
          let sum = 0;
          let count = 0;
          let step = Math.floor(blurVal);
          for (let dy = -step; dy <= step; dy += step) {
            for (let dx = -step; dx <= step; dx += step) {
              let nx = p.constrain(x + dx, 0, w - 1);
              let ny = p.constrain(y + dy, 0, h - 1);
              sum += imgOriginal.pixels[(nx + ny * w) * 4];
              count++;
            }
          }
          smoothVal = sum / count;
        }

        // Simulación Paso-Altas (Detección de bordes)
        let edgeVal = 0;
        if (highVal > 0 && x > 0 && y > 0) {
          let prevX = imgOriginal.pixels[((x - 1) + y * w) * 4];
          let prevY = imgOriginal.pixels[(x + (y - 1) * w) * 4];
          edgeVal = (Math.abs(val - prevX) + Math.abs(val - prevY)) * (highVal * 0.8);
        }

        let finalVal = p.constrain(smoothVal + edgeVal, 0, 255);

        imgFiltrada.pixels[idx] = finalVal;
        imgFiltrada.pixels[idx + 1] = finalVal;
        imgFiltrada.pixels[idx + 2] = finalVal;
        imgFiltrada.pixels[idx + 3] = 255;
      }
    }
    imgFiltrada.updatePixels();
  }
};