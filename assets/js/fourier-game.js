let imgOriginal;
let imgFiltrada;
let imgKSpace;
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
    imgOriginal = p.loadImage(
      '/workshop_glioma_web/Figuras/brain_mri.png',
      () => {},
      () => {
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
    let ancho = container ? container.offsetWidth : 600;
    let canvas = p.createCanvas(ancho || 600, 380);
    canvas.parent('game-container');

    imgFiltrada = p.createImage(imgOriginal.width, imgOriginal.height);
    imgKSpace = p.createImage(imgOriginal.width, imgOriginal.height);

    p.createP("<b>Frecuencias Bajas (Centro del espacio k / Contraste):</b>").parent('game-container').style('color', '#fff').style('margin', '10px 0 2px 0');
    sliderBajas = p.createSlider(1, 10, 10, 1).parent('game-container');
    sliderBajas.style('width', '100%');

    p.createP("<b>Frecuencias Altas (Periferia del espacio k / Detalles):</b>").parent('game-container').style('color', '#fff').style('margin', '10px 0 2px 0');
    sliderAltas = p.createSlider(0, 10, 0, 1).parent('game-container');
    sliderAltas.style('width', '100%');

    aplicarFiltroFourier();
    sliderBajas.input(aplicarFiltroFourier);
    sliderAltas.input(aplicarFiltroFourier);
  };

  p.draw = function() {
    p.background(15);

    let tamano = p.min((p.width - 60) / 2, 220);
    let gap = (p.width - (tamano * 2)) / 3;

    // 1. Dibujar el Espacio k (Frecuencias)
    p.image(imgKSpace, gap, 40, tamano, tamano);
    p.fill(255);
    p.textSize(13);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Espacio k (Frecuencias)", gap + tamano / 2, 20);

    // 2. Dibujar la Imagen Reconstruida (Anatomía)
    p.image(imgFiltrada, gap * 2 + tamano, 40, tamano, tamano);
    p.text("Imagen Reconstruida", gap * 2 + tamano + tamano / 2, 20);

    // Indicador visual / Cuadro explicativo
    p.fill(30);
    p.stroke(166, 55, 55);
    p.rect(gap, tamano + 55, p.width - (gap * 2), 55, 8);

    p.noStroke();
    p.fill(200);
    p.textSize(11);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("El centro del espacio k aporta la estructura global y el contraste.", p.width / 2, tamano + 72);
    p.text("Los bordes exteriores aportan la nitidez y la definición de los bordes.", p.width / 2, tamano + 88);
  };

  function aplicarFiltroFourier() {
    imgOriginal.loadPixels();
    imgFiltrada.loadPixels();
    imgKSpace.loadPixels();

    let blurVal = 11 - sliderBajas.value();
    let highVal = sliderAltas.value();

    let w = imgOriginal.width;
    let h = imgOriginal.height;
    let cx = w / 2;
    let cy = h / 2;
    let maxRadius = Math.sqrt(cx * cx + cy * cy);

    let radioBajas = (sliderBajas.value() / 10) * (maxRadius * 0.4);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        let idx = (x + y * w) * 4;
        let val = imgOriginal.pixels[idx];

        // 1. Simulación de la Reconstrucción
        let smoothVal = val;
        if (blurVal > 1) {
          let sum = 0, count = 0;
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

        // 2. Renderizado del Espacio k en tiempo real
        let dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        let kVal = 0;

        // Brillo del centro si están activas las bajas frecuencias
        if (dist <= radioBajas) {
          kVal = Math.exp(-dist / 15) * 255;
        }
        
        // Brillo exterior si están activas las altas frecuencias
        if (highVal > 0 && dist > radioBajas) {
          kVal += (highVal / 10) * (50 + Math.random() * 40);
        }

        kVal = p.constrain(kVal, 0, 255);
        imgKSpace.pixels[idx] = kVal;
        imgKSpace.pixels[idx + 1] = kVal;
        imgKSpace.pixels[idx + 2] = kVal;
        imgKSpace.pixels[idx + 3] = 255;
      }
    }

    imgFiltrada.updatePixels();
    imgKSpace.updatePixels();
  }
};