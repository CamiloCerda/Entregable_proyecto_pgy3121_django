let subContenedor = document.querySelector('.subContenedor')
let jugadores = subContenedor.children;
let btnIzq = document.getElementById('btnIzq'), btnDer = document.getElementById('btnDer');

let posicion = 0;
var cantidad = 0;

btnIzq.addEventListener('click', function(){
    if (posicion > 0) {
        posicion--;
        for (let i = 0; i < jugadores.length; i++) {
            let cadena = `translateX(${100 + cantidad}%)`;
            jugadores[i].style.transform = cadena;
        }
        cantidad = posicion*(-100);
    }
});

btnDer.addEventListener('click', function(){
    if (posicion < 30) {
        posicion++;
        cantidad = posicion*(-100);
        for (let i = 0; i < jugadores.length; i++) {
            let cadena = `translateX(-${100*posicion}%)`;
            jugadores[i].style.transform = cadena;
        }
    }
});



