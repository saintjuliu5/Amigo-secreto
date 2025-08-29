
let listadeamigos = []

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let nombreamigo = document.getElementById('amigo').value;
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


function condicionesIniciales() {
    asignarTextoElemento('#listaAmigos',"");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}