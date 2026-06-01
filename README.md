# SPA Vanilla JavaScript - Rick and Morty

## Descripción

Este proyecto es un ejemplo de cómo construir una SPA (Single Page Application) utilizando únicamente JavaScript Vanilla, sin frameworks ni librerías externas.

La aplicación implementa:

- Routing básico SPA
- Renderizado dinámico de vistas
- Arquitectura modular
- Consumo de APIs REST
- Componentización
- Separación de responsabilidades
- Carga dinámica de archivos HTML
- Buenas prácticas de documentación con JSDoc

---

# Características

## Home

- Consume la API pública de Rick and Morty
- Obtiene personajes dinámicamente
- Renderiza cards reutilizables

## Episodios

- Consume el endpoint de episodios de la API de Rick and Morty
- Obtiene episodios dinámicamente
- Renderiza cards de episodios con sus detalles

## Ubicaciones

- Consume el endpoint de ubicaciones de la API de Rick and Morty
- Obtiene información de los diferentes mundos y dimensiones
- Renderiza cards de ubicaciones de forma dinámica

## Contactos

- Formulario desacoplado
- Manejo de eventos JavaScript

## Quiénes Somos

- Página estática modular

## Arquitectura SPA

- Navegación sin recargar la página
- Hash Routing
- Carga dinámica de vistas

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Axios API
- ES Modules

---

# Estructura del proyecto

```txt
spa-rick-morty/
│
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       ├── app.js
│       ├── router.js
│       │
│       ├── services/
│       │   └── api.js
│       │
│       ├── utils/
│       │   └── helpers.js
│       │
│       ├── components/
│       │   ├── navbar.js
│       │   ├── characterCard.js
│       │   ├── episodeCard.js
│       │   └── locationCard.js
│       │
│       ├── pages/
│       │   ├── home.js
│       │   ├── episodes.js
│       │   ├── locations.js
│       │   ├── contacts.js
│       │   └── about.js
│       │
│       └── views/
│           ├── home.html
│           ├── episodes.html
│           ├── locations.html
│           ├── contacts.html
│           └── about.html
│
└── README.md
```

# Ejecución del proyecto

## Crear un archivo .env

```bash
VITE_API_URL=https://rickandmortyapi.com/api
VITE_CONTENT_TYPE=application/json
VITE_TIME_OUT=5000
```

## Ejecutar el proyecto

Para ejecutar el proyecto, primero se debe instalar las dependencias y luego realizar el run del proyecto
```bash
npm install
npm run dev
```
![diagrama-simple-spa](https://github.com/user-attachments/assets/acc6b571-a2a4-4989-98b5-7217b71c0460)
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1800" font-family="Segoe UI, Arial, sans-serif">
  <defs>
    <marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#444"/>
    </marker>
    <marker id="ag" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#27AE60"/>
    </marker>
    <marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#E74C3C"/>
    </marker>
  </defs>

  <!-- FONDO -->
  <rect width="900" height="1800" fill="#F7F9FC"/>

  <!-- TÍTULO -->
  <rect x="40" y="16" width="820" height="50" rx="10" fill="#202329"/>
  <text x="450" y="47" text-anchor="middle" fill="white" font-size="18" font-weight="bold">Rick &amp; Morty SPA — Diagrama de Flujo</text>

  <!-- ══════════════════════════════════ -->
  <!-- SECCIÓN 1: NAVEGACIÓN SPA         -->
  <!-- ══════════════════════════════════ -->
  <rect x="40" y="82" width="820" height="30" rx="6" fill="#00b5cc"/>
  <text x="450" y="102" text-anchor="middle" fill="white" font-size="13" font-weight="bold">1. NAVEGACIÓN SPA</text>

  <!-- INICIO -->
  <rect x="325" y="128" width="250" height="40" rx="20" fill="#202329"/>
  <text x="450" y="153" text-anchor="middle" fill="white" font-size="13">Usuario abre la app</text>

  <line x1="450" y1="168" x2="450" y2="192" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- app.js -->
  <rect x="310" y="192" width="280" height="40" rx="6" fill="#2C3E50"/>
  <text x="450" y="208" text-anchor="middle" fill="white" font-size="12">app.js — DOMContentLoaded</text>
  <text x="450" y="224" text-anchor="middle" fill="#aaa" font-size="11">loadNavbar() + router()</text>

  <line x1="450" y1="232" x2="450" y2="256" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- decisión ruta -->
  <polygon points="450,256 570,280 450,304 330,280" fill="#E67E22"/>
  <text x="450" y="277" text-anchor="middle" fill="white" font-size="12" font-weight="bold">¿Ruta existe?</text>

  <!-- NO → 404 -->
  <line x1="570" y1="280" x2="680" y2="280" stroke="#E74C3C" stroke-width="2" marker-end="url(#ar)"/>
  <text x="625" y="273" text-anchor="middle" fill="#E74C3C" font-size="11" font-weight="bold">NO</text>
  <rect x="680" y="260" width="140" height="40" rx="6" fill="#922B21"/>
  <text x="750" y="284" text-anchor="middle" fill="white" font-size="12">Muestra 404</text>

  <!-- SÍ → rutas -->
  <line x1="450" y1="304" x2="450" y2="328" stroke="#27AE60" stroke-width="2" marker-end="url(#ag)"/>
  <text x="465" y="320" fill="#27AE60" font-size="11" font-weight="bold">SÍ</text>

  <!-- 5 rutas en línea -->
  <rect x="48"  y="328" width="130" height="40" rx="6" fill="#1A5276"/>
  <text x="113" y="344" text-anchor="middle" fill="white" font-size="11">/</text>
  <text x="113" y="360" text-anchor="middle" fill="#7FB3D3" font-size="10">renderHome()</text>

  <rect x="192" y="328" width="130" height="40" rx="6" fill="#1A5276"/>
  <text x="257" y="344" text-anchor="middle" fill="white" font-size="11">/episodes</text>
  <text x="257" y="360" text-anchor="middle" fill="#7FB3D3" font-size="10">renderEpisodes()</text>

  <rect x="336" y="328" width="130" height="40" rx="6" fill="#1A5276"/>
  <text x="401" y="344" text-anchor="middle" fill="white" font-size="11">/locations</text>
  <text x="401" y="360" text-anchor="middle" fill="#7FB3D3" font-size="10">renderLocations()</text>

  <rect x="480" y="328" width="130" height="40" rx="6" fill="#1A5276"/>
  <text x="545" y="344" text-anchor="middle" fill="white" font-size="11">/contacts</text>
  <text x="545" y="360" text-anchor="middle" fill="#7FB3D3" font-size="10">renderContacts()</text>

  <rect x="624" y="328" width="130" height="40" rx="6" fill="#1A5276"/>
  <text x="689" y="344" text-anchor="middle" fill="white" font-size="11">/about</text>
  <text x="689" y="360" text-anchor="middle" fill="#7FB3D3" font-size="10">renderAbout()</text>

  <!-- línea conectora rutas -->
  <line x1="450" y1="328" x2="113" y2="328" stroke="#27AE60" stroke-width="1.5"/>
  <line x1="450" y1="328" x2="257" y2="328" stroke="#27AE60" stroke-width="1.5"/>
  <line x1="450" y1="328" x2="401" y2="328" stroke="#27AE60" stroke-width="1.5"/>
  <line x1="450" y1="328" x2="545" y2="328" stroke="#27AE60" stroke-width="1.5"/>
  <line x1="450" y1="328" x2="689" y2="328" stroke="#27AE60" stroke-width="1.5"/>

  <!-- clic link -->
  <line x1="450" y1="368" x2="450" y2="396" stroke="#444" stroke-width="2" marker-end="url(#a)"/>
  <rect x="300" y="396" width="300" height="40" rx="6" fill="#4A235A"/>
  <text x="450" y="413" text-anchor="middle" fill="white" font-size="12">Clic en [data-link]</text>
  <text x="450" y="429" text-anchor="middle" fill="#C39BD3" font-size="11">navigateTo() → pushState → router()</text>

  <!-- nav-active -->
  <rect x="48" y="400" width="200" height="36" rx="6" fill="#1E6B52"/>
  <text x="148" y="416" text-anchor="middle" fill="white" font-size="11">loadNavbar() aplica</text>
  <text x="148" y="432" text-anchor="middle" fill="#A9DFBF" font-size="10">.nav-active al link actual</text>

  <!-- ══════════════════════════════════ -->
  <!-- SECCIÓN 2: RENDERIZADO            -->
  <!-- ══════════════════════════════════ -->
  <rect x="40" y="460" width="820" height="30" rx="6" fill="#8E44AD"/>
  <text x="450" y="480" text-anchor="middle" fill="white" font-size="13" font-weight="bold">2. RENDERIZADO</text>

  <line x1="450" y1="490" x2="450" y2="514" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- getCharacters -->
  <rect x="310" y="514" width="280" height="40" rx="6" fill="#154360"/>
  <text x="450" y="531" text-anchor="middle" fill="white" font-size="12">getCharacters() — API</text>
  <text x="450" y="547" text-anchor="middle" fill="#7FB3D3" font-size="11">GET /character → 20 resultados</text>

  <line x1="450" y1="554" x2="450" y2="578" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- decisión error API -->
  <polygon points="450,578 570,600 450,622 330,600" fill="#E67E22"/>
  <text x="450" y="605" text-anchor="middle" fill="white" font-size="12" font-weight="bold">¿Error de API?</text>

  <!-- sí error -->
  <line x1="570" y1="600" x2="680" y2="600" stroke="#E74C3C" stroke-width="2" marker-end="url(#ar)"/>
  <text x="625" y="593" text-anchor="middle" fill="#E74C3C" font-size="11" font-weight="bold">SÍ</text>
  <rect x="680" y="580" width="160" height="40" rx="6" fill="#922B21"/>
  <text x="760" y="596" text-anchor="middle" fill="white" font-size="11">showToast</text>
  <text x="760" y="612" text-anchor="middle" fill="#F1948A" font-size="10">'Error al conectar API'</text>

  <!-- no error -->
  <line x1="450" y1="622" x2="450" y2="646" stroke="#27AE60" stroke-width="2" marker-end="url(#ag)"/>
  <text x="465" y="638" fill="#27AE60" font-size="11" font-weight="bold">NO</text>

  <!-- initStore -->
  <rect x="310" y="646" width="280" height="40" rx="6" fill="#1E6B52"/>
  <text x="450" y="663" text-anchor="middle" fill="white" font-size="12">initStore(apiCharacters)</text>
  <text x="450" y="679" text-anchor="middle" fill="#A9DFBF" font-size="11">API + edited + local + deleted</text>

  <line x1="450" y1="686" x2="450" y2="710" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- store box -->
  <rect x="180" y="710" width="540" height="44" rx="6" fill="#1A2F45" stroke="#00b5cc" stroke-width="1.5"/>
  <text x="450" y="729" text-anchor="middle" fill="#00b5cc" font-size="12" font-weight="bold">Store en memoria</text>
  <text x="280" y="747" text-anchor="middle" fill="white" font-size="11">chars API filtrados</text>
  <text x="450" y="747" text-anchor="middle" fill="white" font-size="11">+ edits aplicados</text>
  <text x="620" y="747" text-anchor="middle" fill="white" font-size="11">+ ficticios locales</text>

  <line x1="450" y1="754" x2="450" y2="778" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- renderCharacters -->
  <rect x="310" y="778" width="280" height="40" rx="6" fill="#4A235A"/>
  <text x="450" y="795" text-anchor="middle" fill="white" font-size="12">renderCharacters()</text>
  <text x="450" y="811" text-anchor="middle" fill="#C39BD3" font-size="11">characterCard() × N → #content</text>

  <line x1="450" y1="818" x2="450" y2="842" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- DOM listo -->
  <rect x="325" y="842" width="250" height="40" rx="20" fill="#1E6B52"/>
  <text x="450" y="860" text-anchor="middle" fill="white" font-size="13" font-weight="bold">Grid visible en pantalla ✓</text>

  <!-- ══════════════════════════════════ -->
  <!-- SECCIÓN 3: CRUD                   -->
  <!-- ══════════════════════════════════ -->
  <rect x="40" y="906" width="820" height="30" rx="6" fill="#E74C3C"/>
  <text x="450" y="926" text-anchor="middle" fill="white" font-size="13" font-weight="bold">3. FLUJO CRUD — Usuario → DOM → Datos</text>

  <line x1="450" y1="936" x2="450" y2="960" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- usuario interactúa -->
  <rect x="325" y="960" width="250" height="40" rx="20" fill="#202329"/>
  <text x="450" y="985" text-anchor="middle" fill="white" font-size="13">Usuario interactúa</text>

  <line x1="450" y1="1000" x2="450" y2="1024" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- decisión acción -->
  <polygon points="450,1024 570,1050 450,1076 330,1050" fill="#E67E22"/>
  <text x="450" y="1056" text-anchor="middle" fill="white" font-size="12" font-weight="bold">¿Qué acción?</text>

  <!-- CREAR -->
  <line x1="330" y1="1050" x2="148" y2="1050" stroke="#27AE60" stroke-width="2" marker-end="url(#ag)"/>
  <text x="240" y="1042" text-anchor="middle" fill="#27AE60" font-size="11" font-weight="bold">CREAR</text>

  <!-- EDITAR -->
  <line x1="450" y1="1076" x2="450" y2="1108" stroke="#F39C12" stroke-width="2" marker-end="url(#a)"/>
  <text x="466" y="1097" fill="#F39C12" font-size="11" font-weight="bold">EDITAR</text>

  <!-- ELIMINAR -->
  <line x1="570" y1="1050" x2="752" y2="1050" stroke="#E74C3C" stroke-width="2" marker-end="url(#ar)"/>
  <text x="661" y="1042" text-anchor="middle" fill="#E74C3C" font-size="11" font-weight="bold">ELIMINAR</text>

  <!-- ── CREAR ── -->
  <rect x="48" y="1080" width="200" height="36" rx="6" fill="#1E6B52"/>
  <text x="148" y="1098" text-anchor="middle" fill="white" font-size="11">showModal(null)</text>
  <text x="148" y="1114" text-anchor="middle" fill="#A9DFBF" font-size="10">formulario vacío</text>

  <line x1="148" y1="1116" x2="148" y2="1140" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <polygon points="148,1140 238,1160 148,1180 58,1160" fill="#E67E22"/>
  <text x="148" y="1165" text-anchor="middle" fill="white" font-size="10" font-weight="bold">¿Válido?</text>

  <line x1="58"  y1="1160" x2="30"  y2="1160" stroke="#E74C3C" stroke-width="1.5"/>
  <rect x="30"  y="1148" width="0"   height="0"/>
  <text x="20"  y="1155" fill="#E74C3C" font-size="10">✗</text>

  <line x1="148" y1="1180" x2="148" y2="1204" stroke="#27AE60" stroke-width="2" marker-end="url(#ag)"/>

  <rect x="48" y="1204" width="200" height="36" rx="6" fill="#1A5276"/>
  <text x="148" y="1221" text-anchor="middle" fill="white" font-size="11">createCharacter(data)</text>
  <text x="148" y="1237" text-anchor="middle" fill="#7FB3D3" font-size="10">id: local_timestamp</text>

  <line x1="148" y1="1240" x2="148" y2="1264" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <rect x="48" y="1264" width="200" height="36" rx="6" fill="#4A235A"/>
  <text x="148" y="1281" text-anchor="middle" fill="white" font-size="11">localStorage</text>
  <text x="148" y="1297" text-anchor="middle" fill="#C39BD3" font-size="10">saved.local[] ← push</text>

  <!-- ── EDITAR ── -->
  <rect x="350" y="1108" width="200" height="36" rx="6" fill="#7D6608"/>
  <text x="450" y="1125" text-anchor="middle" fill="white" font-size="11">showModal(character)</text>
  <text x="450" y="1141" text-anchor="middle" fill="#F9E79F" font-size="10">formulario con datos actuales</text>

  <line x1="450" y1="1144" x2="450" y2="1168" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <rect x="350" y="1168" width="200" height="36" rx="6" fill="#1A5276"/>
  <text x="450" y="1186" text-anchor="middle" fill="white" font-size="11">updateCharacter(id, changes)</text>
  <text x="450" y="1202" text-anchor="middle" fill="#7FB3D3" font-size="10">sin tocar datos de la API</text>

  <line x1="450" y1="1204" x2="450" y2="1228" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <polygon points="450,1228 540,1248 450,1268 360,1248" fill="#E67E22"/>
  <text x="450" y="1253" text-anchor="middle" fill="white" font-size="10" font-weight="bold">¿local_*?</text>

  <line x1="360" y1="1248" x2="290" y2="1248" stroke="#27AE60" stroke-width="1.5" marker-end="url(#ag)"/>
  <rect x="200" y="1236" width="90" height="24" rx="4" fill="#1E6B52"/>
  <text x="245" y="1252" text-anchor="middle" fill="white" font-size="10">local update</text>

  <line x1="540" y1="1248" x2="610" y2="1248" stroke="#E74C3C" stroke-width="1.5" marker-end="url(#ar)"/>
  <rect x="610" y="1236" width="100" height="24" rx="4" fill="#1A5276"/>
  <text x="660" y="1252" text-anchor="middle" fill="white" font-size="10">edited[id] update</text>

  <!-- ── ELIMINAR ── -->
  <rect x="652" y="1080" width="200" height="36" rx="6" fill="#922B21"/>
  <text x="752" y="1098" text-anchor="middle" fill="white" font-size="11">window.confirm()</text>
  <text x="752" y="1114" text-anchor="middle" fill="#F1948A" font-size="10">¿Confirma eliminación?</text>

  <line x1="752" y1="1116" x2="752" y2="1140" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <polygon points="752,1140 842,1160 752,1180 662,1160" fill="#E67E22"/>
  <text x="752" y="1165" text-anchor="middle" fill="white" font-size="10" font-weight="bold">¿Confirma?</text>

  <line x1="842" y1="1160" x2="880" y2="1160" stroke="#E74C3C" stroke-width="1.5"/>
  <text x="876" y="1155" fill="#E74C3C" font-size="10">✗</text>

  <line x1="752" y1="1180" x2="752" y2="1204" stroke="#27AE60" stroke-width="2" marker-end="url(#ag)"/>

  <rect x="652" y="1204" width="200" height="36" rx="6" fill="#1A5276"/>
  <text x="752" y="1221" text-anchor="middle" fill="white" font-size="11">deleteCharacter(id)</text>
  <text x="752" y="1237" text-anchor="middle" fill="#7FB3D3" font-size="10">filter del array</text>

  <line x1="752" y1="1240" x2="752" y2="1264" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <rect x="652" y="1264" width="200" height="36" rx="6" fill="#4A235A"/>
  <text x="752" y="1281" text-anchor="middle" fill="white" font-size="11">localStorage</text>
  <text x="752" y="1297" text-anchor="middle" fill="#C39BD3" font-size="10">saved.deleted[] ← push id</text>

  <!-- ── CONVERGENCIA → RE-RENDER ── -->
  <line x1="148" y1="1300" x2="148" y2="1340" stroke="#444" stroke-width="1.5"/>
  <line x1="450" y1="1268" x2="450" y2="1340" stroke="#444" stroke-width="1.5"/>
  <line x1="752" y1="1300" x2="752" y2="1340" stroke="#444" stroke-width="1.5"/>
  <line x1="148" y1="1340" x2="752" y2="1340" stroke="#444" stroke-width="1.5"/>
  <line x1="450" y1="1340" x2="450" y2="1364" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- toast feedback -->
  <rect x="540" y="1320" width="180" height="28" rx="6" fill="#1E6B52"/>
  <text x="630" y="1338" text-anchor="middle" fill="white" font-size="11">showToast('✓ acción')</text>

  <!-- closeModal + renderCharacters -->
  <rect x="310" y="1364" width="280" height="40" rx="6" fill="#4A235A"/>
  <text x="450" y="1381" text-anchor="middle" fill="white" font-size="12">closeModal()</text>
  <text x="450" y="1397" text-anchor="middle" fill="#C39BD3" font-size="11">renderCharacters() — re-pinta grid</text>

  <line x1="450" y1="1404" x2="450" y2="1428" stroke="#444" stroke-width="2" marker-end="url(#a)"/>

  <!-- FIN -->
  <rect x="325" y="1428" width="250" height="40" rx="20" fill="#1E6B52"/>
  <text x="450" y="1447" text-anchor="middle" fill="white" font-size="13" font-weight="bold">DOM actualizado ✓</text>
  <text x="450" y="1463" text-anchor="middle" fill="#A9DFBF" font-size="11">Sin recargar la página</text>

  <!-- ══════════════════════════════════ -->
  <!-- LEYENDA                           -->
  <!-- ══════════════════════════════════ -->
  <rect x="40" y="1496" width="820" height="28" rx="6" fill="#34495E"/>
  <text x="450" y="1515" text-anchor="middle" fill="white" font-size="12" font-weight="bold">LEYENDA</text>

  <rect x="60"  y="1540" width="18" height="18" rx="9" fill="#202329"/>
  <text x="86"  y="1553" fill="#333" font-size="12">Inicio / Fin</text>

  <rect x="190" y="1540" width="18" height="18" rx="4" fill="#2C3E50"/>
  <text x="216" y="1553" fill="#333" font-size="12">Proceso</text>

  <polygon points="330,1549 360,1540 390,1549 360,1558" fill="#E67E22"/>
  <text x="400" y="1553" fill="#333" font-size="12">Decisión</text>

  <rect x="510" y="1540" width="18" height="18" rx="4" fill="#1A5276"/>
  <text x="536" y="1553" fill="#333" font-size="12">Store / Datos</text>

  <rect x="660" y="1540" width="18" height="18" rx="4" fill="#4A235A"/>
  <text x="686" y="1553" fill="#333" font-size="12">DOM / Render</text>

  <line x1="60" y1="1584" x2="90" y2="1584" stroke="#27AE60" stroke-width="2" marker-end="url(#ag)"/>
  <text x="100" y="1589" fill="#333" font-size="12">Flujo exitoso / SÍ</text>

  <line x1="310" y1="1584" x2="340" y2="1584" stroke="#E74C3C" stroke-width="2" marker-end="url(#ar)"/>
  <text x="350" y="1589" fill="#333" font-size="12">Error / NO</text>

  <rect x="560" y="1574" width="18" height="18" rx="4" fill="#1E6B52"/>
  <text x="586" y="1587" fill="#333" font-size="12">localStorage</text>

  <rect x="700" y="1574" width="18" height="18" rx="4" fill="#922B21"/>
  <text x="726" y="1587" fill="#333" font-size="12">Eliminar</text>

</svg>
