
let listadeamigos = []
let yaSeSorteo = false;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    if (yaSeSorteo) {
    reiniciarJuego();
        } let nombreamigo = document.getElementById('amigo').value;
        if (nombreamigo === "") {
        alert('debes de ingresar un nombre valido')
        return
        } else {
            if (listadeamigos.includes(nombreamigo)) {
            alert('nombre ya agregado');
            return
            } else {
            listadeamigos.push(nombreamigo);
            mostrarNombres();
            document.getElementById('amigo').value = "";
            }
        }
}

function mostrarNombres() {
  let nombre = "";
  for (let i = 0; i < listadeamigos.length; i++) {
    nombre += "<li>" + listadeamigos[i] + "</li>";
  }
  asignarTextoElemento('#listaAmigos', nombre);
}

function sortearAmigo() {
    let cantidadDeAmigos = listadeamigos.length;
    if (cantidadDeAmigos === 0) {
        return;
    }
    let numeroLimite = cantidadDeAmigos;
    let indice = Math.floor(Math.random() * numeroLimite);
    let amigosecreto = listadeamigos[indice];
    asignarTextoElemento('#listaAmigos', "");
    asignarTextoElemento('#resultado', "El amigo secreto es: " + amigosecreto);
     yaSeSorteo = true;
}

function reiniciarJuego() {
  listadeamigos = [];
  asignarTextoElemento('#listaAmigos', "");
  asignarTextoElemento('#resultado', "");
  yaSeSorteo = false;
}

 yaSeSorteo = true;