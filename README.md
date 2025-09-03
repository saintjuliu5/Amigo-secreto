<em>  Creacion del proyecto del amigo secreto <em>

Página en HTML, CSS y JavaScript que permite agregar nombres y hacer un sorteo.
Objetivo: practicar DOM, arreglos y funciones.

## Cómo ejecutar
- Abrir index.html en un navegador.
- No requiere instalación.

## Estructura
- index.html: estructura de la página.
- style.css: estilos.
- app.js: lógica del juego.
- assets/: imágenes.

## Uso
1. Escribe un nombre y presiona “Añadir”.
2. Repite para varios nombres.
3. Presiona “Sortear amigo” para ver el resultado.

## Reglas de validación
- No permite nombre vacío.
- No permite nombres repetidos.
- Después de sortear, si intentas agregar un nombre nuevo, el juego se reinicia.

## Funciones principales
- agregarAmigo(): valida y agrega; actualiza la lista.
- mostrarNombres(): recorre el arreglo y dibuja la lista en el HTML.
- sortearAmigo(): elige un nombre al azar y lo muestra.
- reiniciarJuego(): limpia lista, resultado y estado.

## Estado
Finalizado.
