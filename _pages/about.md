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
    --primary-soft: #fdf2f2;
    --secondary: #074E8C;
    --secondary-soft: #f0f7ff;
    --accent: #402C7C;
    --accent-soft: #f5f3ff;
    --emerald: #15803d;
    --emerald-soft: #f0fdf4;
    --dark: #0f172a;
    --text-body: #334155;
    --text-muted: #64748b;
    --surface: #ffffff;
    --surface-subtle: #f8fafc;
    --border-color: #e2e8f0;
    --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.04);
    --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.06);
    --shadow-hover: 0 12px 28px rgba(15, 23, 42, 0.1);
    --radius-lg: 14px;
    --radius-md: 10px;
  }

  /* Contenedor base y tipografía */
  .ws-wrapper {
    color: var(--text-body);
    line-height: 1.65;
  }

  /* Banner y Encabezado Hero */
  .ws-banner {
    width: 100%;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
    margin-bottom: 24px;
    display: block;
  }

  .ws-hero {
    text-align: center;
    padding: 8px 0 28px;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 32px;
  }

  .ws-main-title {
    font-size: clamp(1.6rem, 3vw, 2.15rem);
    font-weight: 800;
    color: var(--dark);
    margin: 0 0 10px;
    line-height: 1.25;
    letter-spacing: -0.02em;
  }

  .ws-subtitle {
    display: block;
    font-size: clamp(1rem, 1.8vw, 1.18rem);
    color: var(--text-muted);
    font-weight: 500;
    margin-bottom: 20px;
  }

  .ws-badge-endorsement {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, var(--secondary-soft) 0%, #e0effe 100%);
    border: 1.5px solid var(--secondary);
    color: var(--secondary) !important;
    padding: 8px 20px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.82rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none !important;
    box-shadow: 0 3px 10px rgba(7, 78, 140, 0.12);
    transition: all 0.25s ease;
  }

  .ws-badge-endorsement:hover {
    background: var(--secondary);
    color: #ffffff !important;
    box-shadow: 0 6px 16px rgba(7, 78, 140, 0.28);
    transform: translateY(-2px);
  }

  /* Títulos de Sección */
  .ws-section-header {
    margin: 38px 0 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--border-color);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ws-section-header h2 {
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--dark);
    letter-spacing: -0.01em;
  }

  .ws-section-bar {
    width: 6px;
    height: 22px;
    border-radius: 4px;
    background: var(--primary);
    flex-shrink: 0;
  }

  /* 1. Grid "¿Por qué asistir?" */
  .ws-grid-features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: 22px 0 32px;
  }

  @media (max-width: 1024px) {
    .ws-grid-features {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 520px) {
    .ws-grid-features {
      grid-template-columns: 1fr;
    }
  }

  .ws-card-feature {
    background: var(--surface);
    border-radius: var(--radius-lg);
    padding: 22px 16px;
    text-align: center;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-color);
    border-top: 3px solid var(--primary);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ws-card-feature:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }

  .ws-feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--primary-soft);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
  }

  .ws-card-feature h4 {
    margin: 0 0 8px !important;
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--dark);
  }

  .ws-card-feature p {
    margin: 0 !important;
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.45;
  }

  /* 2. Bento Grid Información General (2x2) */
  .ws-bento-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 22px 0 32px;
  }

  @media (max-width: 680px) {
    .ws-bento-info {
      grid-template-columns: 1fr;
    }
  }

  .ws-info-card {
    background: var(--surface);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 18px 20px;
    display: flex;
    align-items: flex-start;
    gap: 15px;
    box-shadow: var(--shadow-sm);
  }

  .ws-info-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ws-info-label {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 700;
    color: var(--text-muted);
    margin-bottom: 3px;
  }

  .ws-info-value {
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.35;
  }

  .ws-info-sub {
    font-size: 0.84rem;
    color: var(--text-muted);
    margin-top: 3px;
    line-height: 1.4;
  }

  /* 3. Registro y Recursos */
  .ws-cta-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin: 22px 0 18px;
  }

  @media (max-width: 780px) {
    .ws-cta-grid {
      grid-template-columns: 1fr;
    }
  }

  .ws-btn-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 4px;
    color: #ffffff !important;
    padding: 16px 18px;
    text-decoration: none !important;
    border-radius: var(--radius-md);
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }

  .ws-btn-cta:hover {
    transform: translateY(-3px);
    filter: brightness(106%);
  }

  .ws-btn-cta-main {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 0.96rem;
  }

  .ws-btn-cta-sub {
    font-size: 0.76rem;
    opacity: 0.9;
    font-weight: 400;
  }

  .ws-resource-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 16px;
    background: var(--surface-subtle);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    margin-bottom: 32px;
  }

  .ws-pill-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: var(--surface);
    border: 1px solid var(--border-color);
    padding: 8px 15px;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.83rem;
    text-decoration: none !important;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
    transition: all 0.2s ease;
  }

  .ws-pill-link:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
    border-color: currentColor;
  }

  /* 4. Ejes Temáticos */
  .ws-pillars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 20px 0 32px;
  }

  @media (max-width: 820px) {
    .ws-pillars-grid {
      grid-template-columns: 1fr;
    }
  }

  .ws-pillar-card {
    background: var(--surface-subtle);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: 18px;
  }

  .ws-pillar-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--dark);
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ws-pillar-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* 5. Bloques del Programa */
  .ws-program-block {
    background: var(--surface);
    border: 1px solid var(--border-color);
    border-left: 5px solid var(--secondary);
    border-radius: var(--radius-lg);
    padding: 22px 24px;
    margin-bottom: 22px;
    box-shadow: var(--shadow-sm);
  }

  .ws-block-tag {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 3px 10px;
    border-radius: 6px;
    margin-bottom: 8px;
  }

  .ws-program-block h3 {
    margin: 0 0 16px !important;
    font-size: 1.18rem;
    font-weight: 800;
    color: var(--dark);
  }

  .ws-talk-list {
    list-style: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .ws-talk-item {
    padding: 12px 0;
    border-top: 1px solid var(--border-color);
  }

  .ws-talk-item:first-child {
    border-top: none;
    padding-top: 0;
  }

  .ws-talk-item:last-child {
    padding-bottom: 0;
  }

  .ws-talk-title {
    font-weight: 700;
    color: var(--dark);
    font-size: 0.95rem;
  }

  .ws-talk-desc {
    font-size: 0.9rem;
    color: var(--text-body);
    margin: 3px 0 6px;
  }

  .ws-speaker-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--surface-subtle);
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 0.8rem;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 6px;
  }

  /* 6. Destacado Pósteres y Cierre */
  .ws-poster-box {
    background: linear-gradient(135deg, #ffffff 0%, var(--accent-soft) 100%);
    border: 1px solid #ddd6fe;
    border-left: 5px solid var(--accent);
    border-radius: var(--radius-lg);
    padding: 22px 24px;
    margin: 20px 0 32px;
    box-shadow: var(--shadow-sm);
  }

  .ws-prize-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent);
    color: #ffffff;
    font-weight: 700;
    font-size: 0.86rem;
    padding: 6px 14px;
    border-radius: 8px;
    margin: 10px 0 14px;
  }

  /* 7. Grid Comités */
  .ws-grid-committees {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin: 22px 0 32px;
  }

  @media (max-width: 900px) {
    .ws-grid-committees {
      grid-template-columns: repeat(2, 1fr);
    }
    .ws-grid-committees > div:nth-child(3) {
      grid-column: 1 / -1;
      max-width: 480px;
      margin: 0 auto;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    .ws-grid-committees {
      grid-template-columns: 1fr;
    }
    .ws-grid-committees > div:nth-child(3) {
      max-width: 100%;
    }
  }

  .ws-committee-card {
    background: var(--surface);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: 20px;
    box-shadow: var(--shadow-sm);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* 8. Endoso & Logos */
  .ws-callout-ismrt {
    background: var(--secondary-soft);
    border: 1px solid #bae6fd;
    border-left: 5px solid var(--secondary);
    border-radius: var(--radius-md);
    padding: 18px 22px;
    margin: 20px 0;
    color: var(--dark);
    font-size: 0.94rem;
  }

  .ws-logo-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 28px 34px;
    margin: 24px 0;
    padding: 28px 20px;
    background: var(--surface);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-sm);
  }

  .ws-logo-item {
    flex: 0 1 125px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ws-logo-item img {
    max-height: 52px;
    width: auto;
    object-fit: contain;
    filter: grayscale(15%) opacity(0.92);
    transition: transform 0.25s ease, filter 0.25s ease;
  }

  .ws-logo-item img:hover {
    transform: scale(1.06);
    filter: grayscale(0%) opacity(1);
  }

  .ws-footer-grant {
    text-align: center;
    margin-top: 28px;
    padding: 14px 20px;
    background: var(--surface-subtle);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    font-size: 0.86rem;
    color: var(--text-muted);
  }
</style>

<div class="ws-wrapper">

<img src="Figuras/banner.png" alt="Banner Workshop IA Interpretable en Neurooncología" class="ws-banner" />

<div class="ws-hero">
  <h1 class="ws-main-title">Workshop: IA Interpretable en Neurooncología</h1>
  <span class="ws-subtitle">Decodificando la severidad tumoral mediante resonancia multimodal</span>
  <a href="https://www.ismrm.org/meetings-workshops/endorsement-request/" target="_blank" rel="noopener noreferrer" class="ws-badge-endorsement">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    ISMRT-Endorsed Workshop
  </a>
</div>

<div class="ws-section-header">
  <span class="ws-section-bar"></span>
  <h2>¿Por qué asistir?</h2>
</div>

<div class="ws-grid-features">
  <div class="ws-card-feature">
    <div class="ws-feature-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
    </div>
    <h4>Aprende de expertos</h4>
    <p>Clases magistrales dictadas por referentes en medicina, física médica e inteligencia artificial.</p>
  </div>
  <div class="ws-card-feature" style="border-top-color: var(--secondary);">
    <div class="ws-feature-icon" style="background: var(--secondary-soft); color: var(--secondary);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    </div>
    <h4>Práctica con código</h4>
    <p>Sesiones interactivas en Python utilizando datos clínicos reales y modelos explicables.</p>
  </div>
  <div class="ws-card-feature" style="border-top-color: var(--accent);">
    <div class="ws-feature-icon" style="background: var(--accent-soft); color: var(--accent);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    </div>
    <h4>Concurso de pósteres</h4>
    <p>Presenta tu investigación científica y compite por premios en efectivo y reconocimiento.</p>
  </div>
  <div class="ws-card-feature" style="border-top-color: var(--emerald);">
    <div class="ws-feature-icon" style="background: var(--emerald-soft); color: var(--emerald);">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    </div>
    <h4>Networking científico</h4>
    <p>Conéctate con clínicos, tecnólogos médicos, físicos e ingenieros de primer nivel.</p>
  </div>
</div>

<div class="ws-section-header">
  <span class="ws-section-bar" style="background: var(--secondary);"></span>
  <h2>Información General del Evento</h2>
</div>

<div class="ws-bento-info">
  <div class="ws-info-card">
    <div class="ws-info-icon" style="background: var(--primary-soft); color: var(--primary);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    </div>
    <div>
      <div class="ws-info-label">Fecha del Evento</div>
      <div class="ws-info-value">Jueves, 10 de diciembre de 2026</div>
      <div class="ws-info-sub">Jornada completa de charlas y talleres</div>
    </div>
  </div>
  <div class="ws-info-card">
    <div class="ws-info-icon" style="background: var(--secondary-soft); color: var(--secondary);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    </div>
    <div>
      <div class="ws-info-label">Horario Oficial</div>
      <div class="ws-info-value">8:00 AM – 17:00 PM</div>
      <div class="ws-info-sub">GMT-4 / Hora local de Santiago, Chile</div>
    </div>
  </div>
  <div class="ws-info-card">
    <div class="ws-info-icon" style="background: var(--accent-soft); color: var(--accent);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    </div>
    <div>
      <div class="ws-info-label">Modalidad Presencial</div>
      <div class="ws-info-value">Auditorio Zócalo, UNAB</div>
      <div class="ws-info-sub">Antonio Varas 880, Providencia, Santiago.</div>
    </div>
  </div>
  <div class="ws-info-card">
    <div class="ws-info-icon" style="background: var(--emerald-soft); color: var(--emerald);">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 16 2 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
    </div>
    <div>
      <div class="ws-info-label">Modalidad Online</div>
      <div class="ws-info-value">Transmisión en Vivo vía Zoom</div>
      <div class="ws-info-sub">Enlace enviado por correo tras el registro.</div>
    </div>
  </div>
</div>

<div class="ws-section-header">
  <span class="ws-section-bar" style="background: var(--accent);"></span>
  <h2>Registro y Recursos</h2>
</div>

<div class="ws-cta-grid">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScVTNZGnZ7jFYkFfVNsTKiw_LQcgZfaXG4y_08lIPOTNVzjhA/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" class="ws-btn-cta" style="background: var(--primary); box-shadow: 0 4px 14px rgba(166, 55, 55, 0.25);">
    <span class="ws-btn-cta-main">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      Inscripción Presencial
    </span>
    <span class="ws-btn-cta-sub">Asistencia en Auditorio UNAB</span>
  </a>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSffyLNNJZKNM4mLKOeudr3ltQmXyKQiwgkqvS51f6Oqe73-_A/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" class="ws-btn-cta" style="background: var(--secondary); box-shadow: 0 4px 14px rgba(7, 78, 140, 0.25);">
    <span class="ws-btn-cta-main">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 16 2 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
      Inscripción Online
    </span>
    <span class="ws-btn-cta-sub">Acceso remoto vía Zoom</span>
  </a>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScrvB4-sUyraLQAthbE9K0Ph2O1xWT8xWlNHzRo8drDvrYp3Q/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" class="ws-btn-cta" style="background: var(--accent); box-shadow: 0 4px 14px rgba(64, 44, 124, 0.25);">
    <span class="ws-btn-cta-main">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
      Enviar Abstract
    </span>
    <span class="ws-btn-cta-sub">Postulación Sesión de Pósteres</span>
  </a>
</div>

<div class="ws-resource-bar">
  <a href="https://github.com/pamelaFranco/workshop_glioma" target="_blank" rel="noopener noreferrer" class="ws-pill-link" style="color: #1e293b;">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
    Repositorio GitHub
  </a>
  <a href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/pamelaFranco/workshop_glioma/main/Programa/Charlas___Workshop_IA_Interpretable_Neurooncologia.pdf" target="_blank" rel="noopener noreferrer" class="ws-pill-link" style="color: var(--primary);">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    Programa (PDF)
  </a>
  <a href="https://www.youtube.com/@Neuro_IA_TV" target="_blank" rel="noopener noreferrer" class="ws-pill-link" style="color: #dc2626;">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    YouTube
  </a>
  <a href="https://www.instagram.com/neuro_artint/" target="_blank" rel="noopener noreferrer" class="ws-pill-link" style="color: #db2777;">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    Instagram
  </a>
  <a href="mailto:neurooncologia.ia@gmail.com" class="ws-pill-link" style="color: #475569;">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    Contacto Email
  </a>
</div>

<div class="ws-section-header">
  <span class="ws-section-bar"></span>
  <h2>Sobre el Workshop</h2>
</div>

Este encuentro ofrece una **inmersión teórico-práctica** en el pipeline avanzado de la neurooncología de precisión. A través de un enfoque multidisciplinario, el programa aborda de forma integral el ciclo de vida del dato médico: desde la biología molecular del glioma y los principios físicos esenciales en la adquisición de Resonancia Magnética (RM), hasta el modelado predictivo de vanguardia mediante Inteligencia Artificial (IA) e interpretabilidad clínica.

<div class="ws-pillars-grid">
  <div class="ws-pillar-card">
    <div class="ws-pillar-title">
      <span class="ws-pillar-dot" style="background: var(--secondary);"></span>
      Física y Fisiología Avanzada
    </div>
    <p style="margin: 0; font-size: 0.86rem; color: var(--text-muted);">Comprensión profunda de la señal BOLD, codificación en el Espacio K y técnicas de relajometría cuantitativa.</p>
  </div>
  <div class="ws-pillar-card">
    <div class="ws-pillar-title">
      <span class="ws-pillar-dot" style="background: var(--accent);"></span>
      Microestructura y Hemodinámica
    </div>
    <p style="margin: 0; font-size: 0.86rem; color: var(--text-muted);">Análisis avanzado de difusión (DTI), tractografía y mecánica de fluidos mediante secuencias como TOF-MRA.</p>
  </div>
  <div class="ws-pillar-card">
    <div class="ws-pillar-title">
      <span class="ws-pillar-dot" style="background: var(--primary);"></span>
      IA Interpretable y Radiómica
    </div>
    <p style="margin: 0; font-size: 0.86rem; color: var(--text-muted);">Transformación de imágenes biomédicas en biomarcadores minables y análisis explicable con SHAP y mapas de atribución.</p>
  </div>
</div>

<div class="ws-section-header">
  <span class="ws-section-bar" style="background: var(--secondary);"></span>
  <h2>Estructura del Programa y Charlas</h2>
</div>

<div class="ws-program-block" style="border-left-color: var(--secondary);">
  <span class="ws-block-tag" style="background: var(--secondary-soft); color: var(--secondary);">Bloque 01</span>
  <h3>Contexto Clínico y Física de la Resonancia Magnética</h3>
  <ul class="ws-talk-list">
    <li class="ws-talk-item">
      <div class="ws-talk-title">Panorama de la Neurooncología</div>
      <div class="ws-talk-desc">Introducción a la heterogeneidad, espectro y desafíos en el manejo biológico del glioma.</div>
      <span class="ws-speaker-badge">Dr. Héctor Ramos · FALP</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Optimización y Protocolos de RM</div>
      <div class="ws-talk-desc">Configuración óptima de secuencias y el rol del Tecnólogo Médico en la reproducibilidad multicéntrica.</div>
      <span class="ws-speaker-badge">TM. Alejandro Cerda · UNAB / ISMRT Sección Chile</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Física de la RM y Espacio K</div>
      <div class="ws-talk-desc">Principios de la señal física, el espín y la generación de imágenes por Transformada de Fourier.</div>
      <span class="ws-speaker-badge">Dr. Ignacio Espinoza · UC</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Artefactos en RM</div>
      <div class="ws-talk-desc">Identificación matemática y física de distorsiones, aliasing y efectos del movimiento en el tejido real.</div>
      <span class="ws-speaker-badge">Dr. Hernán Mella · PUCV</span>
    </li>
  </ul>
</div>

<div class="ws-program-block" style="border-left-color: var(--accent);">
  <span class="ws-block-tag" style="background: var(--accent-soft); color: var(--accent);">Bloque 02</span>
  <h3>Fisiología, Microestructura y Dinámica Cerebral</h3>
  <ul class="ws-talk-list">
    <li class="ws-talk-item">
      <div class="ws-talk-title">Microestructura por Difusión</div>
      <div class="ws-talk-desc">Exploración del Tensor de Difusión (DTI), métricas de anisotropía (FA, MD) y preservación de tractos de materia blanca.</div>
      <span class="ws-speaker-badge">MSc. Cristian Montalba · UC / iHEALTH</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Mapeo Funcional (fMRI)</div>
      <div class="ws-talk-desc">El acoplamiento neurovascular, efecto BOLD y la localización de áreas elocuentes.</div>
      <span class="ws-speaker-badge">Dra. M. Daniela Cornejo · UC</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Modelado BOLD con PINNs</div>
      <div class="ws-talk-desc">Introducción a las Redes Neuronales Informadas por la Física para el microambiente tumoral.</div>
      <span class="ws-speaker-badge">Dr. David Ortiz-Puerta · UV / iHEALTH</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Evaluación Medular vía fNIRS</div>
      <div class="ws-talk-desc">Diagnósticos de la respuesta neurovascular donde la fMRI convencional posee limitaciones.</div>
      <span class="ws-speaker-badge">Dr. A. Eblen-Zajjur · UA</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Hemodinámica y Biomecánica</div>
      <div class="ws-talk-desc">Simulación de fuerzas mecánicas mediante Modelado por Elementos Finitos (FEM) y cuantificación de flujos.</div>
      <span class="ws-speaker-badge">Dr. Julio Sotelo · USM / iHEALTH</span>
    </li>
  </ul>
</div>

<div class="ws-program-block" style="border-left-color: var(--primary);">
  <span class="ws-block-tag" style="background: var(--primary-soft); color: var(--primary);">Bloque 03</span>
  <h3>Inteligencia Artificial, Radiómica e Interpretabilidad</h3>
  <ul class="ws-talk-list">
    <li class="ws-talk-item">
      <div class="ws-talk-title">Introducción a Machine Learning</div>
      <div class="ws-talk-desc">Pipelines supervisados aplicados a imágenes, extracción de vectores y selección de características.</div>
      <span class="ws-speaker-badge">Dr. Domingo Mery · UC / iHEALTH / CENIA</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Fundamentos de Radiómica</div>
      <div class="ws-talk-desc">Análisis computacional de descriptores de forma, intensidad y mapas de textura (GLCM).</div>
      <span class="ws-speaker-badge">Dra. Paola Caprile · UC / iHEALTH</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">IA en Neurooncología y SHAP</div>
      <div class="ws-talk-desc">Fusión de datos multimodales y apertura de la "caja negra" predictiva mediante valores SHAP.</div>
      <span class="ws-speaker-badge">Dra. Pamela Franco · UNAB</span>
    </li>
    <li class="ws-talk-item">
      <div class="ws-talk-title">Interpretabilidad Visual en Neuroimagen</div>
      <div class="ws-talk-desc">Aplicación de algoritmos de atribución espacial (Grad-CAM, RISE, RELAX) en mapas de calor plausibles.</div>
      <span class="ws-speaker-badge">Dr. Diego Mellado C. · UNAB / ITISB</span>
    </li>
  </ul>
</div>

<div class="ws-section-header">
  <span class="ws-section-bar" style="background: var(--accent);"></span>
  <h2>Sesión de Pósteres y Concurso Científico</h2>
</div>

<div class="ws-poster-box">
  <p style="margin-top: 0;">El workshop contará con una <strong>Sesión de Pósteres</strong> destinada a estudiantes de pregrado y postgrado para fomentar el intercambio académico en IA y Salud, evaluada por un comité científico multi-institucional.</p>
  <div class="ws-prize-pill">
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
    Premio al Mejor Póster: $100.000 CLP (nacionales) o $100 USD (extranjeros) + Menciones 2° y 3° lugar
  </div>
  <ul style="margin-bottom: 14px;">
    <li><strong>Modalidades aceptadas:</strong> Presencial (póster físico) y online (e-poster).</li>
    <li><strong>Ceremonia de cierre:</strong> Participación especial de la <strong>Dra. Liliana Jorquera</strong> (Presidenta del Capítulo <em>IEEE EMBS Chile Centro</em>), quien presentará los beneficios e invitaciones de la red de ingeniería en medicina y biología en el país.</li>
  </ul>
</div>

<div class="ws-section-header">
  <span class="ws-section-bar"></span>
  <h2>Comités y Organización</h2>
</div>

<div class="ws-grid-committees">
  <div class="ws-committee-card" style="border-top: 4px solid var(--primary);">
    <div>
      <div style="color: var(--primary); font-size: 0.73rem; text-transform: uppercase; font-weight: 800; letter-spacing: 0.05em;">Workshop Chair & Webmaster</div>
      <div style="font-size: 1.1rem; font-weight: 800; color: var(--dark); margin-top: 4px;">Dra. Pamela Franco</div>
      <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">UNAB</div>
    </div>
    <p style="margin: 12px 0 0; font-size: 0.82rem; color: var(--text-body); border-top: 1px dashed var(--border-color); padding-top: 10px;">Gestión de endosos internacionales, dirección estratégica y plataforma web.</p>
  </div>
  <div class="ws-committee-card" style="border-top: 4px solid var(--secondary);">
    <div>
      <div style="color: var(--secondary); font-size: 0.73rem; text-transform: uppercase; font-weight: 800; letter-spacing: 0.05em; margin-bottom: 8px;">Scientific Committee</div>
      <ul style="margin: 0; padding-left: 16px; font-size: 0.9rem; color: var(--dark); line-height: 1.55;">
        <li><strong>MSc. Cristian Montalba</strong> <span style="font-size: 0.7rem; background: var(--secondary-soft); color: var(--secondary); padding: 1px 6px; border-radius: 4px; font-weight: 700;">Chair</span> <span style="color: var(--text-muted); font-size: 0.82rem;">· UC</span></li>
        <li><strong>Dra. M. Daniela Cornejo</strong> <span style="color: var(--text-muted); font-size: 0.82rem;">· UC</span></li>
        <li><strong>Dr. Ignacio Espinoza</strong> <span style="color: var(--text-muted); font-size: 0.82rem;">· UC</span></li>
      </ul>
    </div>
  </div>
  <div class="ws-committee-card" style="border-top: 4px solid var(--accent);">
    <div>
      <div style="color: var(--accent); font-size: 0.73rem; text-transform: uppercase; font-weight: 800; letter-spacing: 0.05em;">Diseño y Manufactura 3D</div>
      <div style="font-size: 1.1rem; font-weight: 800; color: var(--dark); margin-top: 4px;">Manuel Chapa, PhD(c)</div>
      <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">UC</div>
    </div>
    <p style="margin: 12px 0 0; font-size: 0.82rem; color: var(--text-body); border-top: 1px dashed var(--border-color); padding-top: 10px;">Diseño y elaboración de galardones 3D para el Concurso Científico de Pósteres.</p>
  </div>
</div>

<div class="ws-section-header">
  <span class="ws-section-bar" style="background: var(--secondary);"></span>
  <h2>Alianza e Integración Internacional</h2>
</div>

<div class="ws-callout-ismrt">
  <strong>Respaldo Internacional Oficial:</strong> Este Workshop cuenta con el endoso de la <strong>ISMRT</strong> (<em>International Society for Magnetic Resonance Technicians</em>), aprobado por su comité ejecutivo durante la reunión anual en Ciudad del Cabo (<em>Cape Town</em>).
</div>

<p>Esta actividad se presenta en el marco de <strong>REBECCA-IA</strong>, una iniciativa financiada por el Programa Iberoamericano de Ciencia y Tecnología para el Desarrollo (<strong>CYTED</strong>) e impulsada por el <a href="https://www.itm.edu.co" target="_blank" rel="noopener noreferrer">Instituto Tecnológico de Medellín (ITM)</a>.</p>

<h3 style="text-align: center; font-size: 1.05rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-top: 30px;">Instituciones y Colaboradores</h3>

<div class="ws-logo-grid">
  <div class="ws-logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/unab.png" alt="UNAB" /></div>
  <div class="ws-logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/uc.png" alt="UC" /></div>
  <div class="ws-logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/falp.png" alt="FALP" /></div>
  <div class="ws-logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/ISMRT.png" alt="ISMRT" /></div>
  <div class="ws-logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/ieee-embs.png" alt="IEEE EMBS" /></div>
  <div class="ws-logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/iHEALTH.png" alt="iHEALTH" /></div>
  <div class="ws-logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/guerbet.jpg" alt="Guerbet" /></div>
  <div class="ws-logo-item"><img src="https://raw.githubusercontent.com/pamelaFranco/workshop_glioma_web/master/Figuras/rebeccaia.jpg" alt="REBECCA-IA" style="border-radius: 6px;" /></div>
</div>

<div class="ws-footer-grant">
  <strong>Proyecto Endowment I+D:</strong> Investigación Clínica para la Salud (DI-07-25/ICS)
</div>

</div>