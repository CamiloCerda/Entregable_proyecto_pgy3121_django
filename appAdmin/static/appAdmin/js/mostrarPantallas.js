$(document).ready(function(){
    function ocultar(nombre) {
        let main = document.querySelector('main');
        for(let i = 0; i < main.children.length; i++) {
            if(main.children[i].className != nombre) {
                main.children[i].style.display = 'none';
            }
        }
    }
    

    $('.directiva').on('click', function(){
        document.querySelector('.directivaCore').style.display = 'block';
        ocultar('directivaCore');
        $('.imagen').slideUp(1000);
        $('.RRSS').slideUp(1000);
    });

    $('.nuestraHistoria').on('click', function(){
        document.querySelector('.nuestraHistoriaCore').style.display = 'block';

        //document.querySelector('.nuestraHistoriaCore').style.transform = 'translateX(0)';

        ocultar('nuestraHistoriaCore');
        $('.imagen').slideUp(1000);
        $('.RRSS').slideUp(1000);
    });


    $('.inicioBtn').on('click', function(){
        $('.imagen').slideDown(1000);
        $('.RRSS').slideDown(1000, function(){
            document.querySelector('.inicio').style.display = 'block';
            ocultar('inicio');
        });
    });
});
/* 
let cont = document.querySelector('main')
undefined
cont.children('div')

cont.children
HTMLCollection(2) [div.inicio, div.nuestraHistoria]
cont.children[0]
<div class=​"inicio">​…​</div>​
cont.children[1]
<div class=​"nuestraHistoria">​…​</div>​
cont.children[0].className
"inicio"
cont.children[0].className == 'inicio'
true
cont.children[0].style.display = 'none'
"none"
*/


/* function mostrar(clase){
    for(let i = 0; i < main.children.length; i++) {
        if(main.children[i].className != clase) {
            main.children[i].style.display = 'none';
        }else {
            main.children[i].style.display = 'block';
        }
    }
    console.log(clase);
}


let inicio = document.querySelector('.inicio'), 
    nuestraHistoria = document.querySelector('.nuestraHistoria'),
    directiva = document.querySelector('.directiva'),
    jugadores = document.querySelector('.jugadores'),
    main = document.querySelector('main');


inicio.addEventListener('click', mostrar('inicio'));
nuestraHistoria.addEventListener('click', mostrar('nuestraHistoria'));
directiva.addEventListener('click', mostrar('directiva'));
jugadores.addEventListener('click', mostrar('jugadores')); */