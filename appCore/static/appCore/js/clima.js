$(document).ready(function(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $.get({
                url:'https://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+
                    '&lon='+position.coords.longitude+'&appid=dc89a59a3e052b0f0691ed47133e374c&units=metric', 
                success: function(respuesta){
                    //console.log(respuesta);
                    $(".cajaImagenClima").css('display', 'block');
                    $(".cajaImagenPorDefecto").css('display', 'none');
                    $(".cajaImagenClima .cajaImagen").css('backgroundColor', descripciones[respuesta.weather[0].description].color);
                    $("#cajaImagen").html('<img class="w-100 p-4" alt="Imagen representativa del clima" id="imgClima">');
                    $("#imgClima").attr('src', 'https://openweathermap.org/img/wn/'+respuesta.weather[0].icon+'@2x.png');
                    $("#condicionesClima").text('Comuna de '+respuesta.name+', actualmente: '+respuesta.main.temp+' °C');
                    $("#recomendacionClima").text('"'+descripciones[respuesta.weather[0].description].desc+'"');
                },
                error: function(error){
                    console.log(error);
                }
            });
        });
    } 
    
    var descripciones = {'clear sky':{'desc':'El cielo esta despejado, ven con confianza!', 
                             'color':'#90d8ee'},
                        'few clouds':{'desc':'Trae un polerón, podría darte algo de frío', 
                             'color':'#cbe0e9'},
                        'scattered clouds':{'desc':'Hará frío, abrigate', 
                                 'color':'#d3dde0'},
                        'broken clouds':{'desc':'Podría llover, yo que tú traigo un paraguas', 
                             'color':'#969696'},
                        'overcast clouds':{'desc':'Podría llover, yo que tú traigo un paraguas', 
                                 'color':'#969696'},
                        'shower rain':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'light intensity drizzle':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'drizzle':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'heavy intensity drizzle':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'light intensity drizzle rain':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'drizzle rain':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'heavy intensity drizzle rain':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'shower rain and drizzle':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'heavy shower rain and drizzle':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'shower drizzle':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                             'color':'#5e6b7e'},
                        'light intensity shower rain':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                            'color':'#5e6b7e'},
                        'heavy intensity shower rain':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                            'color':'#5e6b7e'},
                        'ragged shower rain':{'desc':'No olvides tu paraguas, ten por seguro que te mojarás si lo haces', 
                            'color':'#5e6b7e'},
                        'rain':{'desc':'Llueve a cantaros, no es necesario entrenar hoy creemos', 
                            'color':'#5e6b7e'},
                        'light rain':{'desc':'Llueve a cantaros, no es necesario entrenar hoy creemos', 
                            'color':'#5e6b7e'},
                        'moderate rain':{'desc':'Llueve a cantaros, no es necesario entrenar hoy creemos', 
                            'color':'#5e6b7e'},
                        'heavy intensity rain':{'desc':'Llueve a cantaros, no es necesario entrenar hoy creemos', 
                            'color':'#5e6b7e'},
                        'very heavy rain':{'desc':'Llueve a cantaros, no es necesario entrenar hoy creemos', 
                            'color':'#5e6b7e'},
                        'freezing rain':{'desc':'Llueve a cantaros, no es necesario entrenar hoy creemos', 
                            'color':'#5e6b7e'},
                        'extreme rain':{'desc':'Llueve a cantaros, no es necesario entrenar hoy creemos', 
                            'color':'#5e6b7e'},
                        'thunderstorm':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'thunderstorm with light rain':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'thunderstorm with rain':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'thunderstorm with heavy rain':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'light thunderstorm':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'heavy thunderstorm':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'ragged thunderstorm':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'thunderstorm with light drizzle':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'thunderstorm with drizzle':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'thunderstorm with heavy drizzle':{'desc':'Peligro, caen truenos, mejor resguardate en tu hogar', 
                            'color':'#5e6b7e'},
                        'snow':{'desc':'Hoy llegó la nieve, disfruta en casa. Estamos cerrados.', 
                            'color':'#e0e0e0'},
                        'mist':{'desc':'No se ve nada, aún no es momento de salir del hogar', 
                            'color':'#cbe0e9'}}
});