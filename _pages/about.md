---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
  :root {
    --primary: #A63737;
    --secondary: #074E8C;
    --accent: #402C7C;
    --dark: #1e293b;
    --light-bg: #f8fafc;
    --border-color: #e2e8f0;
  }

  .banner-img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    margin-bottom: 25px;
  }

  .main-title {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--dark);
    margin: 20px 0;
    line-height: 1.3;
  }

  .badge-endorsement {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: #f0f7ff;
    border: 1.5px solid var(--secondary);
    color: var(--secondary);
    padding: 8px 20px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-decoration: none !important;
    box-shadow: 0 2px 8px rgba(0, 90, 156, 0.1);
    transition: all 0.3s ease;
  }
  .badge-endorsement:hover {
    background-color: var(--secondary);
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 90, 156, 0.3);
    transform: translateY(-2px);
  }

  /* -------------------------------------------------------------
     1. GRID "¿POR QUÉ ASISTIR?" (4 Tarjetas Simétricas)
     - Escritorio: 4 en fila (4x1)
     - Tablet/Móvil: 2x2 perfectos (nunca 3 y 1)
  ------------------------------------------------------------- */
  .grid-features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 30px 0;
  }
  @media (max-width: 900px) {
    .grid-features {
      grid-template-columns: repeat(2, 1fr); /* 2x2 en pantallas medianas */
    }
  }
  @media (max-width: 500px) {
    .grid-features {
      grid-template-columns: 1fr; /* 1 columna en teléfonos pequeños */
    }
  }

  .card-feature {
    background: #ffffff;
    border-radius: 12px;
    padding: 24px 18px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    border: 1px solid var(--border-color);
    border-bottom: 4px solid var(--primary);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .card-feature:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  /* -------------------------------------------------------------
     2. GRID "COMITÉS Y ORGANIZACIÓN" (3 Tarjetas Centradas)
     - Escritorio: 3 en fila (1x3)
     - Tablet: 2 en fila 1 + 1 centrada abajo
  ------------------------------------------------------------- */
  .grid-committees {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 25px 0;
  }

  @media (max-width: 900px) {
    .grid-committees {
      grid-template-columns: repeat(2, 1fr);
    }
    /* La 3ra tarjeta se expande al ancho completo y se centra si queda sola abajo */
    .grid-committees > div:nth-child(3) {
      grid-column: 1 / -1;
      max-width: 500px;
      margin: 0 auto;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    .grid-committees {
      grid-template-columns: 1fr;
    }
    .grid-committees > div:nth-child(3) {
      max-width: 100%;
    }
  }

  /* Estilos resto del documento */
  .program-block {
    background: #ffffff;
    border-left: 4px solid var(--secondary);
    border-radius: 0 10px 10px 0;
    padding: 18px 24px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.03);
    border-top: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
  }
  .program-block h3 { margin-top: 0; color: var(--secondary); font-size: 1.2rem; }

  .btn-cta {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    color: white !important; padding: 14px 20px; text-decoration: none !important;
    border-radius: 10px; font-weight: 700; font-size: 0.95rem; transition: all 0.25s ease;
  }
  .btn-cta:hover { transform: translateY(-2px); filter: brightness(110%); }

  .logo-grid {
    display: flex; flex-wrap: wrap; justify-content: center; align-items: center;
    gap: 30px; margin: 30px 0; padding: 25px 15px; background: #ffffff;
    border-radius: 12px; border: 1px solid var(--border-color);
  }
  .logo-item { flex: 0 1 130px; display: flex; justify-content: center; align-items: center; }
  .logo-item img {
    max-height: 50px; width: auto; object-fit: contain;
    filter: grayscale(10%) opacity(0.9); transition: filter 0.3s ease;
  }
  .logo-item img:hover { filter: grayscale(0%) opacity(1); }
</style>

![Banner](Figuras/banner.png){: .banner-img }

<h1 class="main-title">Workshop: IA Interpretable en Neurooncología<br><small style="font-size: 1.1rem; color: #64748b; font-weight: 500;">Decodificando la severidad tumoral mediante resonancia multimodal</small></h1>

<div style="text-align: center; margin-bottom: 30px;">
  <a href="https://www.ismrm.org/meetings-workshops/endorsement-request/" target="_blank" rel="noopener noreferrer" class="badge-endorsement">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    ISMRT-Endorsed Workshop
  </a>
</div>

---

## ¿Por qué asistir?

<div class="grid-features">
  <div class="card-feature">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A63737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    <h4 style="margin: 12px 0 6px; font-size: 1.1rem;">Learn from experts</h4>
    <p style="margin: 0; font-size: 0.88rem; color: #64748b; line-height: 1.4;">Clases magistrales dictadas por especialistas destacados en medicina, física médica e IA.</p>
  </div>

  <div class="card-feature">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A63737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    <h4 style="margin: 12px 0 6px; font-size: 1.1rem;">Hands-on coding</h4>
    <p style="margin: 0; font-size: 0.88rem; color: #64748b; line-height: 1.4;">Sesiones prácticas e interactivas en Python usando datos reales y modelos explicables.</p>
  </div>

  <div class="card-feature">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A63737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    <h4 style="margin: 12px 0 6px; font-size: 1.1rem;">Poster competition</h4>
    <p style="margin: 0; font-size: 0.88rem; color: #64748b; line-height: 1.4;">Presenta tu investigación científica y compite por premios en efectivo y reconocimiento.</p>
  </div>

  <div class="card-feature">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#A63737" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    <h4 style="margin: 12px 0 6px; font-size: 1.1rem;">Networking</h4>
    <p style="margin: 0; font-size: 0.88rem; color: #64748b; line-height: 1.4;">Conéctate con clínicos, tecnólogos, físicos e ingenieros de primer nivel.</p>
  </div>
</div>

---

## Información General del Evento

<div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.03); overflow: hidden; margin: 25px 0;">
  
  <div style="display: flex; align-items: center; gap: 16px; padding: 18px 24px; border-bottom: 1px solid var(--border-color);">
    <div style="background: #fff5f5; padding: 12px; border-radius: 10px; color: var(--primary);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    </div>
    <div>
      <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: #64748b;">Fecha del Evento</div>
      <div style="font-size: 1.05rem; font-weight: 700; color: var(--dark);">Jueves, 10 de diciembre de 2026</div>
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 16px; padding: 18px 24px; border-bottom: 1px solid var(--border-color);">
    <div style="background: #f0f7ff; padding: 12px; border-radius: 10px; color: var(--secondary);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    </div>
    <div>
      <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: #64748b;">Horario Oficial</div>
      <div style="font-size: 1.05rem; font-weight: 700; color: var(--dark);">8:00 AM – 17:00 PM <span style="font-weight: 400; font-size: 0.88rem; color: #64748b;">(GMT-4 / Hora de Chile)</span></div>
    </div>
  </div>

  <div style="display: flex; align-items: flex-start; gap: 16px; padding: 18px 24px; border-bottom: 1px solid var(--border-color);">
    <div style="background: #f3f0ff; padding: 12px; border-radius: 10px; color: var(--accent); margin-top: 2px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    </div>
    <div>
      <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: #64748b;">Modalidad Presencial</div>
      <div style="font-size: 1.05rem; font-weight: 700; color: var(--dark);">Auditorio Zócalo, Universidad Andrés Bello</div>
      <div style="font-size: 0.88rem; color: #64748b;">Antonio Varas 880, Providencia, Santiago, Chile.</div>
    </div>
  </div>

  <div style="display: flex; align-items: flex-start; gap: 16px; padding: 18px 24px; background: #fafafa;">
    <div style="background: #f0fdf4; padding: 12px; border-radius: 10px; color: #15803d; margin-top: 2px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 16 2 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
    </div>
    <div>
      <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; color: #64748b;">Modalidad Online</div>
      <div style="font-size: 1.05rem; font-weight: 700; color: var(--dark);">Transmisión en Vivo vía Zoom</div>
      <div style="font-size: 0.88rem; color: #64748b;">El enlace de acceso se enviará por correo posterior al registro.</div>
    </div>
  </div>

</div>

---

## Registro y Recursos

<div style="margin: 25px 0;">
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px; margin-bottom: 15px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScVTNZGnZ7jFYkFfVNsTKiw_LQcgZfaXG4y_08lIPOTNVzjhA/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-cta" style="background-color: var(--primary); box-shadow: 0 4px 12px rgba(166, 55, 55, 0.25);">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      Inscripción Presencial
    </a>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSffyLNNJZKNM4mLKOeudr3ltQmXyKQiwgkqvS51f6Oqe73-_A/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" class="btn-cta" style="background-color: var(--secondary); box-shadow: 0 4px 12px rgba(7, 78, 140, 0.25);">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 16 2 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
      Inscripción Online (Zoom)
    </a>
  </div>

  <div style="text-align: center; margin-bottom: 25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScrvB4-sUyraLQAthbE9K0Ph2O1xWT8xWlNHzRo8drDvrYp3Q/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn-cta" style="background-color: var(--accent); box-shadow: 0 4px 12px rgba(64, 44, 124, 0.25); display: inline-flex; width: 100%; max-width: 320px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
      Enviar Abstract (Póster)
    </a>
  </div>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
    <a href="https://github.com/pamelaFranco/workshop_glioma" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid var(--border-color); color: #24292e; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; text-decoration: none;">
      GitHub
    </a>
    <a href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/pamelaFranco/workshop_glioma/main/Programa/Charlas___Workshop_IA_Interpretable_Neurooncologia.pdf" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid var(--border-color); color: var(--primary); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; text-decoration: none;">
      Programa (PDF)
    </a>
    <a href="https://www.instagram.com/neuro_artint/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid var(--border-color); color: #e1306c; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; text-decoration: none;">
      Instagram
    </a>
    <a href="mailto:neurooncologia.ia@gmail.com" style="display: inline-flex; align-items: center; gap: 8px; background: #ffffff; border: 1px solid var(--border-color); color: #4a5568; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; text-decoration: none;">
      Contacto Email
    </a>
  </div>

</div>

---

## Sobre el Workshop

Este encuentro ofrece una **inmersión teórico-práctica** en el pipeline avanzado de la neurooncología de precisión. A través de un enfoque multidisciplinario, el programa aborda de forma integral el ciclo de vida del dato médico: desde la biología molecular del glioma y los principios físicos esenciales en la adquisición de Resonancia Magnética (RM), hasta llegar al modelado predictivo de vanguardia mediante Inteligencia Artificial (IA) e interpretabilidad clínica.

### Ejes Temáticos Principales

* **Física y Fisiología Avanzada:** Comprensión profunda de la señal BOLD, codificación en el Espacio K y técnicas de relajometría cuantitativa.
* **Microestructura y Hemodinámica:** Análisis avanzado de difusión (DTI), tractografía y mecánica de fluidos mediante secuencias como TOF-MRA.
* **IA Interpretable y Radiómica:** Transformación avanzada de imágenes biomédicas en biomarcadores minables. Decodificación, interpretabilidad visual y análisis de modelos complejos mediante metodologías como SHAP.

---

## Estructura del Programa y Charlas

<div class="program-block">
  <h3>Bloque 1: Contexto Clínico y Física de la Resonancia Magnética</h3>
  <ul>
    <li><strong>Panorama de la Neurooncología:</strong> Introducción a la heterogeneidad, espectro y desafíos en el manejo biológico del glioma. <em>(Dr. Héctor Ramos - FALP)</em>.</li>
    <li><strong>Optimización y Protocolos de RM:</strong> Configuración óptima de secuencias y el rol del Tecnólogo Médico en la reproducibilidad multicéntrica. <em>(TM. Alejandro Cerda - UNAB / ISMRT Sección Chile)</em>.</li>
    <li><strong>Física de la RM y Espacio K:</strong> Principios de la señal física, el espín y la generación de imágenes por Transformada de Fourier. <em>(Dr. Ignacio Espinoza - UC)</em>.</li>
    <li><strong>Artefactos en RM:</strong> Identificación matemática y física de distorsiones, aliasing, y efectos del movimiento en el tejido real. <em>(Dr. Hernán Mella - PUCV)</em>.</li>
  </ul>
</div>

<div class="program-block" style="border-left-color: var(--accent);">
  <h3 style="color: var(--accent);">Bloque 2: Fisiología, Microestructura y Dinámica Cerebral</h3>
  <ul>
    <li><strong>Microestructura por Difusión:</strong> Exploración del Tensor de Difusión (DTI), métricas de anisotropía (FA, MD) y preservación de tractos de materia blanca. <em>(MSc. Cristian Montalba - UC / iHEALTH)</em>.</li>
    <li><strong>Mapeo Funcional (fMRI):</strong> El acoplamiento neurovascular, efecto BOLD y la localización de áreas elocuentes. <em>(Dra. M. Daniela Cornejo - UC)</em>.</li>
    <li><strong>Modelado BOLD con PINNs:</strong> Introducción a las Redes Neuronales Informadas por la Física para el microambiente tumoral. <em>(Dr. David Ortiz-Puerta - UV / iHEALTH)</em>.</li>
    <li><strong>Evaluación Medular vía fNIRS:</strong> Diagnósticos de la respuesta neurovascular donde la fMRI convencional posee limitaciones. <em>(Dr. A. Eblen-Zajjur - UA)</em>.</li>
    <li><strong>Hemodinámica y Biomecánica:</strong> Simulación de fuerzas mecánicas mediante Modelado por Elementos Finitos (FEM) y cuantificación de flujos. <em>(Dr. Julio Sotelo - USM / iHEALTH)</em>.</li>
  </ul>
</div>

<div class="program-block" style="border-left-color: var(--primary);">
  <h3 style="color: var(--primary);">Bloque 3: Inteligencia Artificial, Radiómica e Interpretabilidad</h3>
  <ul>
    <li><strong>Introducción a Machine Learning:</strong> Pipelines supervisados aplicados a imágenes, extracción de vectores y selección de características. <em>(Dr. Domingo Mery - UC / iHEALTH / CENIA)</em>.</li>
    <li><strong>Fundamentos de Radiómica:</strong> Análisis computacional de descriptores de forma, intensidad y mapas de textura (GLCM). <em>(Dra. Paola Caprile - UC / iHEALTH)</em>.</li>
    <li><strong>IA en Neurooncología y SHAP:</strong> Fusión de datos multimodales y apertura de la "caja negra" predictiva mediante valores SHAP. <em>(Dra. Pamela Franco - UNAB)</em>.</li>
    <li><strong>Interpretabilidad Visual en Neuroimagen:</strong> Aplicación de algoritmos de atribución espacial (Grad-CAM, RISE, RELAX) en mapas de calor plausibles. <em>(Dr. Diego Mellado C. - UNAB / ITISB)</em>.</li>
  </ul>
</div>

---

## Sesión de Pósteres y Concurso Científico

El workshop contará con una instancia de **Sesión de Pósteres** destinada a estudiantes de pregrado y postgrado para incentivar el intercambio académico en IA y Salud. Un comité científico multi-institucional evaluará las propuestas. 

* **Formatos aceptados:** Presencial (póster físico) y online (e-poster).
* **Premio al Mejor Póster:** **$100.000 CLP** (nacionales) o **$100 USD** (extranjeros) en efectivo, además de menciones honrosas para el 2° y 3° lugar.

El cierre contará con la participación especial de la **Dra. Liliana Jorquera** (Presidenta del Capítulo IEEE EMBS Chile Centro), quien presentará los beneficios e invitaciones de la red de ingeniería en medicina y biología en el país.

---

## Comités y Organización del Workshop

<div class="grid-committees">

  <div style="background: #ffffff; border: 1px solid var(--border-color); border-left: 4px solid var(--primary); border-radius: 8px; padding: 20px;">
    <div style="color: var(--primary); font-size: 0.75rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Workshop Chair & Webmaster</div>
    <div style="font-size: 1.1rem; font-weight: 700; color: var(--dark); margin-top: 2px;">Dra. Pamela Franco</div>
    <div style="font-size: 0.88rem; color: #64748b;">UNAB</div>
    <p style="margin: 10px 0 0 0; font-size: 0.8rem; color: #4a5568; font-style: italic; border-top: 1px dashed var(--border-color); padding-top: 6px;">Gestión de Endosos Internacionales, Dirección Estratégica y Plataforma Web.</p>
  </div>

  <div style="background: #ffffff; border: 1px solid var(--border-color); border-left: 4px solid var(--secondary); border-radius: 8px; padding: 20px;">
    <div style="color: var(--secondary); font-size: 0.75rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; margin-bottom: 6px;">Scientific Committee</div>
    <ul style="margin: 0; padding-left: 18px; font-size: 0.9rem; color: #333; line-height: 1.5;">
      <li><strong>MSc. Cristian Montalba</strong> <span style="font-size: 0.7rem; background: #e0f2fe; color: #0369a1; padding: 1px 5px; border-radius: 4px; font-weight: 600;">Chair</span><br><small style="color:#64748b;">UC</small></li>
      <li style="margin-top: 6px;"><strong>Dra. M. Daniela Cornejo</strong><br><small style="color:#64748b;">UC</small></li>
      <li style="margin-top: 6px;"><strong>Dr. Ignacio Espinoza</strong><br><small style="color:#64748b;">UC</small></li>
    </ul>
  </div>

  <div style="background: #ffffff; border: 1px solid var(--border-color); border-left: 4px solid var(--accent); border-radius: 8px; padding: 20px;">
    <div style="color: var(--accent); font-size: 0.75rem; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Diseño y Manufactura 3D</div>
    <div style="font-size: 1.1rem; font-weight: 700; color: var(--dark); margin-top: 2px;">Manuel Chapa, PhD(c)</div>
    <div style="font-size: 0.88rem; color: #64748b;">UC</div>
    <p style="margin: 10px 0 0 0; font-size: 0.8rem; color: #4a5568; font-style: italic; border-top: 1px dashed var(--border-color); padding-top: 6px;">Diseño y elaboración de galardones 3D para el Concurso Científico de Pósteres.</p>
  </div>

</div>
---

## Alianza e Integración Internacional

> **Gran Noticia:** ¡Este Workshop cuenta con el **respaldo y endoso oficial de la ISMRT** (*International Society for Magnetic Resonance Technicians*)! El patrocinio institucional fue discutido y aprobado por el comité ejecutivo durante la reunión anual en Ciudad del Cabo (*Cape Town*).

Este workshop se presenta en el marco de **REBECCA-IA**, una iniciativa financiada por el Programa Iberoamericano de Ciencia y Tecnología para el Desarrollo (CYTED) e impulsada por el [Instituto Tecnológico de Medellín (ITM)](https://www.itm.edu.co).

### Instituciones y Colaboradores

<div class="logo-grid">
  <div class="logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/unab.png" alt="UNAB" /></div>
  <div class="logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/uc.png" alt="UC" /></div>
  <div class="logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/falp.png" alt="FALP" /></div>
  <div class="logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/ISMRT.png" alt="ISMRT" /></div>
  <div class="logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/ieee-embs.png" alt="IEEE EMBS" /></div>
  <div class="logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/guerbet.jpg" alt="Guerbet" /></div>
  <div class="logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/rebeccaia.jpg" alt="Rebecca IA" style="border-radius: 4px;" /></div>
</div>

<p align="center" style="margin-top: 30px; font-size: 0.9rem; color: #64748b;">
  <i><b>Proyecto Endowment I+D: Investigación Clínica para la Salud (DI-07-25/ICS)</b></i>
</p>