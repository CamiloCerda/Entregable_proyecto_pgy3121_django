from django.shortcuts import render

from .models import Slider, Noticia, Jugador, ImagenJugador

# Create your views here.

def home(request):
    objSlider = Slider.objects.all().order_by('-idImagen')
    max_id = objSlider[0].idImagen
    noticias = Noticia.objects.all()

    objJugador = Jugador.objects.all().order_by('-genero','apaterno')


    datos = {
        'sliders' : objSlider,
        'noticias': noticias,
        'jugadores':objJugador,
        'maxId':max_id
        }

    return render(request, 'appCore/home.html', datos)