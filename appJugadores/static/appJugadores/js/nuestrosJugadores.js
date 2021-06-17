class jugador {
    constructor(id, nombre, edad, estilo, categoria, genero, descripcion, pagina){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.estilo = estilo;
        this.categoria = categoria;
        this.genero = genero;
        this.descripcion = descripcion;
        this.pagina = pagina;
    }
}

let jugadores = [];
jugadores.push(new jugador(1, 'Camilo Cerda', 28, 'clásico', 'T.C.', 'hombre', 'descripcion', '../html/CamiloCerda.html'));
jugadores.push(new jugador(2, 'Gonzalo Muñoz', 31, 'clásico', 'T.C.', 'hombre', 'descripcion', '../html/GonzaloMunoz.html'));
jugadores.push(new jugador(3, 'Claudio Palacios', 27, 'estilo 3', 'T.C.', 'hombre', 'descripcion', '../html/ClaudioPalacios.html'));
jugadores.push(new jugador(4, 'Camilo Masias', 16, 'clásico', 'juvenil', 'hombre', 'descripcion', '../html/CamiloMasias.html'));
jugadores.push(new jugador(5, 'Ding Ning', 18, 'clásico', 'juvenil', 'mujer', 'descripcion', '../html/CamiloMasias.html'));
jugadores.push(new jugador(6, 'Pablo Duffé', 26, 'clásico', 'T.C.', 'hombre', 'descripcion', '../html/PabloDuffe.html'));
jugadores.push(new jugador(7, 'Iván Sánchez', 22, 'clásico', 'T.C.', 'hombre', 'descripcion', '../html/IvanSanchez.html'));
jugadores.push(new jugador(8, 'Rodrigo Correa', 35, 'clásico', 'T.C.', 'hombre', 'descripcion', '../html/RodrigoCorrea.html'));
jugadores.push(new jugador(9, 'Claudio Verdugo', 26, 'clásico', 'T.C.', 'hombre', 'descripcion', '../html/CludioVerdugo.html'));
jugadores.push(new jugador(10, 'Miguel Quilodrán', 27, 'lapicero', 'T.C.', 'hombre', 'descripcion', '../html/MiguelQuilodran.html'));
jugadores.push(new jugador(11, 'Bastián Maureira', 25, 'lapicero', 'T.C.', 'hombre', 'descripcion', '../html/BastianMaureira.html'));
jugadores.push(new jugador(12, 'Matias Arias', 26, 'lapicero', 'T.C.', 'hombre', 'descripcion', '../html/MatiasArias.html'));
jugadores.push(new jugador(13, 'Javier Herdocio', 55, 'lapicero', 'T.C.', 'hombre', 'descripcion', '../html/JavierHerdocio.html'));
jugadores.push(new jugador(14, 'Bernadette Sockz', 27, 'clásico', 'T.C.', 'mujer', 'descripcion', '../html/CamiloMasias.html'));
jugadores.push(new jugador(15, 'Mima Ito', 20, 'clásico', 'T.C.', 'mujer', 'descripcion', '../html/CamiloMasias.html'));
jugadores.push(new jugador(16, 'Liu Shiwen', 24, 'clásico', 'T.C.', 'mujer', 'descripcion', '../html/CamiloMasias.html'));
jugadores.push(new jugador(17, 'Chen Meng', 18, 'clásico', 'juvenil', 'mujer', 'descripcion', '../html/CamiloMasias.html'));

let imagenesJugadores = [[1, '../img/tdm/galeria/jugadores/9.jpg'],
                         [2, '../img/tdm/galeria/jugadores/6.jpg'], 
                         [3, '../img/tdm/galeria/jugadores/2.jpg'],
                         [4, '../img/tdm/galeria/jugadores/1.jpg'], 
                         [5, '../img/tdm/galeria/jugadores/13.jpg'],
                         [6, '../img/tdm/galeria/jugadores/3.jpg'], 
                         [7, '../img/tdm/galeria/jugadores/5.jpg'],
                         [8, '../img/tdm/galeria/jugadores/4.jpg'],
                         [9, '../img/tdm/galeria/jugadores/10.jpg'],
                         [10, '../img/tdm/galeria/jugadores/12.jpg'], 
                         [11, '../img/tdm/galeria/jugadores/11.jpg'],
                         [12, '../img/tdm/galeria/jugadores/8.jpg'],
                         [13, '../img/tdm/galeria/jugadores/7.jpg'],
                         [14, '../img/tdm/galeria/jugadores/14.jpg'], 
                         [15, '../img/tdm/galeria/jugadores/15.jpg'],
                         [16, '../img/tdm/galeria/jugadores/16.jpg'],
                         [17, '../img/tdm/galeria/jugadores/17.jpg']];
                     
function buscar(){
    let radioSeleccionado, comboBoxCategoriaSeleccionado; 
    if (contenedorjugadores.children.length > 0) {
        let condicion = true;
        while(condicion){
            try {
                contenedorjugadores.removeChild(contenedorjugadores.children[0]);
            }catch(error) {
                    condicion = false;
                }
        }
    }
    
    //rescatar el valor del radio button genero seleccionado
    for (let i = 0; i < radioBotonesGenero.length; i++) {
        if(radioBotonesGenero[i].checked) {
            radioSeleccionado = radioBotonesGenero[i].value;
        }
    }
    //rescatar el valor del combo Box catgoria seleccionado
    comboBoxCategoriaSeleccionado = comboBoxCategoria.value;

    //creamos una lista que guardará los jugadores que cumplen el requisito buscado
    let jugadoresCumplenSeleccion = [], imagenesJugadoreCumplenSeleccion = [];
    for(let i = 0; i < jugadores.length; i++) {
        if((radioSeleccionado == jugadores[i].genero || radioSeleccionado == 'todos') && (comboBoxCategoriaSeleccionado == jugadores[i].categoria || comboBoxCategoriaSeleccionado == 'todos')){
            jugadoresCumplenSeleccion.push(jugadores[i]);
            imagenesJugadoreCumplenSeleccion.push(imagenesJugadores[i]);
        }
    }
    if(jugadoresCumplenSeleccion.length == 0) {
        let noHayJugadores = document.createElement('div');
        noHayJugadores.classList.add('mensajeInicial');
        contenedorjugadores.appendChild(noHayJugadores);
        let mensaje = document.createElement('h2');
        mensaje.textContent = 'No hay jugadores que cumplan con la condición especificada';
        noHayJugadores.appendChild(mensaje);
    }else {
        //si hay jugadores
        for(let i = 0; i < jugadoresCumplenSeleccion.length; i++) {
            let jugadorDiv = document.createElement('div');
            jugadorDiv.classList.add('jugador');
            contenedorjugadores.appendChild(jugadorDiv);
            let imagenJugador = document.createElement('img');
            imagenJugador.setAttribute("src", imagenesJugadoreCumplenSeleccion[i][1]);
            imagenJugador.setAttribute("alt", "jugador(a) ass");
            imagenJugador.setAttribute("title", "jugador(a) ass");
            jugadorDiv.appendChild(imagenJugador);
            let nombreJugador = document.createElement('a');
            nombreJugador.textContent = jugadoresCumplenSeleccion[i].nombre;
            nombreJugador.href = jugadoresCumplenSeleccion[i].pagina;
            //nombreJugador.target = '_blank';
            jugadorDiv.appendChild(nombreJugador);
        }
    }
}
/*--- Variables ---*/
var botonBuscar = document.querySelector('.buscar'),
    contenedorjugadores = document.querySelector('.jugadores'),
    radioBotonesGenero = document.getElementsByName('radioGenero'),
    comboBoxCategoria = document.getElementById('category');

botonBuscar.addEventListener('click', buscar);