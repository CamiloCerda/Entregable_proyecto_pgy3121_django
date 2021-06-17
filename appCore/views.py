from django.shortcuts import render

from .models import Slider, Noticia, Jugador, ImagenJugador

# Create your views here.

def home(request):
    objSlider = Slider.objects.all()
    noticias = Noticia.objects.all()

    objJugador = Jugador.objects.all().order_by('-genero','apaterno')


    datos = {
        'sliders' : objSlider,
        'noticias': noticias,
        'jugadores':objJugador
        }

    return render(request, 'appCore/home.html', datos)