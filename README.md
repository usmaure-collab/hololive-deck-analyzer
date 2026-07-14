# Simulador y Analista de Decks Hololive OCG 🌟

Una potente y moderna aplicación web interactiva desarrollada en **Vanilla JavaScript y HTML5 (Arquitectura App Shell)** para crear, guardar, coleccionar, simular aperturas y analizar mazos de hololive OFFICIAL CARD GAME. 

Sin frameworks pesados, sin instalaciones, **todo en tu navegador local**.

## ✨ Características y Funcionalidades Principales

Esta aplicación ha crecido orgánicamente hasta convertirse en una suite completa para TCG. 

### 1. 📦 Gacha Simulator (Apertura de Sobres)
- **Simulador de sobres aleatorios:** Abre packs y siente la emoción del Gacha con efectos visuales avanzados, partículas mágicas (magicalFloat) y auras de rareza (Rainbow Glow Effects).
- **Sistema de Rarezas Ponderado:** Algoritmos que respetan las probabilidades de obtener cartas SR, UR, SEC, OUR y OSR, así como variantes de arte alternativas dinámicas.
- **Spark System:** Sistema de piedad/seguro por aperturas.
- **Inventario Persistente:** Todo lo que abres se guarda en tu Colección local, y puedes ver el progreso de lo que posees y de lo que te falta.

### 2. 📚 Álbum y Catálogo 100% Interactivo
- **Catálogo de Cartas Optimizado:** Un grid masivo con paginación inteligente, `lazy loading` de imágenes y delegación de eventos para asegurar un rendimiento de 60fps constantes, liberando memoria de GPU.
- **Filtros Avanzados:** Búsqueda en tiempo real por Nombre, Número, Tipo, Color y **Expansión (Set)**.
- **Efectos 3D y Glassmorphism:** Pasear el mouse sobre las cartas invoca un cálculo 3D en vivo con sombreados, inclinaciones interactivas (`tilt effect`) y reflejos en lámina arcoíris (holograma) basados en el CSS avanzado y matemáticas de rotación.
- **Widget Flotante de Detalles:** Ventana flotante (`draggable`) estilo glassmorphism (vidrio esmerilado) que se puede arrastrar por toda la pantalla y encoger a formato "lupa", permitiendo leer habilidades sin abandonar la lista de resultados.

### 3. 🛠️ Constructor de Mazos (Deck Builder)
- **Estructura H-OCG:** Soporte estricto de las reglas oficiales: 1 Oshi, Main Deck de 50 cartas y Cheer Deck de 20 cartas.
- **Validación Automática:** Restricciones de copias (máximo 4 copias, límites EN vigentes, control por `card.limit`), bloqueador de cartas de colores incompatibles y auto-corrección de HP/Life para Oshi y Holomems.
- **Drag & Drop (Arrastrar y Soltar):** Agrega cartas de tu catálogo directamente arrastrándolas a tu deck visual.
- **Múltiples Mazos:** Crea copias infinitas, renómbralos y cambia de activo al instante.

### 4. 📊 Herramientas de Análisis Heurístico
- **Analista Integrado:** El motor del juego escanea tu mazo en tiempo real y evalúa tus probabilidades de curva "Bloom", consistencia de apertura, conteo de sinergias (Arts/Tags) y equilibrio de Oshi vs Cheers.
- **Comparador:** Escoge dos de tus mazos guardados (Ej: Mumei Aggro vs Suisei Control) y compara directamente estadísticas vitales frente a frente.

### 5. 💾 Gestión de Datos y Exportación Base64
- **Persistencia Offline:** Tus cartas, colecciones y configuraciones (incluyendo en dónde dejaste la ventana flotante) viven en tu `localStorage` del navegador. 
- **Share/Import:** Exporta tu base de datos a un formato encriptado de texto JSON y compártelo con el formato compatible con **HoloDelta**, logrando portabilidad absoluta sin bases de datos externas.

## 🚀 Arquitectura y Rendimiento

- **App Shell en Vanilla JS:** Cero dependencias (Sin React, Sin Vue). Toda la aplicación se renderiza y actualiza dinámicamente inyectando DOM estructurado dentro de `<div id="app">`.
- **Rendimiento Gráfico:** Optimizaciones de `will-change`, prevención del repintado de DOM inyectado en Eventos como `mousemove`, y un motor unificado global de eventos que no sobrecarga la memoria al interactuar con 10,000 elementos a la vez.
- **Delegación de Eventos Pura:** Desde el "Drag & Drop" del Widget hasta los clics a los detalles de cartas, casi todas las interacciones dependen de Listeners Root para asegurar latencia cero.

---

## 🔒 Seguridad
- Sin scripts remotos ni telemetría.
- Sin recolección de credenciales ni APIs secretas.
- Todo tu inventario y mazos es 100% tuyo, alojado de manera segura en tu navegador local (Offline-first).

¡Simplemente abre el `index.html` en Chrome, Safari, Edge o Firefox y sumérgete en el universo del H-OCG!
