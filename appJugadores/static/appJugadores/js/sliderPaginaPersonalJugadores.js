var btnIzq = document.querySelector('#btnIzq'),
    btnDer = document.querySelector('#btnDer'),
    fotos = document.querySelector('.sliderPaginaPersonal');

let posicion = 0;
let cantidad = 0;

btnIzq.addEventListener('click', function(){
    if (posicion > 0) {
        posicion--;
        for (let i = 0; i < fotos.children.length; i++) {
            let cadena = `translateX(${100 + cantidad}%)`;
            fotos.children[i].style.transform = cadena;
        }
        cantidad = posicion*(-100);
    }
});

btnDer.addEventListener('click', function(){
    if (posicion < fotos.children.length-1) {
        posicion++;
        cantidad = posicion*(-100);
        for (let i = 0; i < fotos.children.length; i++) {
            let cadena = `translateX(-${100*posicion}%)`;
            console.log(`translateX(-${100*posicion}%)`)
            fotos.children[i].style.transform = cadena;
        }
    }
});