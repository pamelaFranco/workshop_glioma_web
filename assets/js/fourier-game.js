import processing.core.PApplet;
import processing.core.PImage;

public class SketchFourier extends PApplet {
    PImage imgOriginal;
    PImage imgFiltrada;
    PImage imgKSpace;

    int sliderBajas = 10; // Rango 1 a 10
    int sliderAltas = 0;  // Rango 0 a 10

    public static void main(String[] args) {
        PApplet.main("SketchFourier");
    }

    @Override
    public void settings() {
        size(600, 380);
    }

    @Override
    public void setup() {
        imgOriginal = createImage(256, 256, RGB);
        imgFiltrada = createImage(256, 256, RGB);
        imgKSpace = createImage(256, 256, RGB);

        // Intento de carga o generación sintética de fantoma anatómico
        PImage cargada = loadImage("Figuras/brain_mri.png");
        if (cargada != null && cargada.width > 0) {
            imgOriginal = cargada;
            imgOriginal.resize(256, 256);
        } else {
            generarFantomaSintetico();
        }

        aplicarFiltroFourier();
    }

    private void generarFantomaSintetico() {
        imgOriginal.loadPixels();
        float cx = imgOriginal.width / 2f;
        float cy = imgOriginal.height / 2f;

        for (int y = 0; y < imgOriginal.height; y++) {
            for (int x = 0; x < imgOriginal.width; x++) {
                float dist = dist(x, y, cx, cy);
                int val = 15; // Fondo oscuro

                if (dist < 95) val = 180;  // Cráneo
                if (dist < 85) val = 70;   // Tejido cerebral
                if (dist < 45) val = 220;  // Ventrículos / Sustancia blanca

                // Detalles finos de alta frecuencia (surcos/textura)
                if ((x % 16 < 2 || y % 16 < 2) && dist < 80) {
                    val = constrain(val + 50, 0, 255);
                }

                imgOriginal.pixels[x + y * imgOriginal.width] = color(val);
            }
        }
        imgOriginal.updatePixels();
    }

    @Override
    public void draw() {
        background(15);

        float tamano = min((width - 60) / 2f, 220);
        float gap = (width - (tamano * 2)) / 3f;

        // 1. Espacio k (Frecuencias)
        image(imgKSpace, gap, 40, tamano, tamano);
        fill(255);
        textSize(13);
        textAlign(CENTER, CENTER);
        text("Espacio k (Frecuencias)", gap + tamano / 2f, 20);

        // 2. Imagen Reconstruida
        image(imgFiltrada, gap * 2 + tamano, 40, tamano, tamano);
        text("Imagen Reconstruida", gap * 2 + tamano + tamano / 2f, 20);

        // Cuadro explicativo
        fill(30);
        stroke(166, 55, 55);
        rect(gap, tamano + 55, width - (gap * 2), 55, 8);

        noStroke();
        fill(200);
        textSize(11);
        text("El centro del espacio k aporta la estructura global y el contraste.", width / 2f, tamano + 72);
        text("Los bordes exteriores aportan la nitidez y la definición de los bordes.", width / 2f, tamano + 88);

        // Leyenda de controles por teclado
        fill(255);
        textSize(11);
        textAlign(LEFT, CENTER);
        text("Controles: Teclas [1-9] -> Frecuencias Bajas (" + sliderBajas + ") | Flechas [ARRIBA/ABAJO] -> Frecuencias Altas (" + sliderAltas + ")", gap, height - 20);
    }

    void aplicarFiltroFourier() {
        imgOriginal.loadPixels();
        imgFiltrada.loadPixels();
        imgKSpace.loadPixels();

        float blurVal = 11 - sliderBajas;
        float highVal = sliderAltas;

        int w = imgOriginal.width;
        int h = imgOriginal.height;
        float cx = w / 2f;
        float cy = h / 2f;
        double maxRadius = Math.sqrt(cx * cx + cy * cy);

        double radioBajas = (sliderBajas / 10.0) * (maxRadius * 0.4);

        for (int y = 0; y < h; y++) {
            for (int x = 0; x < w; x++) {
                int idx = x + y * w;
                float val = red(imgOriginal.pixels[idx]);

                // 1. Simulación de Reconstrucción (Filtro espacial pasa-bajos + pasa-altos)
                float smoothVal = val;
                if (blurVal > 1) {
                    float sum = 0;
                    int count = 0;
                    int step = (int) blurVal;
                    for (int dy = -step; dy <= step; dy += step) {
                        for (int dx = -step; dx <= step; dx += step) {
                            int nx = constrain(x + dx, 0, w - 1);
                            int ny = constrain(y + dy, 0, h - 1);
                            sum += red(imgOriginal.pixels[nx + ny * w]);
                            count++;
                        }
                    }
                    smoothVal = sum / count;
                }

                float edgeVal = 0;
                if (highVal > 0 && x > 0 && y > 0) {
                    float prevX = red(imgOriginal.pixels[(x - 1) + y * w]);
                    float prevY = red(imgOriginal.pixels[x + (y - 1) * w]);
                    edgeVal = (Math.abs(val - prevX) + Math.abs(val - prevY)) * (highVal * 0.8f);
                }

                float finalVal = constrain(smoothVal + edgeVal, 0, 255);
                imgFiltrada.pixels[idx] = color(finalVal);

                // 2. Renderizado del Espacio k
                double dist = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
                double kVal = 0;

                if (dist <= radioBajas) {
                    kVal = Math.exp(-dist / 15.0) * 255.0;
                }

                if (highVal > 0 && dist > radioBajas) {
                    kVal += (highVal / 10.0) * (50 + Math.random() * 40);
                }

                kVal = constrain((float) kVal, 0, 255);
                imgKSpace.pixels[idx] = color((float) kVal);
            }
        }

        imgFiltrada.updatePixels();
        imgKSpace.updatePixels();
    }

    @Override
    public void keyPressed() {
        if (key >= '1' && key <= '9') {
            sliderBajas = key - '0';
            aplicarFiltroFourier();
        }
        if (keyCode == UP && sliderAltas < 10) {
            sliderAltas++;
            aplicarFiltroFourier();
        }
        if (keyCode == DOWN && sliderAltas > 0) {
            sliderAltas--;
            aplicarFiltroFourier();
        }
    }
}