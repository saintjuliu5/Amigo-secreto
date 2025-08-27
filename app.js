
let listadeamigos = []



function agregarAmigo() {
    let nombreamigo = document.getElementById('amigo').value;
    console.log(nombreamigo);
    if (nombreamigo === "") {
        alert('debes de ingresar un nombre valido')
    } else {
        if (listadeamigos.includes(nombreamigo)) {
        alert('nombre ya agregado');
        } else {
        listadeamigos.push(nombreamigo);
        return nombreamigo;
        }
    }
}